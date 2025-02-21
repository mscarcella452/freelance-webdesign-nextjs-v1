import React from "react";

function ProblemBlock() {
  return (
    <section className='bg-background-main lg:bg-primary/10 relative'>
      {/* absolute background */}
      <div className='hidden lg:block absolute bottom-0 left-0 w-full bg-background-secondary h-2/3 z-0' />
      <div className='container-xl flex flex-col gap-16 lg:gap-24 xl:gap-32 relative z-10 lg:bg-background-main lg:shadow-md lg:rounded-lg lg:p-16 '>
        <div className=' w-full grid xl:grid-cols-2 gap-16  divide-x-4 xl:divide-x-2 divide-solid divide-main-border'>
          {/* heading */}
          <div className='space-y-4'>
            <h4 className='text-p text-primary font-semibold'>
              Make Every Click Count
            </h4>
            <h2 className='text-h-3 max-w-xl lg:max-w-[800px] font-semibold font-secondary text-normal'>
              Running a small business is tough, and your website might not be
              helping.
            </h2>
          </div>
          {/* stats */}
          <div className='grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-8 pl-8 lg:pl-16'>
            {stats.map((stat, index) => (
              <StatItem key={index} {...stat} />
            ))}
          </div>
        </div>
        {/* content */}
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-16 '>
          {content.map((content, index) => (
            <ContentItem key={index} {...content} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({
  number,
  description,
  source,
}: {
  number: number;
  description: string;
  source: string;
}) {
  return (
    <div className='flex flex-col gap-1'>
      <h4 className='text-h-1 font-bold text-primary mb-3'>
        {number}
        <span className='text-h-6'>%</span>
      </h4>
      <h4 className='text-p text-normal max-w-[300px]'>{description}</h4>
      <small className='text-muted text-small place-self-end md:place-self-start rounded-md bg-background-secondary p-2 mt-6'>
        Source: {source}
      </small>
    </div>
  );
}

function ContentItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className='space-y-2 max-w-xl'>
      <h2 className='text-p text-normal font-secondary font-semibold'>
        {title}
      </h2>
      <p className='text-p-sm text-muted font-primary'>{description}</p>
    </div>
  );
}

export default ProblemBlock;

const content = [
  {
    title: "Your Website Should Build Trust, Not Doubt",

    description:
      "First impressions matter. A professional, well-designed website shows potential customers that your business is credible, reliable, and ready to meet their needs.",
    image: {
      src: "https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/success.jpg",
      alt: "",
    },
  },

  {
    title: "Make Every Click Count",

    description:
      "Every visitor to your website is an opportunity. With the right design and strategy, your website can guide users toward taking action—whether that’s making a purchase, booking a service, or contacting you.",
    image: {
      src: "https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg",
      alt: "",
    },
  },
];

const stats = [
  {
    number: 94,
    description:
      "of first impressions of a business are based on its website design.",
    source: "Sweor",
  },
  {
    number: 75,
    description:
      "of users judge a company's credibility based on their website.",
    source: "Sweor",
    // "A poorly designed site can make a business seem untrustworthy, costing them potential sales.",
  },
];
