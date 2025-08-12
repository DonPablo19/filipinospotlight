# FILIPINO SPOTLIGHT

A modern, responsive Philippine news website built with React, TypeScript, and Tailwind CSS. FILIPINO SPOTLIGHT provides comprehensive coverage of breaking news, exclusive reports, and in-depth analysis of the most important stories happening in the Philippines and around the world.

## 🚀 Features

### News Coverage
- **Breaking News**: Real-time updates on major Philippine events
- **In-Depth Analysis**: Comprehensive coverage of complex issues
- **Local Focus**: Dedicated coverage of Philippine politics, law enforcement, and society
- **Professional Journalism**: High-quality reporting with Filipino perspective

### Current Featured Story
**"ALBAYALDE VOWED POLICE REFORMS IN TRAINING INSTITUTE LAUNCH"**
- Published: October 7, 2019
- Location: Calamba City, Philippines
- Focus: PNP Chief General Oscar Albayalde's commitment to police training reforms
- Key Topics: National Police Training Institute (NPTI), police discipline, anti-corruption measures

### User Experience
- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI**: Clean, professional interface with intuitive navigation
- **Fast Loading**: Optimized performance for better user experience
- **Accessibility**: Designed with accessibility best practices in mind

### Content Organization
- **Main Article**: Featured story with comprehensive coverage
- **Related Articles**: Curated content on similar topics
- **Latest Posts**: Recent news updates and developments
- **Category System**: Organized content by topic and relevance

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library
- **Routing**: React Router DOM for navigation
- **Build Tool**: Vite for fast development and building
- **Deployment**: Vercel for production hosting

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue gradient (`from-blue-600 to-blue-800`) for headers and navigation
- **Secondary**: Gray tones for content areas and text
- **Accents**: Blue highlights for interactive elements and links

### Typography
- **Headings**: Bold, clear hierarchy with proper spacing
- **Body Text**: Readable fonts with optimal line height and spacing
- **Responsive**: Scalable text sizes for different screen sizes

### Layout
- **Grid System**: Responsive grid layouts for content organization
- **Card Design**: Modern card-based design for articles and content
- **Spacing**: Consistent spacing and padding throughout the interface
- **Shadows**: Subtle shadows for depth and visual hierarchy

## 📱 Responsive Features

- **Mobile First**: Designed with mobile users in mind
- **Breakpoints**: Optimized layouts for mobile, tablet, and desktop
- **Touch Friendly**: Large touch targets for mobile devices
- **Flexible Grids**: Adaptive grid systems that work on all screen sizes

## 🔧 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd bayan-today

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── ArticleContent.tsx
│   ├── home.tsx
│   ├── LatestPostsSidebar.tsx
│   ├── RelatedArticles.tsx
│   └── CookieConsent.tsx
├── pages/              # Page components
│   └── ArticlePage.tsx
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
└── main.tsx           # Application entry point
```

## 🌟 Key Components

### ArticleContent
- Displays main article with rich formatting
- Includes metadata (date, read time, category)
- Responsive design with proper typography

### LatestPostsSidebar
- Shows recent news posts
- Category-based organization
- Author information and timestamps

### RelatedArticles
- Curated related content
- Grid-based layout
- Category badges and excerpts

### CookieConsent
- GDPR-compliant cookie consent
- Local storage persistence
- Modern, accessible design

## 🚀 Deployment

The application is configured for deployment on Vercel with:
- **Automatic Routing**: Clean URLs without hash symbols
- **SEO Optimization**: Meta tags and structured data
- **Performance**: Optimized builds and caching
- **Security**: Security headers and best practices

## 📊 SEO Features

- **Meta Tags**: Comprehensive meta tag implementation
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD schema markup
- **Canonical URLs**: Proper URL canonicalization
- **Sitemap**: XML sitemap generation

## 🔒 Privacy & Compliance

- **Cookie Consent**: GDPR-compliant cookie management
- **Privacy Policy**: Clear privacy information
- **Data Protection**: Secure handling of user data
- **Accessibility**: WCAG compliance standards

## 📈 Performance

- **Lazy Loading**: Optimized component loading
- **Image Optimization**: Responsive images and lazy loading
- **Code Splitting**: Efficient bundle management
- **Caching**: Strategic caching strategies

## 🤝 Contributing

We welcome contributions to improve Bayan Today. Please ensure:
- Code follows TypeScript and React best practices
- Components are properly typed and documented
- Styling follows Tailwind CSS conventions
- Accessibility standards are maintained

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌏 About FILIPINO SPOTLIGHT

FILIPINO SPOTLIGHT is committed to delivering accurate, timely, and relevant news coverage focused on the Philippines. Our mission is to provide Filipinos with comprehensive information about the issues that matter most to our nation and communities.

---

**Built with ❤️ for the Philippines**
