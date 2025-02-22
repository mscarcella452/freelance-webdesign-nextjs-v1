import React from "react";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

function SolutionBlock() {
  return (
    <div className='section-padding bg-background-main'>
      <div className='container-xl space-y-16 lg:space-y-24'>
        <div className='grid lg:grid-cols-2 gap-16 xl:gap-32 items-start'>
          <div className='flex flex-col gap-4 max-w-xl'>
            <h3 className='text-h-3 font-semibold font-secondary text-strong max-w-xl '>
              That's where{" "}
              <span className='font-bold text-primary dark:text-primary-dark font-secondary'>
                I, come in.
              </span>
            </h3>
            <h3 className='text-p-lg  font-primary text-normal'>
              A well-built website isn’t just a digital placeholder—it’s a
              powerful tool that attracts, engages, and converts customers.
            </h3>
          </div>
          <div className='flex flex-col gap-4 max-w-xl text-p-lg text-muted font-primary'>
            <p>
              I help small businesses like yours turn their websites into
              powerful business tools.
            </p>
            <p>
              When you partner with me, you’re not just getting a website—you’re
              getting a strategy designed for your long-term success.
            </p>
            <Link
              className='primary-ghost-hover flex gap-1 items-center group font-primary font-semibold mt-4'
              href={"/about"}
            >
              Learn More About Me{" "}
              <ArrowLongRightIcon className='w-7 aspect-square transition-transform group-hover:translate-x-1' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionBlock;
