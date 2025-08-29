import { NextRequest, NextResponse } from 'next/server';
import { createUser } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { z } from 'zod';

const setupAdminSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  phone: z.string().optional(),
  secretKey: z.string(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = setupAdminSchema.parse(body);

    // Verify secret key (should be set in environment variables)
    const expectedSecretKey = process.env.ADMIN_SETUP_SECRET;
    if (!expectedSecretKey || validatedData.secretKey !== expectedSecretKey) {
      return NextResponse.json(
        { error: 'Invalid secret key' },
        { status: 403 }
      );
    }

    // Check if admin already exists
    const existingAdmin = await prisma.user.findFirst({
      where: { role: 'ADMIN' }
    });

    if (existingAdmin) {
      return NextResponse.json(
        { error: 'Admin user already exists' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      );
    }

    // Create admin user
    const adminUser = await createUser({
      ...validatedData,
      role: 'ADMIN',
    });

    // Remove password from response
    const { password, ...userWithoutPassword } = adminUser;

    return NextResponse.json({
      message: 'Admin user created successfully',
      user: userWithoutPassword,
    }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input data', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Setup admin error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
