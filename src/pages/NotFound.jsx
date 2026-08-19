import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Section, Reveal } from '../components/site/Section'
import { HomeNav, HomeFooter } from '../components/home/HomeChrome'
import { SIGNUP } from '../lib/links'

/* Prerendered to dist/404.html, which a static host serves — with a real 404
 * status — for any path that matches no file.
 *
 * It only gets that chance once the blanket "/* → /index.html" rewrite is gone
 * from the Render dashboard. Until then every unknown URL answers 200 with the
 * homepage: a soft 404, which search engines treat as an endless supply of
 * duplicate homepages, and which hides broken internal links because nothing
 * ever fails visibly.
 *
 * Also mounted on path="*" so a wrong link followed inside the app lands here
 * rather than on a blank screen.
 */
export default function NotFound() {
  return (
    <>
      <Head>
        <html lang="en" />
        <title>Page not found · Prometheus</title>
        {/* Nothing here should ever be indexed, whatever URL it was reached by. */}
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="min-h-screen bg-dark text-white relative overflow-hidden font-body flex flex-col">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[20%] left-[-15%] w-[50%] h-[600px] bg-accent/[0.04] rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col">
          <HomeNav />

          <Section width="narrow" className="flex-1 pt-40 lg:pt-52">
            <Reveal>
              <p className="eyebrow text-accent mb-5">404</p>
              <h1 className="display text-4xl sm:text-6xl leading-[1.05]">
                That page is not here.{' '}
                <span className="display-italic opacity-70">The coaching still is.</span>
              </h1>
              <p className="mt-7 text-lg text-white/60 leading-relaxed max-w-xl">
                Either the link is wrong or the page has moved. Both are our fault, not
                yours.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 px-7 h-14 rounded-xl bg-accent text-white font-semibold hover:bg-accent-light transition-all"
                >
                  Back to the start <ArrowRight size={18} />
                </Link>
                <a
                  href={SIGNUP}
                  className="inline-flex items-center justify-center px-7 h-14 rounded-xl glass hover:border-accent/40 font-semibold transition-all"
                >
                  Start free — 14 days, no card
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <Link to="/studios/" className="text-white/45 hover:text-white transition-colors">
                  For studios
                </Link>
                <Link to="/trainerize-alternative/" className="text-white/45 hover:text-white transition-colors">
                  Switching from Trainerize
                </Link>
                <a href="/#pricing" className="text-white/45 hover:text-white transition-colors">
                  Pricing
                </a>
              </div>
            </Reveal>
          </Section>

          <HomeFooter />
        </div>
      </div>
    </>
  )
}
