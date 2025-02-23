// import { clsx } from "clsx";
import HeroSection from "@/features/HeroSection";
import PainPointSection from "@/features/painPoint/PainPointSection";
import PortfolioAccordion from "@/features/portfolio/PortfolioAccordion";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PainPointSection />
      <PortfolioAccordion />
      <div className='h-[500px]'></div>
    </>
  );
}
