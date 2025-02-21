// import { clsx } from "clsx";
import HeroSection from "@/features/HeroSection";
import PainPointSection from "@/features/painPoint/PainPointSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PainPointSection />
      <div className='h-[500px]'></div>
    </>
  );
}
