import React from 'react';
import Card from './Card';
import Portfolio_data from './Portfolio_data';

const Portfolio = () => {
  return (
    <section className="portfolio relative mt-20" id="portfolio">
      <div className="max-w-[95%] m-auto">
        <div className="m-12 text-center block">
          <h4 className="text-flame tracking-wider font-normal text-base">
            VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
          </h4>
          <h1 className="text-5xl">My Portfolio</h1>
        </div>
        <div className="w-10/12 m-auto justify-center grid grid-rows-2 grid-flow-col auto-cols-fr gap-8">
          {Portfolio_data.map((val, index) => {
            return (
              <div className="position relative">
                <Card
                  key={index}
                  image={val.image}
                  category={val.category}
                  title={val.title}
                  totalLike={val.totalLike}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
