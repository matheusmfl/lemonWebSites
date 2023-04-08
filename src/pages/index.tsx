import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FloatCards } from "@/components/floatCardsSection";
import { SectionIconsCards } from "@/components/SectionIconsCards";
import { SectionFeedback } from "@/components/SectionFeedback";
import { SectionMockupDesktop } from "@/components/SectionMockupDesktop";
import { SectionMockupMobile } from "@/components/SectionMockupMobile";
import { SectionPriceCards } from "@/components/SectionPriceCards";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <div style={{maxWidth: '1440px', margin: 'auto'}}>
   
      
      <HeroSection />
      <SectionMockupDesktop />
      <SectionMockupMobile />
      <SectionIconsCards />
      <FloatCards />
      <SectionPriceCards />
      <SectionFeedback />
      
    </div>
    <Footer />
    </>
  );
}
