import React, { useState } from 'react';
import logo from '../pic/logo.png';

const Header = () => {
  const toggleCSSclasses = (main_event, el, ...cls) =>
    cls.map((cl) => el.classList.toggle(cl, main_event.scrollY > 20));

  //when scroll menu at top
  window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    const test = [
      'top-0',
      'w-full',
      'h-1/8',
      'bg-white',
      'shadow-gray-300',
      'duration-300',
    ];

    toggleCSSclasses(
      window,
      header,
      'fixed',
      'top-0',
      'w-full',
      'h-1/10',
      'bg-turquoise',
      'z-50'
    );
  });

  // toggle menu
  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <header id="header" className="h-1/10 leading-4">
        <div className="pt-4 flex justify-between">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="navlink">
            <ul className="flex uppercase">
              <li className="ml-7 text-base font-medium tracking-wide duration-500 hover:text-honeydew">
                <a href="#home">About Me</a>
              </li>
              <li className="ml-7 text-base font-medium tracking-wide duration-500 hover:text-honeydew">
                <a href="#resume">Resume</a>
              </li>
              <li className="ml-7 text-base font-medium tracking-wide duration-500 hover:text-honeydew">
                <a href="#features">Features</a>
              </li>

              <li className="ml-7 text-base font-medium tracking-wide duration-500 hover:text-honeydew">
                <a href="#portfolio">Projects</a>
              </li>
              <li className="mx-7 text-base font-medium tracking-wide duration-500 hover:text-honeydew">
                <a href="#contact">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
