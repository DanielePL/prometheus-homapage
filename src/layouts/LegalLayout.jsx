import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Footer from '../components/Footer'

export default function LegalLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Simplified Navbar */}
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center">
              <img src="/images/logo-white.png" alt="Prometheus" className="h-8" />
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
