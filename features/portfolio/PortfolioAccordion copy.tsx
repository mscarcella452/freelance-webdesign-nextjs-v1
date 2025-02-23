"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import {
  ArrowLongRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

function PortfolioAccordion() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(prev => !prev);

  return (
    <section>
      <div className='section-padding '>
        <div className='p-5 border-t-2 border-b-2  border-background-tertiary'>
          <div
            className={clsx(
              "w-full   overflow-hidden transition-all duration-[500ms] ",
              {
                "max-h-[800px] ease-in": open,
                " max-h-[75px] lg:delay-[500ms] ease-out": !open,
              }
            )}
          >
            <div
              className={clsx(
                "grid  transition-all duration-[500ms] ease-out overflow-hidden ",
                // {
                //   "gap-0 lg:grid-cols-[1fr_1fr] ease-out lg:ease-in": open,
                //   "gap-0 grid-rows-[1fr_0fr] lg:grid-cols-[0fr_1fr] ease-out":
                //     !open,
                // }
                {
                  "gap-5 lg:grid-cols-[1.25fr_1fr] grid-auto-rows-[minmax(75px,_1fr)] lg:grid-rows-1 ease-in ":
                    open,
                  "gap-0 lg:grid-cols-[0fr_1fr] grid-auto-rows-[minmax(0px,_1fr)] lg:grid-rows-1 ease-out delay-[500ms]":
                    !open,
                }
              )}
            >
              <div
                className={clsx(
                  " order-last lg:order-first transition-all duration-[500ms] ease-out overflow-hidden"
                )}
              >
                <Image
                  className={clsx(
                    "h-[450px] object-cover  transition-all duration-[500ms]  ease-in",
                    {
                      "translate-y-0 lg:delay-[500ms]": open,
                      "translate-y-[-100%]": !open,
                    }
                  )}
                  src='https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg'
                  alt=''
                  width={1920}
                  height={1080}
                />
              </div>
              <div
                className={clsx(
                  "lg:h-[450px] grid  transition-all duration-[500ms] ease-out overflow-hidden ",
                  // {
                  //   "gap-0 lg:grid-cols-[1fr_1fr] ease-out lg:ease-in": open,
                  //   "gap-0 grid-rows-[1fr_0fr] lg:grid-cols-[0fr_1fr] ease-out":
                  //     !open,
                  // }
                  {
                    "gap-0 lg:gap-8  grid-rows-[75px_1fr]  ease-in ": open,
                    "gap-0  grid-rows-[75px_0fr] ease-out delay-[500ms]": !open,
                  }
                )}
              >
                <button
                  onClick={toggleOpen}
                  className='h-[75px] flex items-center justify-between group bg-background-main z-10'
                >
                  <h4
                    className={clsx(
                      "text-h-3 xl:text-h-2 font-semibold font-secondary",
                      {
                        "text-strong": open,
                        "group-hover:text-strong text-subtle transition": !open,
                      }
                    )}
                  >
                    Solstice Creation
                  </h4>
                  <ChevronDownIcon
                    className={clsx(
                      "w-8 aspect-square primary-soft-hover rounded-full p-1 transition-rotate duration-[500ms] ease-in",
                      {
                        "rotate-180": open,
                        "lg:delay-[500ms]": !open,
                      }
                    )}
                  />

                  {/* <p
                    className={clsx("text-p font-primary hidden xl:block", {
                      "text-normal": open,
                      "group-hover:text-normal text-subtle transition": !open,
                    })}
                  >
                    Small Business
                  </p> */}
                </button>
                <div
                  className={clsx(
                    "flex items-end gap-4 transition-all duration-[500ms] ease-out ",

                    {
                      "translate-y-0 lg:delay-[500ms]": open,
                      "translate-y-[200%]": !open,
                    }
                  )}
                >
                  <div className='flex flex-col gap-4 bg-background-secondary rounded-md p-5 w-full'>
                    <p className='text-p-lg text-subtle font-secondary font-medium'>
                      Small Business fghfghfg
                    </p>
                    <p className='text-p font-primary text-muted max-w-lg lg:max-w-md'>
                      I created a responsive website for Soltice Creation,
                      featuring a sleek portfolio and a design that reflects
                      their unique brand, helping them attract new clients.
                    </p>
                    <Link
                      className='primary-ghost-hover flex gap-1 items-center group font-primary font-semibold mt-4 w-[fit-content] '
                      href={"/about"}
                    >
                      Read More{" "}
                      <ArrowLongRightIcon className='w-7 aspect-square transition-transform group-hover:translate-x-1' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioAccordion;
