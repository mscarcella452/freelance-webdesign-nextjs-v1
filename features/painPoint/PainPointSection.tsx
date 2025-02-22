import React from "react";
import ProblemBlock from "@/features/painPoint/ProblemBlock";
import AgitateBlock from "@/features/painPoint/AgitateBlock";
import SolutionBlock from "@/features/painPoint/SolutionBlock";

function PainPointSection() {
  return (
    <section className='bg-background-secondary'>
      <ProblemBlock />
      <AgitateBlock />
      <SolutionBlock />
    </section>
  );
}

export default PainPointSection;
