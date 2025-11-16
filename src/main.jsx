import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { ThemeProvider } from './contexts/ThemeContext'
import App from './App'
import './index.css'

// Get the Publishable Key from environment variables
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || import.meta.env.VITE_PUBLIC_CLERK_PUBLISHABLE_KEY || 'pk_test_cmVsYXhlZC1za3Vuay0yNy5jbGVyay5hY2NvdW50cy5kZXYk'

if (!PUBLISHABLE_KEY) {
  console.warn("Missing Clerk Publishable Key. Some authentication features may not work properly.")
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <Router>
          <App />
        </Router>
      </ClerkProvider>
    </ThemeProvider>
  </React.StrictMode>
)
