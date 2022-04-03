import { useRef, useState } from 'react';
import Card from './Card';
import data from './FeatureApi';
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@material-ui/icons';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Features = () => {
  const listRef = useRef();

  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    rows: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section id="features">
        <br />
        <div className="features mt-16">
          <div className="max-w-[95%] m-auto">
            <div className="m-12 text-center block">
              <h4 className="text-imperial-red tracking-wider font-normal text-base">
                Projects Experiences
              </h4>
              <h1 className="text-5xl text-prussian-blue">What I Do</h1>
            </div>

            <div className="m-auto w-10/12">
              <Slider {...sliderSettings}>
                {data.map((val, index) => {
                  return (
                    <Card
                      key={index}
                      image={val.image}
                      title={val.title}
                      desc={val.desc}
                    />
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
