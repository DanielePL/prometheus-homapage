import { ViteReactSSG } from 'vite-react-ssg'
import './index.css'
import { routes } from './routes.jsx'

/* ViteReactSSG instead of createRoot.
 *
 * At build time it renders every route in PRERENDERED_PATHS to static HTML; in
 * the browser it hydrates that HTML instead of mounting into an empty div. The
 * router is created for us, so BrowserRouter is gone — wrapping the tree twice
 * would break hydration.
 *
 * Why this exists: prometheus.coach served 67 characters of text and no <h1>.
 * A page with no content in its HTML cannot rank for anything, including its
 * own brand name.
 */
export const createRoot = ViteReactSSG({ routes })
