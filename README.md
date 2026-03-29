# DTP - Digital Services Portfolio

A modern, responsive React + Vite web application showcasing digital services and expertise. Built with React 19, Tailwind CSS, Framer Motion animations, and EmailJS for contact functionality.

## 🚀 Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Engaging transitions and interactions with Framer Motion
- **Contact Form** - Email integration using EmailJS
- **Fast Development** - Vite for lightning-fast hot module replacement (HMR)
- **GitHub Pages Deployment** - Ready for deployment with gh-pages
- **Modern UI** - Icon system with Lucide React and React Icons

## 🎁 Special Promotional Packages

### Starter Bundle
Perfect for small businesses and startups
- Landing page design and development
- Mobile-responsive website
- Basic SEO optimization
- **Get 20% off when booked this month**

### Professional Bundle
Ideal for growing businesses
- Full website development
- Advanced SEO and analytics
- Social media integration
- Email marketing setup
- Ongoing support and maintenance
- **Get 15% off + free consultation**

### Enterprise Bundle
Complete digital transformation
- Custom web and mobile applications
- Full digital marketing suite
- Brand strategy and design
- API integrations and automation
- Dedicated account manager
- Priority support
- **Custom pricing available - contact sales**

## 📋 Tech Stack

- **React 19** - JavaScript library for building user interfaces
- **Vite** - Next-generation frontend build tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **EmailJS** - Email service for contact forms
- **Lucide React** - Beautiful SVG icon library
- **React Icons** - Popular icon libraries for React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dtp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (if needed for EmailJS)
   ```bash
   # Create a .env file and add your EmailJS credentials
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 🛠️ Available Scripts

### Development Server
```bash
npm run dev
```
Starts the development server with HMR. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing.

### Deploy to GitHub Pages
```bash
npm run deploy
```
Builds and deploys the application to GitHub Pages.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact form with EmailJS
│   ├── Faq.jsx         # FAQ section
│   ├── Footer.jsx      # Footer component
│   ├── GlossyBackground.jsx  # Background effects
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero/banner section
│   └── Services.jsx    # Services showcase
├── assets/             # Static assets (images, videos, etc.)
├── App.jsx             # Main app component
├── main.jsx            # Application entry point
├── App.css             # App-level styles
└── index.css           # Global styles

public/
├── images/             # Public images
└── CNAME.txt          # GitHub Pages custom domain configuration

├── vite.config.js      # Vite configuration
├── eslint.config.js    # ESLint configuration
└── package.json        # Project dependencies and scripts
```

## 🎨 Components Overview

- **Header** - Navigation and branding
- **Hero** - Main landing section with call-to-action
- **Services** - Showcase of digital services offered
- **About** - Information about the team/organization
- **FAQ** - Frequently asked questions section
- **Contact** - Contact form for inquiries (powered by EmailJS)
- **GlossyBackground** - Decorative background effects
- **Footer** - Site footer with links and information

## 🚀 Getting Started

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build for production: `npm run build`
4. Preview build: `npm run preview`

## 🌐 Deployment

### GitHub Pages
This project is configured for GitHub Pages deployment:

1. Update the repository URL in `package.json` if needed
2. Run `npm run deploy` to build and deploy

The `CNAME.txt` file in the `public/` folder can be used to configure a custom domain.

## 📝 Code Quality

The project includes ESLint configuration for code linting. Run:
```bash
npm run lint  # if added to scripts
```

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the MIT License.

---

**Note:** For production use, consider:
- Adding TypeScript for better type safety
- Implementing error handling in contact forms
- Adding unit tests and E2E tests
- Setting up CI/CD pipelines
