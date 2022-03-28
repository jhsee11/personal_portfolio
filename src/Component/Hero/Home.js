import React from 'react';
import skill1 from '../pic/skill1.png';
import skill2 from '../pic/skill2.png';
import skill3 from '../pic/skill3.png';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <>
      <section className="relative m-8" id="home">
        <div className="max-w-7xl margin flex mt-20">
          <div className="w-2/3  mt-80">
            <h3 className="font-thin tracking-widest">WELCOME TO MY WORLD</h3>
            <h1 className="text-6xl font-bold text-gray-700">
              Hi, I’m <span className="text-flame">Jasper</span>
            </h1>
            <h2 className="text-6xl text-flame font-bold">
              a
              <span className="text-black">
                <Typewriter
                  words={[' Self Taught Programmer', ' Sr Software Engineer.']}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p> </p>

            <div className="mt-20 flex justify-between">
              <div className="col_1">
                <h4 className="font-thin tracking-widest">FIND WITH ME</h4>
                <div className="border-none outline-none bg-inherit">
                  <button
                    className="mt-3 py-5 px-6 rounded-md bg-blue-200 shadow-md shadow-white
                  hover:bg-tumbleweed hover:translate-y-1"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </button>
                </div>
              </div>
              <div className="col_1">
                <h4 className="font-thin tracking-widest">BEST SKILL ON</h4>
                <button
                  className="mt-3 py-5 px-6 rounded-md text-black shadow-md shadow-white bg-white hover:bg-tumbleweed
                 hover:-translate-y-3 ease-in duration-200"
                >
                  <img className="w-10 h-10" src={skill1} alt="" />
                </button>
                <button
                  className="mt-3 py-5 px-6 rounded-md text-black shadow-md shadow-white bg-white hover:bg-tumbleweed
                 hover:-translate-y-3 ease-in duration-200"
                >
                  <img className="w-10 h-10" src={skill2} alt="" />
                </button>
                <button
                  className="mt-3 py-5 px-6 rounded-md text-black shadow-md shadow-white bg-white hover:bg-tumbleweed
                 hover:-translate-y-3 ease-in duration-200"
                >
                  <img className="w-10 h-10" src={skill3} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
