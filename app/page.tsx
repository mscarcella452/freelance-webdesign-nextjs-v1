// import { clsx } from "clsx";
import HeroSection from "@/features/HeroSection";
import StatsSection from "@/features/stats/StatsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <div className='h-[500px]'></div>
    </>
  );
}
