import { createClient } from '@supabase/supabase-js'

let client = null

/* Created on first use, not when this module loads.
 *
 * Two reasons, and the first one is a hard build failure:
 *
 * 1. The site is prerendered to static HTML at build time (vite-react-ssg), so
 *    the module graph runs in Node. Constructing a Supabase client immediately
 *    constructs its realtime client, which in Node demands a WebSocket
 *    implementation and dies with `import ws from "ws"`. Nothing on this site
 *    uses realtime.
 *
 * 2. Every caller uses it inside a submit handler — the demo form and the two
 *    signup forms in the hero. A visitor who never opens a form now never pays
 *    for the library.
 */
export function getSupabase() {
  if (!client) {
    client = createClient(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_ANON_KEY,
    )
  }
  return client
}
