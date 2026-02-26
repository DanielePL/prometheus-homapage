import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LegalLayout from './layouts/LegalLayout'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import Impressum from './pages/Impressum'
import Goodbye from './pages/Goodbye'
import GrowthPitch from './pages/GrowthPitch'
import AuthCallback from './pages/AuthCallback'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/growth" element={<GrowthPitch />} />
      <Route path="/auth/callback" element={<AuthCallback />} />
      <Route element={<LegalLayout />}>
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/goodbye" element={<Goodbye />} />
      </Route>
    </Routes>
  )
}
