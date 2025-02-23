"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import {
  ArrowLongRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

type PortfolioCardAccordion = {
  title: string;
  genre: string;
  description: string;
  image: { src: string; alt: string };
  href: string;
  active: boolean;
  onClick: (index: number) => void;
  index: number;
};

function PortfolioCardAccordion({
  title,
  genre,
  description,
  image,
  href,
  onClick,
  active,
  index,
}: PortfolioCardAccordion) {
  const transitionSpeed = "duration-[500ms] ease-out";

  useEffect(() => {
    if (active) {
      document.documentElement.style.scrollBehavior = "auto";
    } else {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, [active]);
  return (
    <div
      className={clsx(
        "w-full overflow-hidden transition-all will-change-[max-height]",
        transitionSpeed,
        {
          "max-h-[375px] ": active,
          "max-h-[80px] delay-[500ms]": !active,
        }
      )}
    >
      <div
        className={clsx(
          "grid  transition-all overflow-hidden",
          transitionSpeed,
          {
            "gap-8 grid-cols-[1.25fr_1fr] ": active,
            "gap-0 grid-cols-[0fr_1fr] delay-[500ms]": !active,
          }
        )}
      >
        <a
          href={href}
          className={clsx("transition-translate", transitionSpeed, {
            "translate-y-0 delay-[500ms]": active,
            "translate-y-[100%]": !active,
          })}
        >
          <Image
            className='h-[375px] object-cover'
            src={image.src}
            alt={image.alt}
            width={1920}
            height={1080}
          />
        </a>

        <div
          className={clsx(
            "h-full w-full grid  transition-all overflow-hidden",
            transitionSpeed,
            {
              "gap-8  grid-rows-[80px_1fr]": active,
              "gap-0  grid-rows-[80px_0fr] delay-[500ms]": !active,
            }
          )}
        >
          <button
            onClick={e => onClick(index)}
            className='h-[80px] flex items-center justify-between group'
          >
            <h4
              className={clsx(
                " font-semibold font-secondary transition-[font-size]",
                transitionSpeed,
                {
                  "text-h-3 text-strong  ": active,
                  " group-hover:text-strong text-subtle": !active,
                  "text-h-1 transition delay-[500ms]": !active,
                }
              )}
            >
              {title}
            </h4>
            <ChevronDownIcon
              className={clsx(
                "w-8 aspect-square secondary-soft-hover bg-background-tertiary  rounded-full p-1 transition-rotate",
                transitionSpeed,
                {
                  "rotate-180": active,
                  "delay-[500ms]": !active,
                }
              )}
            />
          </button>
          <div
            className={clsx(
              "flex flex-col justify-end gap-8 transition-all",
              transitionSpeed,

              {
                "translate-y-0 delay-[500ms]": active,
                "translate-y-[100%]": !active,
              }
            )}
          >
            <div className='flex flex-col gap-4 pl-5 border-l-4 border-background-tertiary w-full'>
              <p className='text-p-lg text-subtle font-secondary font-medium'>
                {genre}
              </p>
              <p className='text-p font-primary text-muted max-w-md'>
                {description}
              </p>
            </div>
            <div className='flex justify-between items-center mb-4 w-full'>
              <Link
                className='primary-ghost-hover flex gap-1 items-center group font-primary font-semibold  w-[fit-content] '
                href={href}
              >
                Read More{" "}
                <ArrowLongRightIcon className='w-7 aspect-square transition-transform group-hover:translate-x-1' />
              </Link>
              <Link
                className='primary-soft-hover px-2 py-1 rounded-md font-primary font-semibold  w-[fit-content] '
                href={href}
              >
                View Live Site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCardAccordion;
