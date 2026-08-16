import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Nicht 5173: der Vite-Default kollidiert mit den anderen Prometheus-
    // Projekten, die parallel laufen. strictPort, damit die Adresse fest
    // bleibt und nicht still auf die nächste freie Nummer wandert.
    port: 5180,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      output: {
        // Supabase only: it's pulled in by the demo form, so it belongs in its
        // own chunk rather than the entry.
        //
        // framer-motion is deliberately NOT listed. Naming it here forced a
        // standalone chunk that Vite then preloaded from index.html — 131 KB
        // fetched on every homepage visit. Since the homepage's animations all
        // run on CSS now, the only remaining users are the parked sections and
        // the lazy /growth route; without an entry here, Rollup puts the
        // library in those route chunks, where it is actually needed.
        manualChunks: {
          supabase: ['@supabase/supabase-js'],
        },
      },
    },
  },
})
