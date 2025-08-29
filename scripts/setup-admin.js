#!/usr/bin/env node

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function setupAdmin() {
  try {
    console.log('🔐 Setting up admin user...');

    // Check if admin already exists
    const existingAdmin = await prisma.user.findFirst({
      where: { role: 'ADMIN' }
    });

    if (existingAdmin) {
      console.log('❌ Admin user already exists');
      process.exit(1);
    }

    // Admin credentials
    const adminData = {
      email: 'admin@zimtour.co.zw',
      password: 'ZimTour2024!', // Strong password
      firstName: 'Admin',
      lastName: 'User',
      phone: '+263 77 123 4567',
      role: 'ADMIN',
      isActive: true
    };

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(adminData.password, saltRounds);

    // Create admin user
    const adminUser = await prisma.user.create({
      data: {
        ...adminData,
        password: hashedPassword,
      },
    });

    console.log('✅ Admin user created successfully!');
    console.log('📧 Email:', adminData.email);
    console.log('🔑 Password:', adminData.password);
    console.log('⚠️  Please change this password after first login!');

    // Create admin log entry
    await prisma.adminLog.create({
      data: {
        userId: adminUser.id,
        action: 'ADMIN_CREATED',
        details: 'Initial admin user created via setup script',
        ipAddress: 'setup-script',
      },
    });

  } catch (error) {
    console.error('❌ Error setting up admin:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

setupAdmin();
