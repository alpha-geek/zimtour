#!/bin/bash

echo "🔧 Setting up ZimTour environment variables..."

# Check if .env.local already exists
if [ -f ".env.local" ]; then
    echo "⚠️  .env.local already exists. Backing up to .env.local.backup"
    cp .env.local .env.local.backup
fi

# Create .env.local with placeholder values
cat > .env.local << EOF
# Database Configuration (update with your actual database URL)
DATABASE_URL="postgresql://username:password@localhost:5432/zimtour_db"

# JWT Configuration (generate secure secret for production)
JWT_SECRET="your-super-secret-jwt-key-here-make-it-long-and-random"

# Admin Setup (generate secure secret for production)
ADMIN_SETUP_SECRET="your-admin-setup-secret-key"

# Environment
NODE_ENV="development"
EOF

echo "✅ .env.local created successfully!"
echo ""
echo "📝 Next steps:"
echo "1. Update DATABASE_URL with your PostgreSQL connection string"
echo "2. Generate secure secrets using: npm run generate-secrets"
echo "3. Update JWT_SECRET and ADMIN_SETUP_SECRET with secure values"
echo "4. Run: npm run db:generate && npm run db:push"
echo "5. Create admin user: npm run setup-admin"
echo ""
echo "🔒 For production, use strong, random secrets and enable HTTPS"
