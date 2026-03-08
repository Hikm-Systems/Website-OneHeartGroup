import SiteHeader from "@/components/site-header";
import HeroVideo from "@/components/hero-video";
import LogoCarousel from "@/components/logo-carousel";
import SolutionsGrid from "@/components/solutions-grid";
import ScaleCtaSection from "@/components/scale-cta-section";
import StatsSection from "@/components/stats-section";
import AboutSection from "@/components/about-section";
import WhyChooseUs from "@/components/why-choose-us";
import ScaleCtaBottom from "@/components/scale-cta-bottom";
import TechnologySection from "@/components/technology-section";
import OperationsSection from "@/components/operations-section";
import CommitmentSection from "@/components/commitment-section";
import ContactSection from "@/components/contact-section";
import SiteFooter from "@/components/site-footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroVideo />
        <div className="relative z-10 bg-bg-default">
        <LogoCarousel />
        <SolutionsGrid />
        <ScaleCtaSection />
        <StatsSection />
        <AboutSection />
        <WhyChooseUs />
        <ScaleCtaBottom />
        <TechnologySection />
        <OperationsSection />
        <CommitmentSection />
        <ContactSection />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
