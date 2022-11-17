import React from 'react';
import skill1 from '../pic/skill1.png';
import skill2 from '../pic/skill2.png';
import skill3 from '../pic/skill3.png';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <>
      <section className="relative m-8" id="home">
        <div className="max-w-full flex mt-16 mr-[80px]">
          <div className="w-full mt-60 ml-6">
            <div className="w-[70%] overflow-hidden absolute">
              <h3 className="font-thin tracking-widest">WELCOME TO MY WORLD</h3>
              <h1 className="text-6xl font-bold text-prussian-blue">
                Hi, I’m <span className="text-imperial-red">Jh</span>
              </h1>
              <h2 className="text-6xl text-imperial-red font-bold">
                a
                <span className="text-prussian-blue">
                  <Typewriter
                    words={[
                      ' Self Taught Programmer',
                      ' Senior Software Engineer.',
                    ]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h2>
            </div>

            <div className="mt-[340px] flex justify-between">
              <div className="mt-14">
                <h4 className="font-thin tracking-widest">FIND WITH ME</h4>
                <span className="border-none outline-none bg-inherit">
                  <a
                    href="https://linkedin.com/in/jia-hao-see-165355100"
                    target="_blank"
                  >
                    <button
                      className="mt-3 mr-10 py-3 px-4 rounded-md bg-powder-blue shadow-md shadow-white
                      hover:translate-y-1"
                    >
                      <i className="text-3xl fa-brands fa-linkedin"> </i>
                    </button>
                  </a>
                </span>
                <span className="mr-10 border-none outline-none bg-inherit">
                  <a
                    href="https://accounts.google.com/ServiceLogin"
                    target="_blank"
                  >
                    <button
                      className="mt-3 py-3 px-4 rounded-md bg-powder-blue shadow-md shadow-white
                 hover:translate-y-1"
                    >
                      <i className="text-3xl fa-solid fa-envelope"> </i>
                    </button>
                  </a>
                </span>
              </div>
            </div>
            {/*}
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
       
              */}
          </div>
          <div className="w-[60%] relative ml-20">
            <div className="mt-[70px]">
              <img
                className="hidden ml-[100px] mt-28 xl:block lg:w-[400px] lg:h-[400px] rounded-full"
                src="./seejiahao.jpg"
                alt="personal_img"
              />
            </div>
            <div className="mt-[120px] ml-10 ">
              <h4 className="hidden xl:block font-thin tracking-widest">
                FAVOURITE QUOTE
              </h4>
              <div
                className="hidden xl:block w-max flex justify-items-end mt-3 py-5 px-6 bg-powder-blue rounded-md shadow-md hover:bg-imperial-red
                hover:text-white ease-in duration-200"
              >
                You dont need to be great to start, but you need to start to be
                great
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
