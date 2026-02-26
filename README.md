# Uday Aluminium Website

Modern, professional website for Uday Aluminium built with Next.js 14+, showcasing industrial aluminum products across 8 different series (1xxx-8xxx). Features a fast, SEO-optimized design with strong industrial aesthetics.

## 🚀 Features

- **Comprehensive Product Showcase**: Complete range of aluminum series from 1xxx to 8xxx
- **Modern Design**: Industrial aesthetic with metallic accents and clean typography
- **Responsive Layout**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Interactive Elements**: Smooth animations and hover effects
- **Contact Forms**: React Hook Form with validation
- **Fast Performance**: Next.js Image optimization and lazy loading

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS + custom CSS animations
- **UI Components**: Shadcn/ui design system
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod validation
- **Typography**: Inter font family

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd uday-aluminium
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design System

### Colors
- **Primary**: Deep navy/charcoal (#1a1f2e)
- **Secondary**: Aluminum silver (#c0c5ce, #e8eaed)
- **Accent**: Industrial orange (#ff6b35)
- **Background**: Off-white (#f5f7fa)

### Typography
- **Font**: Inter (clean, modern sans-serif)
- **Bold headings** with readable body text
- Proper contrast ratios for accessibility

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.js          # Root layout with header/footer
│   ├── page.js            # Home page
│   └── globals.css        # Global styles and Tailwind
├── components/
│   ├── ui/                # Shadcn/ui components
│   ├── layout/            # Header, Footer components
│   ├── home/              # Home page sections
│   └── shared/            # Reusable components
├── data/
│   └── productSeries.js   # Product data and content
└── lib/
    └── utils.js           # Utility functions
```

## 📄 Pages

### Implemented
- ✅ **Home Page**: Complete with all sections
  - Hero slider with 3 slides
  - About section with statistics
  - Why Choose Us features
  - Product series showcase
  - Certifications & quality
  - Contact form

### Planned
- 🔄 **Furnace & Rods** (`/furnace-rods`)
- 🔄 **Applications** (`/applications`)
- 🔄 **Product Series** (`/products`)
- 🔄 **Industries** (`/industries`)
- 🔄 **Contact** (`/contact`)

## 🎭 Animations

- **Fade in on scroll** for sections
- **Hover effects** on cards and buttons
- **Smooth transitions** between states
- **Hero slider** with automatic rotation
- **Loading animations** for forms

## 🖼 Images

The project includes placeholder image paths. Add actual images to:

```
public/images/
├── hero/              # Hero slider backgrounds
├── series/            # Product series images
├── industries/        # Industry-specific images
├── about/             # Company/facility images
├── quality/           # Quality control images
└── certifications/    # Certification logos
```

## 🔧 Customization

### Adding New Product Series
Edit `src/data/productSeries.js` to add or modify aluminum series data.

### Styling Changes
- Update colors in `src/app/globals.css`
- Modify component styles using Tailwind classes
- Add custom animations in the CSS file

### Content Updates
- Hero slides: Update `heroSlides` array in data file
- Company information: Modify components in `src/components/home/`
- Contact information: Update Footer and ContactForm components

## 📱 Responsive Design

- **Mobile-first** approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- **Touch-friendly** interactions
- **Accessible** navigation menu

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub repository
2. Connect to Vercel
3. Deploy automatically

### Manual Build
```bash
npm run build
npm run start
```

## 📊 Performance

- **Next.js Image** optimization
- **Lazy loading** for images
- **Code splitting** for better loading
- **Minimal JavaScript** where possible
- **SEO-friendly** structure

## 🛡 Quality Assurance

- **TypeScript** support (can be enabled)
- **ESLint** configuration
- **Proper error handling**
- **Form validation**
- **Accessibility compliance**

## 📞 Support

For technical support or customization requests, please refer to the project documentation or contact the development team.

## 🔄 Development Status

**Current Version**: 1.0.0 (Home Page Complete)
**Next Phase**: Additional pages and advanced features

---

Built with ❤️ for Uday Aluminium
