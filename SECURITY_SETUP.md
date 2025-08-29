# 🔐 Security Setup Guide

## Overview
This guide will help you set up secure authentication for the ZimTour admin panel using PostgreSQL and JWT tokens.

## 🚀 Quick Setup

### 1. Environment Variables
Create a `.env.local` file in your project root with the following variables:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/zimtour_db"

# JWT Configuration (Generate a strong secret)
JWT_SECRET="your-super-secret-jwt-key-here-make-it-long-and-random"

# Admin Setup (only needed for initial setup)
ADMIN_SETUP_SECRET="your-admin-setup-secret-key"

# Environment
NODE_ENV="development"
```

### 2. Database Setup
```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Or run migrations
npm run db:migrate
```

### 3. Create Admin User
```bash
# Run the setup script
npm run setup-admin
```

This will create an admin user with these credentials:
- **Email:** `admin@zimtour.co.zw`
- **Password:** `ZimTour2024!`

## 🔒 Security Features Implemented

### ✅ Secure Authentication
- **JWT Tokens** - Secure token-based authentication
- **Password Hashing** - bcrypt with 12 salt rounds
- **Role-Based Access** - Only ADMIN users can access admin panel
- **Session Management** - Secure cookie and localStorage handling

### ✅ Database Security
- **Input Validation** - Zod schema validation
- **SQL Injection Protection** - Prisma ORM prevents SQL injection
- **Admin Logging** - All admin actions are logged with IP addresses

### ✅ Route Protection
- **Middleware Protection** - Admin routes protected by middleware
- **Token Verification** - JWT tokens verified on every request
- **Automatic Logout** - Invalid tokens trigger automatic logout

### ✅ Password Security
- **Strong Password Policy** - Minimum 8 characters
- **Secure Hashing** - bcrypt with high salt rounds
- **Password Change Required** - Initial password should be changed

## 🛡️ Additional Security Recommendations

### 1. Change Default Password
After first login, immediately change the admin password through the admin panel.

### 2. Environment Variables
- Use strong, random JWT secrets
- Never commit `.env` files to version control
- Use different secrets for development and production

### 3. Database Security
- Use strong database passwords
- Enable SSL connections in production
- Regular database backups
- Monitor database access logs

### 4. Production Deployment
- Use HTTPS only
- Set secure cookie flags
- Implement rate limiting
- Regular security updates
- Monitor access logs

### 5. Admin User Management
- Create additional admin users as needed
- Implement password reset functionality
- Regular security audits
- Monitor admin activity logs

## 🔧 API Endpoints

### Admin Authentication
- `POST /api/auth/admin-login` - Admin login
- `POST /api/auth/setup-admin` - Create initial admin (protected)

### User Management
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

## 📝 Admin Logs
All admin actions are automatically logged with:
- User ID
- Action type
- Timestamp
- IP address
- Additional details

## 🚨 Security Checklist

- [ ] Environment variables configured
- [ ] Database connected and schema applied
- [ ] Admin user created
- [ ] Default password changed
- [ ] HTTPS enabled (production)
- [ ] Regular backups configured
- [ ] Monitoring set up
- [ ] Security updates automated

## 🆘 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Check DATABASE_URL format
   - Verify database is running
   - Check network connectivity

2. **JWT Token Errors**
   - Verify JWT_SECRET is set
   - Check token expiration
   - Clear browser storage

3. **Admin Access Denied**
   - Verify user role is 'ADMIN'
   - Check if user is active
   - Verify token is valid

### Support
For security-related issues, contact your system administrator or refer to the application logs.
