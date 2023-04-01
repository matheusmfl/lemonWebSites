import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SectionAboutUs } from "@/components/sectionAboutUs";
import { SectionIconsCards } from "@/components/SectionIconsCards";
import { SectionFeedback } from "@/components/SectionFeedback";
import { SectionMockupDesktop } from "@/components/SectionMockupDesktop";
import { SectionMockupMobile } from "@/components/SectionMockupMobile";
import { SectionPriceCards } from "@/components/SectionPriceCards";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <SectionMockupDesktop />
      <SectionMockupMobile />
      <SectionIconsCards />
      <SectionAboutUs />
      <SectionPriceCards />
      <SectionFeedback />
    </>
  );
}
