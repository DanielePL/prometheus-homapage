import { DemoModalProvider } from '../context/DemoModalContext'
import SiteNav from '../components/site/SiteNav'
import HeroOperator from '../components/site/HeroOperator'
import PainSection from '../components/site/PainSection'
import BentoGrid from '../components/site/BentoGrid'
import EcosystemDiagram from '../components/site/EcosystemDiagram'
import EntryPoints from '../components/site/EntryPoints'
import SurfacesSection from '../components/site/SurfacesSection'
import MemberSection from '../components/site/MemberSection'
import VerticalsSection from '../components/site/VerticalsSection'
import TrustSection from '../components/site/TrustSection'
import PricingSection from '../components/site/PricingSection'
import FinalCta from '../components/site/FinalCta'
import SiteFooter from '../components/site/SiteFooter'

export default function HomePage() {
  return (
    <DemoModalProvider>
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
          <BentoGrid />
          <EcosystemDiagram />
          <EntryPoints />
          <SurfacesSection />
          <MemberSection />
          <VerticalsSection />
          <TrustSection />
          <PricingSection />
          <FinalCta />
          <SiteFooter />
        </div>
      </div>
    </DemoModalProvider>
  )
}
