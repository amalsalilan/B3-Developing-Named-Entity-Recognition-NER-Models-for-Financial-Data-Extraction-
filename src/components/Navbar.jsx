import { Link, useLocation } from 'react-router-dom'
import { 
  SignInButton, 
  SignUpButton, 
  UserButton, 
  SignedIn, 
  SignedOut,
  useUser
} from '@clerk/clerk-react'
import { Home, Upload, BarChart3, Info, Menu, X, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import ThemeToggle from './ui/ThemeToggle'
import { cn } from '../lib/utils'

export default function Navbar() {
  const { user } = useUser()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/upload', label: 'Upload', icon: Upload },
    { to: '/results', label: 'Results', icon: BarChart3 },
    { to: '/about', label: 'About', icon: Info },
    { to: '/chatbot', label: 'CAG', icon: MessageCircle },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 glass-card border-b border-gray-200/50 dark:border-white/10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-horizon rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-10 h-10 bg-gradient-horizon rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:block">
              FinSight AI
            </span>
          </Link>

          {/* Desktop Navigation - Always Visible */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive(link.to)
                      ? "bg-gradient-horizon text-white shadow-horizon"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-horizon-secondary/50"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            <SignedOut>
              <div className="hidden sm:flex items-center gap-2">
                <SignInButton mode="modal">
                  <button className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-horizon-secondary/50 transition-colors">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-horizon text-white hover:opacity-90 transition-all duration-200 shadow-horizon hover:shadow-horizon-lg">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>
            
            <SignedIn>
              <div className="flex items-center gap-3">
                <div className="hidden lg:flex items-center gap-2 text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Welcome,</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {user?.firstName || user?.emailAddresses?.[0]?.emailAddress?.split('@')?.[0] || 'User'}
                  </span>
                </div>
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-9 h-9 border-2 border-horizon-primary/30 dark:border-horizon-accent.blue/30",
                      userButtonPopoverCard: "glass-card shadow-2xl",
                      userButtonPopoverActionButton: "hover:bg-horizon-primary/10 dark:hover:bg-horizon-accent.blue/10",
                    }
                  }}
                />
              </div>
            </SignedIn>

            {/* Mobile Menu Button - Always visible on mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-horizon-secondary/50"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Always visible for navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/50 dark:border-white/10">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all",
                      isActive(link.to)
                        ? "bg-gradient-horizon text-white shadow-horizon"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-horizon-secondary/50"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    {link.label}
                  </Link>
                )
              })}
            </div>
            
            {/* Mobile Auth Buttons */}
            <SignedOut>
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-200/50 dark:border-white/10">
                <SignInButton mode="modal">
                  <button className="w-full px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-horizon-secondary/50 transition-colors">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="w-full px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-horizon text-white hover:opacity-90 transition-all duration-200 shadow-horizon">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        )}
      </div>
    </nav>
  )
}
