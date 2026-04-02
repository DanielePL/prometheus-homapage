import { useEffect, useState } from 'react'

export default function StripeTitanSuccess() {
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'prometheus://stripe/success'
      setTimeout(() => setShowFallback(true), 1500)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      background: '#000000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '24px',
      position: 'relative',
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
            width: '240px',
            height: 'auto',
            objectFit: 'contain',
            marginBottom: '32px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            filter: 'drop-shadow(0 0 40px rgba(255, 107, 0, 0.3))',
          }}
        />

        {/* Thank You */}
        <h1 style={{
          fontSize: '36px',
          fontWeight: 800,
          color: '#FF6B00',
          margin: '0 0 12px 0',
          letterSpacing: '2px',
          lineHeight: 1.2,
          textTransform: 'uppercase',
        }}>
          Thank You For Being<br />A Part Of Prometheus!
        </h1>

        <div style={{
          width: '60px',
          height: '3px',
          background: 'linear-gradient(90deg, #FF6B00, #FF8C33)',
          margin: '20px auto',
          borderRadius: '2px',
        }} />

        <p style={{
          fontSize: '18px',
          color: 'rgba(255, 255, 255, 0.8)',
          margin: '0 0 8px 0',
          lineHeight: 1.6,
          fontWeight: 500,
        }}>
          Welcome to the Titan family, founding member.
        </p>

        <p style={{
          fontSize: '15px',
          color: 'rgba(255, 255, 255, 0.4)',
          margin: '0 0 36px 0',
        }}>
          Redirecting you back to the app...
        </p>

        {/* Spinner */}
        <div style={{
          width: '32px',
          height: '32px',
          border: '3px solid rgba(255, 107, 0, 0.2)',
          borderTopColor: '#FF6B00',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 28px',
        }} />

        {/* Fallback link */}
        {showFallback && (
          <a
            href="prometheus://stripe/success"
            style={{
              display: 'inline-block',
              padding: '16px 40px',
              background: 'linear-gradient(135deg, #FF6B00, #FF8C33)',
              color: '#FFFFFF',
              textDecoration: 'none',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '16px',
              boxShadow: '0 4px 20px rgba(255, 107, 0, 0.4)',
              letterSpacing: '0.5px',
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
