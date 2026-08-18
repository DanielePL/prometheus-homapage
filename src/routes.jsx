import { Suspense, lazy } from 'react'
import HomePage from './pages/HomePage'

/* Routes as data, not JSX.
 *
 * vite-react-ssg needs the route table at build time so it can walk it, render
 * each path in Node and write real HTML to disk. A <Routes> tree only exists
 * once React is running in a browser, which is exactly the problem this file
 * solves: the site was shipping 67 characters of text to Google — no content,
 * no <h1>, nothing to rank.
 *
 * The homepage is imported eagerly; it is the only route most visitors see, and
 * lazy-loading it would keep it out of the prerendered output for no gain.
 */
const StudiosPage = lazy(() => import('./pages/StudiosPage'))
const LegalLayout = lazy(() => import('./layouts/LegalLayout'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))
const Impressum = lazy(() => import('./pages/Impressum'))
const Goodbye = lazy(() => import('./pages/Goodbye'))
const GrowthPitch = lazy(() => import('./pages/GrowthPitch'))
const AuthCallback = lazy(() => import('./pages/AuthCallback'))
const StripeTitanSuccess = lazy(() => import('./pages/StripeTitanSuccess'))

const wrap = (node) => (
  <Suspense fallback={<div className="min-h-screen bg-dark" />}>{node}</Suspense>
)

export const routes = [
  { path: '/', element: <HomePage /> },

  /* The studio door. Lazy because a coach arriving on the homepage never needs
     it, but prerendered like the homepage — it has to rank on its own. */
  { path: '/studios', element: wrap(<StudiosPage />) },

  { path: '/growth', element: wrap(<GrowthPitch />) },

  /* NOT prerendered — see PRERENDERED_PATHS and vite.config.js.
   *
   * Both read window.location during render to pick the value out of the URL
   * fragment, which has no meaning in Node and would crash the build. They are
   * also pure runtime redirects: an OAuth return and a Stripe return. There is
   * nothing here a crawler should index. */
  { path: '/auth/callback', element: wrap(<AuthCallback />) },
  { path: '/stripe/success', element: wrap(<StripeTitanSuccess />) },

  {
    element: wrap(<LegalLayout />),
    children: [
      { path: '/privacy', element: wrap(<PrivacyPolicy />) },
      { path: '/terms', element: wrap(<TermsOfService />) },
      { path: '/impressum', element: wrap(<Impressum />) },
      { path: '/goodbye', element: wrap(<Goodbye />) },
    ],
  },
]
