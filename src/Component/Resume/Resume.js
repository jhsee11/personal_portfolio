import { useState } from 'react';
import './Resume.css';
import Card from './Card';
import ResumeApi from './ResumeApi';
import Tabs from './Tabs';

const Resume = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const _handleIndexChange = (index) => {
    setCurrentIndex(index);
  };

  const _handleNext = (currentIndex) => {
    setCurrentIndex(currentIndex + 1);
  };

  const _handleComplete = () => {};

  return (
    <>
      <section className="Resume" id="resume">
        <br />
        <div className="max-w-full mt-16 ">
          <div className="relative mb-12 text-center block">
            <h4 className="text-imperial-red tracking-wider font-normal text-base">
              EXPERIENCES
            </h4>
            <h1 className="text-5xl text-prussian-blue">My Resume</h1>
          </div>
        </div>

        <div>
          <div className="relative mt-10">
            <div className="relative h-5/6 m-auto max-w-full w-10/12">
              <Tabs color="prussian-blue" />
            </div>
          </div>
        </div>
        {/*
              <div className="heading">
                <h1>Education Quality</h1>
              </div>

              <div className="flex justify-items-center">
                {ResumeApi.map((val, id) => {
                  if (val.category == 'education') {
                    return (
                      <Card
                        key={id}
                        title={val.title}
                        year={val.year}
                        rate={val.rate}
                        desc={val.desc}
                      />
                    );
                  }
                })}
              </div>
            </div>
            <div className="left">
              <div className="heading">
                <h1>Job Experience</h1>
              </div>

              <div className="content">
                {ResumeApi.map((val, id) => {
                  if (val.category == 'experience') {
                    return (
                      <Card
                        key={id}
                        title={val.title}
                        year={val.year}
                        rate={val.rate}
                        desc={val.desc}
                      />
                    );
                  }
                })}
              </div>
            </div>
            
          </div>
          
        </div>
        */}
      </section>
    </>
  );
};

export default Resume;
