import { useEffect, useState } from 'react'

export default function StripeTitanSuccess() {
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    // Try to redirect to app after a short delay so user sees the page
    const timer = setTimeout(() => {
      window.location.href = 'prometheus://stripe/success'
      // Show fallback link if redirect didn't work (e.g. desktop browser)
      setTimeout(() => setShowFallback(true), 1500)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0A0A0A',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '24px',
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '480px',
      }}>
        {/* Titan Badge */}
        <img
          src="/images/titan_badge.png"
          alt="Prometheus Titan Member"
          style={{
            width: '280px',
            height: '280px',
            objectFit: 'contain',
            marginBottom: '32px',
            filter: 'drop-shadow(0 0 40px rgba(255, 215, 0, 0.3))',
          }}
        />

        {/* Thank You */}
        <h1 style={{
          fontSize: '32px',
          fontWeight: 800,
          color: '#FFD700',
          margin: '0 0 16px 0',
          letterSpacing: '1px',
          lineHeight: 1.3,
        }}>
          THANK YOU FOR BEING<br />A PART OF PROMETHEUS!
        </h1>

        <p style={{
          fontSize: '17px',
          color: 'rgba(255, 255, 255, 0.6)',
          margin: '0 0 8px 0',
          lineHeight: 1.6,
        }}>
          Welcome to the Titan family, founding member.
        </p>

        <p style={{
          fontSize: '15px',
          color: 'rgba(255, 255, 255, 0.4)',
          margin: '0 0 32px 0',
        }}>
          Redirecting you back to the app...
        </p>

        {/* Spinner */}
        <div style={{
          width: '32px',
          height: '32px',
          border: '3px solid rgba(255, 215, 0, 0.2)',
          borderTopColor: '#FFD700',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 24px',
        }} />

        {/* Fallback link */}
        {showFallback && (
          <a
            href="prometheus://stripe/success"
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              background: 'linear-gradient(135deg, #FFD700, #B8860B)',
              color: '#0A0A0A',
              textDecoration: 'none',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '16px',
            }}
          >
            Open Prometheus App
          </a>
        )}

        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  )
}
