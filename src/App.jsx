import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

/* The homepage is the only route most visitors ever see — everything else
   loads on demand, which keeps the Supabase client off the landing path. */
const LegalLayout = lazy(() => import('./layouts/LegalLayout'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))
const Impressum = lazy(() => import('./pages/Impressum'))
const Goodbye = lazy(() => import('./pages/Goodbye'))
const GrowthPitch = lazy(() => import('./pages/GrowthPitch'))
const AuthCallback = lazy(() => import('./pages/AuthCallback'))
const StripeTitanSuccess = lazy(() => import('./pages/StripeTitanSuccess'))

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-dark" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/growth" element={<GrowthPitch />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/stripe/success" element={<StripeTitanSuccess />} />
        <Route element={<LegalLayout />}>
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/goodbye" element={<Goodbye />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
