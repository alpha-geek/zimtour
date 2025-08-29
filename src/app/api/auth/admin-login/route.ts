import { NextRequest, NextResponse } from 'next/server';
import { authenticateUser, generateToken } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { z } from 'zod';

const adminLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = adminLoginSchema.parse(body);

    // Development fallback authentication (remove in production)
    if (process.env.NODE_ENV === 'development') {
      if (validatedData.email === 'admin@zimtour.co.zw' && validatedData.password === 'ZimTour2024!') {
        const mockUser = {
          id: 'dev-admin-1',
          email: 'admin@zimtour.co.zw',
          firstName: 'Admin',
          lastName: 'User',
          role: 'ADMIN',
          isActive: true,
        };

        const token = generateToken({
          userId: mockUser.id,
          email: mockUser.email,
          role: mockUser.role,
        });

        return NextResponse.json({
          message: 'Admin login successful (Development Mode)',
          user: mockUser,
          token,
        });
      }
    }

    // Production authentication
    const user = await authenticateUser(validatedData.email, validatedData.password);

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Check if user is admin
    if (user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Access denied. Admin privileges required.' },
        { status: 403 }
      );
    }

    // Check if user is active
    if (!user.isActive) {
      return NextResponse.json(
        { error: 'Account is deactivated' },
        { status: 403 }
      );
    }

    // Generate JWT token
    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    // Remove password from response
    const { password, ...userWithoutPassword } = user;

    // Log admin login
    try {
      await prisma.adminLog.create({
        data: {
          userId: user.id,
          action: 'ADMIN_LOGIN',
          details: `Admin login from ${request.headers.get('x-forwarded-for') || 'unknown IP'}`,
          ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
        },
      });
    } catch (logError) {
      console.warn('Failed to log admin login:', logError);
    }

    return NextResponse.json({
      message: 'Admin login successful',
      user: userWithoutPassword,
      token,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input data', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Admin login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
