import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-lg">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <rect width="100%" height="100%" rx="4" fill="white" opacity="0.12"/>
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-wide">FinanceInsight</span>
        </Link>
        <div className="space-x-6 hidden md:block">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/upload" className="hover:underline">Upload</Link>
          <Link to="/results" className="hover:underline">Results</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </div>
      </div>
    </nav>
  )
}
