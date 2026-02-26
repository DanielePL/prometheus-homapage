import { useEffect, useState } from 'react'

const DEEP_LINK_BASE = 'prometheus://auth/callback'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=prometheus.coach&pcampaignid=web_share'

export default function AuthCallback() {
  const [status, setStatus] = useState('redirecting') // redirecting | fallback | error

  useEffect(() => {
    const fragment = window.location.hash
    if (!fragment || !fragment.includes('access_token')) {
      setStatus('error')
      return
    }

    // Build deep link with the same fragment
    const deepLink = `${DEEP_LINK_BASE}${fragment}`

    // Try to open the app via deep link
    window.location.href = deepLink

    // If still here after 2.5s, app probably not installed — show fallback
    const timer = setTimeout(() => {
      setStatus('fallback')
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  // Parse type from fragment for contextual messaging
  const fragment = window.location.hash
  const isRecovery = fragment.includes('type=recovery')

  return (
    <div className="min-h-screen bg-[#141414] text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#E67E22]/[0.06] rounded-full blur-[200px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#E67E22]/[0.04] rounded-full blur-[180px]" />

      <div className="relative z-10 text-center max-w-md">
        {/* Logo */}
        <img
          src="/images/logo-white.png"
          alt="Prometheus"
          className="h-12 mx-auto mb-10"
        />

        {status === 'redirecting' && (
          <>
            {/* Spinner */}
            <div className="w-12 h-12 border-2 border-[#E67E22]/20 border-t-[#E67E22] rounded-full animate-spin mx-auto mb-8" />
            <h1 className="font-['Arimo'] text-2xl font-bold uppercase mb-3">
              {isRecovery ? 'Resetting Password' : 'Verifying Your Account'}
            </h1>
            <p className="text-[#999] text-sm">
              Opening Prometheus app...
            </p>
          </>
        )}

        {status === 'fallback' && (
          <>
            <div className="w-16 h-16 bg-[#E67E22]/10 border border-[#E67E22]/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E67E22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h1 className="font-['Arimo'] text-2xl font-bold uppercase mb-3">
              {isRecovery ? 'Password Reset Ready' : 'Account Verified'}
            </h1>
            <p className="text-[#999] text-sm mb-8">
              {isRecovery
                ? 'Tap the button below to open the app and set your new password.'
                : 'Your email has been verified. Open the app to continue.'
              }
            </p>
            <a
              href={`${DEEP_LINK_BASE}${fragment}`}
              className="inline-block px-8 py-3.5 bg-[#E67E22] text-white font-bold rounded-lg text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_2px_18px_0px_#E67E22] mb-4"
            >
              Open Prometheus App
            </a>
            <br />
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#999] hover:text-[#E67E22] transition-colors"
            >
              Don't have the app? Download on Google Play
            </a>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </div>
            <h1 className="font-['Arimo'] text-2xl font-bold uppercase mb-3">
              Invalid Link
            </h1>
            <p className="text-[#999] text-sm mb-8">
              This link is expired or invalid. Please request a new one from the app.
            </p>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-[#1C1C1C] border border-[#E67E22]/30 text-[#E67E22] hover:bg-[#E67E22] hover:text-white font-semibold rounded-lg text-sm transition-all duration-200"
            >
              Open Google Play
            </a>
          </>
        )}
      </div>
    </div>
  )
}
