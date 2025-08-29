# ZimTour - Zimbabwe Tour Company Web Application

A modern, responsive web application for ZimTour, Zimbabwe's premier tour company. Built with Next.js 14, TypeScript, and modern web technologies.

## 🌟 Features

### 🏠 **Core Services**
- **Airport Transfers** - Reliable transfers from all major Zimbabwe airports
- **Day Tours** - Guided tours to Victoria Falls, Hwange National Park, and more
- **Hotel Bookings** - Accommodation at local hotels and guest houses
- **Custom Itineraries** - Personalized travel planning
- **Game Reserve Tours** - Wildlife safaris and nature experiences
- **Group Tours** - Specialized group travel arrangements

### 🎨 **Design & User Experience**
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Responsive Design** - Mobile-first approach, works on all devices
- **Interactive Elements** - Hover effects, smooth transitions, and engaging interactions
- **Accessibility** - WCAG compliant with proper ARIA labels and semantic HTML

### ⚡ **Performance & SEO**
- **Server-Side Rendering (SSR)** - Better SEO and faster initial page loads
- **Static Site Generation (SSG)** - Optimized performance for static content
- **Image Optimization** - Next.js built-in image optimization
- **Meta Tags** - Comprehensive SEO metadata for all pages
- **Open Graph** - Social media sharing optimization

## 🛠️ Technology Stack

### **Frontend Framework**
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript development
- **React 18** - Latest React features and hooks

### **Styling & UI**
- **CSS3** - Custom CSS with CSS Grid and Flexbox
- **CSS Variables** - Consistent design system
- **Responsive Design** - Mobile-first responsive layouts

### **Icons & Graphics**
- **React Icons** - FontAwesome icon library integration
- **Optimized Images** - High-quality images from Unsplash

### **Development Tools**
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing and optimization
- **Tailwind CSS** - Utility-first CSS framework (configured)

## 📁 Project Structure

```
zimtour-nextjs/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Home page (landing page)
│   │   ├── tours/page.tsx     # Tours listing and filtering
│   │   ├── contact/page.tsx   # Contact form and information
│   │   ├── layout.tsx         # Root layout with Navbar/Footer
│   │   ├── globals.css        # Global styles and CSS variables
│   │   └── favicon.ico        # Site favicon
│   ├── components/            # Reusable React components
│   │   ├── Navbar.tsx         # Navigation component
│   │   └── Footer.tsx         # Footer component
│   └── ...
├── public/                    # Static assets
├── package.json              # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
├── postcss.config.mjs       # PostCSS configuration
├── eslint.config.mjs        # ESLint configuration
└── README.md                # This file
```

## 🎨 Design System

### **Color Palette**
```css
--primary-color: #059669      /* Main brand green */
--primary-dark: #047857       /* Darker green for hover states */
--primary-light: #10b981      /* Lighter green for accents */
--secondary-color: #f59e0b    /* Orange for CTAs and highlights */
--accent-color: #3b82f6       /* Blue for links and accents */
--text-primary: #1e293b       /* Main text color */
--text-secondary: #64748b     /* Secondary text color */
--text-light: #94a3b8         /* Light text color */
--background-light: #f8fafc   /* Light background */
--background-white: #ffffff   /* White background */
--border-color: #e2e8f0       /* Border color */
```

### **Typography**
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700
- **Responsive Typography**: Scales appropriately across devices

### **Spacing & Layout**
- **Container**: Max-width 1200px with responsive padding
- **Grid System**: CSS Grid with auto-fit columns
- **Spacing**: Consistent spacing using CSS custom properties

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18.0 or later
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zimtour-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### **Available Scripts**

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 📱 Responsive Design

The application is built with a mobile-first approach and includes:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### **Key Responsive Features**
- Flexible grid layouts that adapt to screen size
- Responsive typography that scales appropriately
- Touch-friendly navigation and buttons
- Optimized images for different screen densities

## 🎯 Key Pages

### **Home Page (`/`)**
- Hero section with compelling call-to-action
- Services overview with icons and descriptions
- Statistics section highlighting company achievements
- Featured destinations with beautiful imagery
- "Why Choose Us" section with key benefits
- Call-to-action for booking and contact

### **Tours Page (`/tours`)**
- Comprehensive tour listings with filtering
- Category-based filtering (Wildlife, Cultural, Adventure, Day Trips)
- Sorting options (Popular, Rating, Price)
- Interactive tour cards with pricing and details
- Favorite functionality for user engagement
- Call-to-action for custom tours

### **Contact Page (`/contact`)**
- Contact form with validation
- Business hours and location information
- Multiple contact methods (phone, email, address)
- Social media links
- FAQ section for common questions

## 🔧 Customization

### **Adding New Pages**
1. Create a new file in `src/app/` directory
2. Export a default React component
3. Add navigation links in `src/components/Navbar.tsx`

Example:
```typescript
// src/app/services/page.tsx
export default function Services() {
  return (
    <div className="services-page">
      {/* Your content here */}
    </div>
  );
}
```

### **Modifying Styles**
- Global styles: Edit `src/app/globals.css`
- Component styles: Use styled-jsx within components
- CSS Variables: Update values in `:root` selector

### **Adding New Components**
1. Create component file in `src/components/`
2. Import and use in pages
3. Add TypeScript interfaces for props

## 🚀 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with one click

### **Netlify**
1. Build the project: `npm run build`
2. Deploy the `out` directory
3. Configure build settings in Netlify dashboard

### **Traditional Hosting**
1. Build the project: `npm run build`
2. Upload the `out` directory to your web server
3. Configure your web server for Next.js

## 📊 Performance Optimization

### **Built-in Optimizations**
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based code splitting
- **Prefetching**: Automatic link prefetching
- **Minification**: Automatic CSS and JS minification

### **SEO Features**
- **Meta Tags**: Dynamic meta tags for each page
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Ready for schema markup
- **Sitemap**: Automatic sitemap generation

## 🔒 Security Considerations

- **Input Validation**: Form validation on client and server
- **XSS Protection**: React's built-in XSS protection
- **HTTPS**: Enforce HTTPS in production
- **Content Security Policy**: Configure CSP headers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### **Code Style**
- Follow TypeScript best practices
- Use ESLint for code quality
- Write meaningful commit messages
- Include tests for new features

## 📞 Support

For support and inquiries:
- **Email**: info@zimtour.co.zw
- **Phone**: +263 77 123 4567
- **Business Hours**: Monday - Friday 8:00 AM - 6:00 PM

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For hosting and deployment solutions
- **React Icons** - For the comprehensive icon library
- **Unsplash** - For high-quality stock photography
- **Google Fonts** - For the Inter font family

---

**Built with ❤️ for ZimTour - Zimbabwe's Premier Tour Company**
