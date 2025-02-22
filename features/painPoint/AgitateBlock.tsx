import React from "react";
import {
  PresentationChartBarIcon,
  HomeModernIcon,
  PencilSquareIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

function AgitateBlock() {
  return (
    <div className='section-padding'>
      <div className='container-xl space-y-16 lg:space-y-24'>
        <div className='grid xl:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-center'>
          <div className='flex flex-col gap-4'>
            {/* <h4 className='text-p text-primary font-semibold'>
              Make Every Click Count
            </h4> */}
            <h3 className='text-h-3 font-semibold font-secondary text-strong max-w-xl mb-8'>
              An underperforming website doesn’t just look bad—{" "}
              <span className='font-bold text-primary dark:text-secondary-dark'>
                it can cost you.
              </span>
            </h3>
            <p
              className='text-p lg:text-p-lg font-primary text-muted max-w-xl'
              data-testid='paragraph'
            >
              A struggling website doesn’t just sit there—it actively pushes
              customers away. If your site is hard to use or doesn’t show up in
              search results, you're losing business to competitors who invested
              in theirs.
            </p>
          </div>
          <Image
            className=' max-h-[450px] object-cover justify-self-center'
            src='https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg'
            alt=''
            width={643}
            height={712}
          />
        </div>
        <div className='grid md:grid-cols-2 gap-8 md:gap-16  md:auto-rows-fr md:justify-items-center'>
          {problems.map((problem, index) => (
            <Problem key={index} {...problem} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AgitateBlock;

const Problem = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <div
    className='grid grid-cols-[auto_1fr] md:grid-cols-1 lg:grid-cols-[auto_1fr] gap-5  md:max-w-lg bg-background-tertiary p-4 rounded-md'
    data-testid='div-wrapper'
    aria-labelledby='block-title'
    aria-describedby='block-description'
  >
    <div
      className='icon w-8 md:w-12 aspect-square p-1 md:p-2 rounded-md primary-solid md:primary-soft'
      data-testid='icon-wrapper'
    >
      {icon}
    </div>
    <div className='space-y-2'>
      <h3
        id='block-title'
        className='text-p font-semibold text-normal font-primary'
      >
        {title}
      </h3>
      <p id='block-description' className='text-p-sm text-muted font-primary'>
        {description}
      </p>
    </div>
  </div>
);

const problems = [
  {
    icon: <PresentationChartBarIcon />,
    title: "Missed Opportunities",
    description:
      "If your website doesn’t clearly communicate what you offer, potential customers won’t stick around to figure it out.",
  },
  {
    icon: <HomeModernIcon />,
    title: "Frustrating User Experience",
    description:
      "Slow load times, clunky navigation, and poor mobile design drive visitors away before they even get a chance to engage.",
  },
  {
    icon: <PencilSquareIcon />,
    title: "Invisible in Search",
    description:
      "Without proper optimization, your website won’t appear when customers search for services like yours.",
  },
  {
    icon: <RectangleStackIcon />,
    title: "High bounce rates",
    description:
      "Visitors leave within seconds when they can’t find what they need, costing you potential business.",
  },
];
