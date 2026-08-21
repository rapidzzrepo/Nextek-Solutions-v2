import HeroSection from '../components/sections/home-v2/HeroSection'
import HorizontalServices from '../components/sections/home-v2/HorizontalServices'
import CertificationRibbon from '../components/sections/home-v2/CertificationRibbon'
import ServiceScenes from '../components/sections/home-v2/ServiceScenes'
import StatsStrip from '../components/sections/home-v2/StatsStrip'
import PartnerLogos from '../components/sections/home-v3/PartnerLogos'
import ClientResults from '../components/sections/home-v3/ClientResults'
import WhyTrustUs from '../components/sections/home-v3/WhyTrustUs'
import ProcessTimeline from '../components/sections/home-v3/ProcessTimeline'
import TechStack from '../components/sections/home-v3/TechStack'
import LatestInsights from '../components/sections/home-v3/LatestInsights'
import GlobalNetwork from '../components/sections/home-v3/GlobalNetwork'
import CTASection from '../components/sections/home-v3/CTASection'
import SectionDivider from '../components/ui/SectionDivider'

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionDivider className="text-surface" />
      <HorizontalServices />
      <CertificationRibbon />
      <ServiceScenes />
      <PartnerLogos />
      <ClientResults />
      <WhyTrustUs />
      <StatsStrip />
      <SectionDivider className="text-surface" />
      <ProcessTimeline />
      <TechStack />
      <LatestInsights />
      <GlobalNetwork />
      <CTASection />
    </>
  )
}
