import React from "react";

const stats = [
  {
    number: 70,
    description:
      "of small business websites don’t have a clear call to action on their homepage.",
  },
  {
    number: 70,
    description:
      "of small business websites don’t have a clear call to action on their homepage.",
  },
  {
    number: 70,
    description:
      "of small business websites don’t have a clear call to action on their homepage.",
  },
];

function StatsSection() {
  return (
    <section className='bg-background-secondary dark:bg-secondary-dark'>
      <div className='section-container flex flex-col'>
        <div className='grid grid-cols-3 gap-10 justify-between'>
          {stats.map(({ number, description }, index) => (
            <div
              className='text-center space-y-5 bg-background-tertiary dark:bg-background-tertiary-dark p-8 rounded-md '
              key={index}
            >
              <h4 className='text-h-1 text-primary'>
                {number}
                <span className='text-h-5'>%</span>
              </h4>
              <h4 className='text-p'>{description}</h4>
            </div>
          ))}
        </div>
        <small className='text-caption place-self-end rounded-md secondary-soft p-2 '>
          Source: SmallBizGenius
        </small>
      </div>
    </section>
  );
}

export default StatsSection;
