import { Navigate } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
import { useState, useEffect } from 'react'

export default function ProtectedRoute({ children }) {
  const { isLoaded, isSignedIn } = useAuth()
  const [loadingTimeout, setLoadingTimeout] = useState(false)

  useEffect(() => {
    // If Clerk takes too long to load (more than 5 seconds), allow access anyway
    const timer = setTimeout(() => {
      setLoadingTimeout(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  // If Clerk is still loading and we haven't timed out, show loading state
  if (!isLoaded && !loadingTimeout) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-horizon-light dark:bg-horizon-dark transition-colors duration-300">
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-horizon rounded-full blur-xl opacity-50"></div>
            <div className="relative w-16 h-16 border-4 border-horizon-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-medium">Loading...</p>
        </div>
      </div>
    )
  }

  // If Clerk loaded and user is not signed in, redirect to home
  if (isLoaded && !isSignedIn) {
    return <Navigate to="/" replace />
  }

  // Render protected content (either user is signed in, or Clerk failed to load but we allow access)
  return children
}

