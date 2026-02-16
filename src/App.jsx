import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import ProductShowcase from './components/ProductShowcase'
import PrometheusLab from './components/PrometheusLab'
import Chameleon from './components/Chameleon'
import FreeTrial from './components/FreeTrial'
import Technology from './components/Technology'
import Team from './components/Team'
import Roadmap from './components/Roadmap'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white relative overflow-hidden">
      {/* Ambient orange glow layers throughout the page */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-[-20%] w-[60%] h-[800px] bg-accent/[0.04] rounded-full blur-[200px]" />
        <div className="absolute top-[15%] right-[-15%] w-[50%] h-[600px] bg-accent/[0.03] rounded-full blur-[180px]" />
        <div className="absolute top-[35%] left-[-10%] w-[45%] h-[700px] bg-accent/[0.04] rounded-full blur-[200px]" />
        <div className="absolute top-[55%] right-[-20%] w-[55%] h-[800px] bg-accent/[0.03] rounded-full blur-[180px]" />
        <div className="absolute top-[75%] left-[-15%] w-[50%] h-[600px] bg-accent/[0.04] rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-[-10%] w-[40%] h-[500px] bg-accent/[0.03] rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <SocialProof />
        <ProductShowcase />
        <PrometheusLab />
        <Chameleon />
        <FreeTrial />
        <Technology />
        <Team />
        <Roadmap />
        <Testimonials />
        <Footer />
      </div>
    </div>
  )
}
