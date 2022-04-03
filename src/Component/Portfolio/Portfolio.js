import React from 'react';
import Card from './Card';
import Portfolio_data from './Portfolio_data';

const Portfolio = () => {
  return (
    <section className="portfolio relative mt-20" id="portfolio">
      <br />
      <div className="max-w-[95%] mt-16 m-auto">
        <div className="m-12 text-center block">
          <h4 className="text-imperial-red tracking-wider font-normal text-base">
            VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
          </h4>
          <h1 className="text-5xl text-prussian-blue">My Portfolio</h1>
        </div>
        <div className="w-10/12 m-auto justify-center grid grid-rows-3 md:grid-rows-3 lg:grid-rows-2 xl:grid-rows-2 2xl:grid-rows-1 grid-rows-3 grid-flow-col auto-cols-fr gap-8">
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
