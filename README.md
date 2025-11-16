# FinSight AI - Financial Document Processor

A modern, professional web application for AI-powered financial document processing with Named Entity Recognition (NER), built with React, Vite, Tailwind CSS, and Clerk Authentication.

## ✨ Features

- 🎨 **Horizon UI-Inspired Design** - Modern, elegant interface with glassmorphism effects
- 🌓 **Dark/Light Mode** - Seamless theme switching with persistent preferences
- 🔐 **Clerk Authentication** - Secure user authentication and session management
- 📊 **AI-Powered NER** - Advanced Named Entity Recognition for financial documents
- 📁 **Document Upload** - Drag & drop file upload with progress tracking
- 📈 **Interactive Charts** - Beautiful data visualizations with Chart.js
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Clerk account (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd financeinsight-frontend-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
   CLERK_SECRET_KEY=your_secret_key_here
   ```
   
   Get your Clerk keys from: [Clerk Dashboard](https://dashboard.clerk.com/last-active?path=api-keys)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # UI primitives (ThemeToggle, etc.)
│   ├── chatbot/        # Chatbot components
│   ├── ChartCard.jsx   # Chart component
│   ├── Footer.jsx      # Footer component
│   ├── Navbar.jsx      # Navigation bar with auth
│   └── ProtectedRoute.jsx  # Route protection wrapper
├── contexts/           # React contexts
│   └── ThemeContext.jsx  # Dark/light mode theme provider
├── lib/                # Utility functions
│   └── utils.js        # Helper functions (cn, etc.)
├── pages/              # Page components
│   ├── About.jsx       # About page
│   ├── Home.jsx        # Landing page
│   ├── Results.jsx     # Results display page
│   └── Upload.jsx      # File upload page
├── App.jsx             # Main app component with routing
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Design System

### Color Palette

The application uses a Horizon UI-inspired color scheme:

- **Primary**: `#4318FF` (Horizon Purple)
- **Accent Blue**: `#00D4FF` (Cyan)
- **Accent Purple**: `#6B4EFF` (Light Purple)
- **Dark Background**: `#0B1437` (Navy)
- **Light Background**: `#F4F7FE` (Light Gray)

### Theme Support

The app supports both light and dark modes:
- Theme preference is stored in localStorage
- Automatically detects system preference on first visit
- Toggle available in the navbar

### Utility Classes

- `.glass` - Glassmorphism effect with backdrop blur
- `.glass-card` - Elevated card with glass effect
- `.gradient-text` - Gradient text effect
- `.glow-effect` - Glowing shadow effect

## 🔐 Authentication

### Protected Routes

The following routes require authentication:
- `/upload` - Document upload page
- `/results` - Results display page

### Public Routes

These routes are accessible without authentication:
- `/` - Home/Landing page
- `/about` - About page

### Authentication Flow

1. User clicks "Sign Up" or "Sign In" in the navbar
2. Clerk modal opens for authentication
3. After successful authentication, user can access protected routes
4. User profile accessible via UserButton in navbar

## 🛠️ Tech Stack & Versions

- **React**            - 18.2+            
- **Vite**             - 4.4+             
- **Tailwind CSS**     - 3.4+             
- **Clerk React**      - 5.55+            
- **Framer Motion**    - 10.18+           
- **Chart.js**         - 4.4+             
- **React ChartJS 2**  - 5.2+             
- **React Router DOM** - 6.17+            
- **Node.js**          - 20.19+ or 22.12+ 

## 📦 Key Dependencies

```json
{
  "@clerk/clerk-react": "^5.55.0",
  "framer-motion": "^10.18.0",
  "chart.js": "^4.4.0",
  "react-chartjs-2": "^5.2.0",
  "react-router-dom": "^6.17.0",
  "tailwindcss": "^3.4.13"
}
```

## 🎯 Features in Detail

### Dark/Light Mode

- Toggle button in navbar
- Smooth transitions between themes
- Persistent theme preference
- System preference detection

### Document Upload

- Drag & drop interface
- File type validation (PDF, DOCX, TXT)
- Upload progress tracking
- File preview and management

### Results Display

- Interactive charts and graphs
- Entity extraction visualization
- Performance metrics
- Export functionality

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Collapsible mobile navigation
- Adaptive layouts

## 🔧 Configuration

### Tailwind Config

Custom theme configuration in `tailwind.config.cjs`:
- Dark mode: `class` strategy
- Custom color palette
- Extended utilities
- Custom font family (DM Sans)

### Vite Config

Development server configuration in `vite.config.js`:
- React plugin
- Port: 5173
- Hot module replacement

## 📝 Development

### Adding New Components

1. Create component in `src/components/`
2. Use utility classes from Tailwind
3. Support dark mode with `dark:` prefix
4. Add animations with Framer Motion

### Styling Guidelines

- Use utility classes from Tailwind
- Follow the Horizon UI design language
- Ensure dark mode compatibility
- Maintain consistent spacing and typography

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Environment Variables

Make sure to set the following in your production environment:
- `VITE_CLERK_PUBLISHABLE_KEY` - Your Clerk publishable key

## 📄 License

This project is private and proprietary.

## 👥 Team

- **Naveen** - ML Engineer & Project Lead
- **Mayur** - NLP Data Scientist
- **Ishant** - Backend & API Integration
- **Karthi** - Data Engineer & Testing

## 🤝 Contributing

This is a private project. For contributions, please contact the project maintainers.

---

Built with ❤️ using React, Vite, and Tailwind CSS
