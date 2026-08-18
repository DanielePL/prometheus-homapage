import { Head } from 'vite-react-ssg'
import { HomeNav, HomeFooter } from '../components/home/HomeChrome'
import Hero from '../components/home/Hero'
import Included from '../components/home/Included'
import SalesAssistant from '../components/home/SalesAssistant'
import PhotoBreak from '../components/site/PhotoBreak'
import Doors from '../components/home/Doors'
import ClientApp from '../components/home/ClientApp'
import { Makers, Pricing, FinalCta } from '../components/home/Closing'

/* The homepage sells the Coach product to coaches, in English.
 *
 * What it replaced and why: the previous page opened with "I run a studio or a
 * chain" and argued about reception desks, contracts in binders and queues at
 * the front counter. That is Enterprise language for a product that is parked —
 * and an online coach arriving from `trainerize alternative` read it and left.
 *
 * English because that is where the market is: 156'100 searches a month against
 * 250 in German (docs/GROWTH_PLAN.md §3 in prometheus-admin).
 *
 * Order of the argument, set by the owner: everything in one system → the sales
 * assistant → everything included → VBT as a footnote, never a headline.
 *
 * No proof-by-numbers section. On 2026-08-18 the honest figures were seven coach
 * accounts and zero coach-client links; a number smaller than the reader expects
 * answers "does anyone use this?" with no, and an invented one ends the brand the
 * first time someone asks in a Facebook group. The screenshots do the proving
 * until the numbers are worth printing.
 *
 * No free tier, no founding-coach offer, no vouchers — owner's rule, 2026-08-18:
 * "was nichts kostet ist nichts wert". The 14-day trial stays; it is a look at
 * the product, not a giveaway.
 *
 * Parked, complete, still in the repo — the German enterprise-first sections,
 * which are the basis for an Enterprise page when that product ships:
 *   HeroOperator, PainSection, ProofSection, EntryPoints, PricingSection,
 *   FinalCta, SiteNav, SiteFooter (all German)
 *   BentoGrid, EcosystemDiagram, SurfacesSection, MemberSection,
 *   VerticalsSection, TrustSection
 */
export default function HomePage() {
  return (
    <>
      <Head>
        <html lang="en" />
        <title>Prometheus · Coaching software with the whole job in one place</title>
        <meta
          name="description"
          content="Programming, nutrition, check-ins, video calls and payments in one account — plus an assistant that follows up on enquiries. From $19 a month. 14-day trial, no card."
        />
        <link rel="canonical" href="https://prometheus.coach/" />
        <meta property="og:title" content="Prometheus · Coaching software with the whole job in one place" />
        <meta
          property="og:description"
          content="Five tools, one client. That was never the plan. Programming, nutrition, feedback, video calls and payments in one account."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prometheus.coach/" />
        <meta property="og:image" content="https://prometheus.coach/images/hero-bg.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-dark text-white relative overflow-hidden font-body">
        {/* Ambient accent glows behind the whole page */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[10%] left-[-15%] w-[50%] h-[600px] bg-accent/[0.04] rounded-full blur-[200px]" />
          <div className="absolute top-[45%] right-[-15%] w-[50%] h-[700px] bg-accent/[0.03] rounded-full blur-[200px]" />
          <div className="absolute top-[80%] left-[-10%] w-[45%] h-[600px] bg-accent/[0.04] rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10">
          <HomeNav />
          <Hero />
          <Included />
          <SalesAssistant />
          <PhotoBreak
            src="/images/photos/coach-floor.webp"
            focus="center 35%"
            statement="The coaching is the product."
            accent="Everything else is what gets in its way."
          />
          <Doors />
          <ClientApp />
          <Makers />
          <Pricing />
          <FinalCta />
          <HomeFooter />
        </div>
      </div>
    </>
  )
}
