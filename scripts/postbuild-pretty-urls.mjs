import { copyFile, mkdir, readdir } from 'node:fs/promises'
import { join } from 'node:path'

/* Publish every prerendered page a second time as <path>/index.html.
 *
 * The build writes flat files — dist/studios.html — and a request for
 * /studios does not match any file on disk, so the host falls through to its
 * SPA catch-all and answers with the homepage. In a browser that looks fine
 * (React Router renders the right page once the bundle loads); to a crawler the
 * studios URL simply *is* the homepage, canonical tag included.
 *
 * render.yaml names an explicit rewrite per page, which fixes it wherever that
 * file is honoured — Render only applies it to services created from a
 * Blueprint. This script makes the same paths work without any host config at
 * all: dist/studios/index.html is a real file at a directory path, which every
 * static host resolves before reaching a catch-all.
 *
 * Both copies stay in sync because both come from the same build, and both
 * carry the same canonical tag, so the duplicate is invisible to search.
 */
const DIST = 'dist'

const pages = (await readdir(DIST))
  .filter((f) => f.endsWith('.html') && f !== 'index.html')

for (const file of pages) {
  const slug = file.replace(/\.html$/, '')
  await mkdir(join(DIST, slug), { recursive: true })
  await copyFile(join(DIST, file), join(DIST, slug, 'index.html'))
}

console.log(`[pretty-urls] ${pages.length} pages also written as <slug>/index.html`)
