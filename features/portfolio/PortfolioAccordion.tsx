"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import {
  ArrowLongRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import PortfolioCardAccordion from "@features/portfolio/PortfolioCardAccordion";

function PortfolioAccordion() {
  const [active, setActive] = useState<number | null>(0);

  const toggleActive = useCallback(
    (index: number) => {
      setActive(prevActive => (prevActive === index ? null : index));
    },
    [active, setActive] // Dependencies: this will update if either active or setActive changes
  );

  return (
    <section className='section-padding'>
      <div className='container-xl'>
        <div className='grid lg:grid-cols-2 gap-16 xl:gap-32 items-start mb-8'>
          <h4 className='text-h-4 text-primary font-semibold font-secondary'>
            Featured Work
          </h4>
          {/* <p className='max-w-xl text-p-lg text-muted font-primary'>
            When you partner with me, you’re not just getting a website—you’re
            getting a strategy designed for your long-term success.
          </p> */}
        </div>
        {featuredWork.map((project, index) => (
          <div
            className={clsx("p-8 border-t-2  border-background-tertiary", {
              "border-b-2": index === featuredWork.length - 1,
            })}
            key={index}
          >
            <PortfolioCardAccordion
              onClick={toggleActive}
              index={index}
              active={active === index}
              {...project}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioAccordion;

const featuredWork = [
  {
    title: "Vetra",
    genre: "Website, Product",
    description:
      "I created a responsive website for Soltice Creation, featuring a sleek portfolio and a design that reflects their unique brand, helping them attract new clients.",
    image: {
      src: "https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg",
      alt: "",
    },
    href: "/",
  },
  {
    title: "Aether Blueprint",
    genre: "Branding",
    description:
      "I created a responsive website for Soltice Creation, featuring a sleek portfolio and a design that reflects their unique brand, helping them attract new clients.",
    image: {
      src: "https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/success.jpg",
      alt: "",
    },
    href: "/",
  },
  {
    title: "Solstice Creation",
    genre: "Small Business Website",
    description:
      "I created a responsive website for Soltice Creation, featuring a sleek portfolio and a design that reflects their unique brand, helping them attract new clients.",
    image: {
      src: "https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/work.jpg",
      alt: "",
    },
    href: "/",
  },
];
