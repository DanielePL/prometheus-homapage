import { Head } from 'vite-react-ssg'
import { DemoModalProvider } from '../context/DemoModalContext'
import SiteNav from '../components/site/SiteNav'
import HeroOperator from '../components/site/HeroOperator'
import PainSection from '../components/site/PainSection'
import ProofSection from '../components/site/ProofSection'
import PhotoBreak from '../components/site/PhotoBreak'
import EntryPoints from '../components/site/EntryPoints'
import PricingSection from '../components/site/PricingSection'
import FinalCta from '../components/site/FinalCta'
import SiteFooter from '../components/site/SiteFooter'

/* The homepage answers four questions and stops: who is this for, what hurts,
   what changes, what does it cost. Everything that explains *how* the system is
   built now waits for the demo.
 *
 * Parked, still complete, not deleted — these are the basis for the /studios,
 * /coach and /app pages from the brief:
 *   BentoGrid.jsx         nine feature cards (ProofSection shows three)
 *   EcosystemDiagram.jsx  the four apps around one database
 *   SurfacesSection.jsx   nine role-specific surfaces with screenshots
 *   MemberSection.jsx     the member app and its B2C pricing
 *   VerticalsSection.jsx  seventeen industries
 *   TrustSection.jsx      its three points moved into PricingSection
 *
 * (LedProSection.jsx came back 2026-07-28 and went again 2026-08-18: LED Pro is
 * a different company. It has no business on the Prometheus coach page.)
 *
 * Reason for the cut: the page carried fourteen sections and twelve product
 * screenshots — effectively the whole system. A prospect who has seen all of it
 * has no reason left to book a demo. */

export default function HomePage() {
  return (
    <DemoModalProvider>
      {/* Moved out of index.html, where it was appended to rather than replaced
          and gave every subpage a second, German title. */}
      <Head>
        <html lang="de" />
        <title>Prometheus · Das Betriebssystem für moderne Fitness-Unternehmen</title>
        <meta name="description" content="Fünf Apps, eine Datenbank, eine Identität. Vom Empfangstablet bis zur Konzernzentrale: papierlos, eine Wahrheit auf jeder Ebene, das Mitglied checkt sich selbst ein." />
        <meta property="og:title" content="Prometheus · Das Betriebssystem für moderne Fitness-Unternehmen" />
        <meta property="og:description" content="Fünf Apps, eine Datenbank, eine Identität — vom Empfangstablet bis zur Zentrale." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prometheus.coach/" />
        <meta property="og:image" content="https://prometheus.coach/images/hero-bg.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://prometheus.coach/" />
      </Head>

      <div className="min-h-screen bg-dark text-white relative overflow-hidden font-body">
        {/* Ambient accent glows behind the whole page */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[10%] left-[-15%] w-[50%] h-[600px] bg-accent/[0.04] rounded-full blur-[200px]" />
          <div className="absolute top-[45%] right-[-15%] w-[50%] h-[700px] bg-accent/[0.03] rounded-full blur-[200px]" />
          <div className="absolute top-[80%] left-[-10%] w-[45%] h-[600px] bg-accent/[0.04] rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10">
          <SiteNav />
          <HeroOperator />
          <PainSection />
          <ProofSection />
          <PhotoBreak
            src="/images/photos/class-community.webp"
            focus="center 38%"
            statement="Der Betrieb passiert auf der Fläche."
            accent="Die Software gehört dorthin — nicht ins Backoffice."
          />
          <EntryPoints />
          <PricingSection />
          <FinalCta />
          <SiteFooter />
        </div>
      </div>
    </DemoModalProvider>
  )
}
