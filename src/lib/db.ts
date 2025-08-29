import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Create Prisma client with error handling
const createPrismaClient = () => {
  try {
    return new PrismaClient({
      datasources: {
        db: {
          url: process.env.DATABASE_URL || 'postgresql://placeholder:placeholder@localhost:5432/placeholder',
        },
      },
    });
  } catch (error) {
    console.warn('Failed to create Prisma client:', error);
    // Return a mock client for development
    return {
      user: { findUnique: () => null, create: () => null, findFirst: () => null },
      adminLog: { create: () => null },
    } as any;
  }
};

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
