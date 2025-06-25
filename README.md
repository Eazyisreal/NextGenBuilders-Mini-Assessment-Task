#  Country Explorer

A modern, responsive web application for exploring world countries with advanced filtering and search capabilities. Built with React, TypeScript, and TailwindCSS for optimal performance and user experience.

##  Features

- 🔍 **Smart Search** - Find countries by name with real-time filtering
- 🌐 **Region Filtering** - Browse countries by continent/region
- 📊 **Population Sorting** - Sort countries by population (ascending/descending)
- 🔄 **Incremental Loading** - Load more countries with pagination
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- ⚡ **Fast Performance** - Optimized API calls with caching

##  Live Demo

[View Live Application](https://next-gen-builders-mini-assessment-t.vercel.app/) 

##  Screenshots

![image](https://github.com/user-attachments/assets/3c859c4e-359b-497b-9bda-0e5b316849a5)


*Main interface showing country cards with search and filter functionality*

##  Tech Stack

| Technology | Purpose | Why Chosen |
|------------|---------|------------|
| **React 18** | UI Framework | Component-based architecture with hooks |
| **TypeScript** | Type Safety | Enhanced developer experience and fewer runtime errors |
| **Vite** | Build Tool | Lightning-fast development server and optimized builds |
| **TailwindCSS** | Styling | Utility-first CSS with excellent developer experience |
| **ShadCN/UI** | UI Components | Accessible, customizable components built on Radix |
| **React Query** | Data Fetching | Intelligent caching, background updates, and loading states |
| **REST Countries API** | Data Source | Comprehensive country information |

## 🏗️ Architecture

This project follows **Atomic Design** principles for scalable component architecture:

```
src/
│   ├── atoms/          # Basic UI elements (Button, Input, Card)
│   ├── molecules/      # Composite components (FilterBar, SearchBox)
│   ├── organisms/      # Complex components (CountryList)
├── components/
│   ├── Ui/      # Shadcn components (Card,Button)
├── pages/              # Route components (HomePage)
├── hooks/              # Custom React hooks (useCountries, useDebounce)
├── types/              # TypeScript type definitions
├── utils/              # Helper functions and utilities
├── services/           # API service functions
└── styles/             # Global styles and Tailwind config
```

##  Installation & Setup

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/NextGenBuilders-Mini-Assessment.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:5173`

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript compiler check |

## 🌐 API Integration

The app integrates with the [REST Countries API](https://restcountries.com/):

**Endpoint:** `https://restcountries.com/v3.1/all`
**Query Parameters:** `?fields=name,capital,region,flags,population`

### Sample Response
```json
{
  "name": { "common": "Nigeria" },
  "capital": ["Abuja"],
  "region": "Africa",
  "flags": { "svg": "https://flagcdn.com/ng.svg" },
  "population": 206139587
}
```

## Key Implementation Details

### State Management
- **React Query** for server state management and caching
- **React hooks** for local component state

### Performance Optimizations
- Lazy loading of country data
- Memoized components to prevent unnecessary re-renders
- Optimized images with proper loading states
- Debounced search input to reduce API calls

### Accessibility Features
- Semantic HTML structure
- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly content
- Color contrast compliance

## 🧪 Testing Strategy

```bash
# Run unit tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run e2e tests
npm run test:e2e
```

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
# Build the project
npm run build

# Deploy dist folder to Netlify
```

## 👨‍💻 Author

**Isreal Onaopemipo Aluko**
*Frontend Engineer | Inventors' Next-Gen Builders Program*

- 🌍 Location: Nigeria 🇳🇬
- 💼 GitHub: [@eazyisreal](https://github.com/eazyisreal)
- 🔗 LinkedIn: [Connect with me](https://linkedin.com/in/eazyisreal)
- 📧 Email: eazyisreal192@gmail.com

## 🙏 Acknowledgments

- [REST Countries API](https://restcountries.com/) for providing comprehensive country data
- [Shadcn/UI](https://ui.shadcn.com/) for beautiful and accessible UI components
- [Inventors' Next-Gen Builders Program](https://inventors.ng/) for the learning opportunity

