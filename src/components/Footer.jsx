import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="glass-card border-t border-gray-200/50 dark:border-white/10 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-horizon rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-lg font-bold gradient-text">FinSight AI</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Advanced AI-powered financial document processing and entity extraction.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-600 dark:text-gray-400 hover:text-horizon-primary transition-colors">Home</a></li>
              <li><a href="/upload" className="text-gray-600 dark:text-gray-400 hover:text-horizon-primary transition-colors">Upload</a></li>
              <li><a href="/results" className="text-gray-600 dark:text-gray-400 hover:text-horizon-primary transition-colors">Results</a></li>
              <li><a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-horizon-primary transition-colors">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-horizon-primary hover:bg-horizon-primary/10 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-horizon-primary hover:bg-horizon-primary/10 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-horizon-primary hover:bg-horizon-primary/10 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200/50 dark:border-white/10 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} FinSight AI • Built with React + Vite + Tailwind + Clerk
        </div>
      </div>
    </footer>
  )
}
