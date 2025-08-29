#!/usr/bin/env node

const crypto = require('crypto');

function generateSecret(length = 64) {
  return crypto.randomBytes(length).toString('hex');
}

function generateJWTSecret() {
  return crypto.randomBytes(32).toString('base64');
}

console.log('🔐 Generating secure secrets for ZimTour...\n');

console.log('📋 Environment Variables to add to your .env.local file:\n');

console.log('# JWT Configuration');
console.log(`JWT_SECRET="${generateJWTSecret()}"`);
console.log('');

console.log('# Admin Setup (only needed for initial setup)');
console.log(`ADMIN_SETUP_SECRET="${generateSecret(32)}"`);
console.log('');

console.log('# Database Configuration (update with your details)');
console.log('DATABASE_URL="postgresql://username:password@localhost:5432/zimtour_db"');
console.log('');

console.log('# Environment');
console.log('NODE_ENV="development"');
console.log('');

console.log('⚠️  Important Security Notes:');
console.log('1. Keep these secrets secure and never commit them to version control');
console.log('2. Use different secrets for development and production');
console.log('3. Store production secrets in a secure environment variable service');
console.log('4. Regularly rotate your JWT secrets in production');
console.log('5. Use strong database passwords');
console.log('');

console.log('✅ Secrets generated successfully!');
console.log('📝 Copy the above variables to your .env.local file');
