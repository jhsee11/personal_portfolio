import React, { useState } from 'react';
import logo from '../pic/logo.png';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  const toggleCSSclasses = (main_event, el, ...cls) =>
    cls.map((cl) => el.classList.toggle(cl, main_event.scrollY > 20));

  //when scroll menu at top
  window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    const header_ul = document.querySelector('ul');

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
      'h-20',
      'bg-celadon-blue',
      'z-[100]',
      'mb-20'
    );

    toggleCSSclasses(window, header_ul, 'bg-celadon-blue');
  });

  // toggle menu
  const [Mobile, setMobile] = useState(false);
  const [open, setOpen] = useState(false);

  let Links = [
    { name: 'About Me', link: '#home' },
    { name: 'Resume', link: '#resume' },
    { name: 'Features', link: '#features' },
    { name: 'Portfolio', link: '#portfolio' },
    { name: 'Contact', link: '#contact' },
  ];

  return (
    <>
      <header id="header" className="h-16 leading-4">
        <div className="pt-4 md:flex md:items-center md:justify-between ">
          <div className="ml-6 text-2xl flex items-center tracking-wider text-prussian-blue">
            BIO
            <i className=" ml-2 text-4xl fa-solid fa-address-card" />
          </div>

          <div onClick={() => setOpen(!open)}>
            <span
              className={`flex justify-end absolute items-center top-5 right-4 text-3xl cursor-pointer md:hidden ${
                open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
              }`}
            ></span>
          </div>

          <div className="navlink mr-4">
            <ul
              className={`uppercase md:flex md:items-center md:pb-0 md:z-1 md:static md:w-auto
             md:opacity-100 md:pl-0 pl-9 pb-12 absolute left-0 w-full bg-white ${
               open ? 'top-30' : 'top-[-490px]'
             }`}
            >
              {Links.map((link) => (
                <li
                  key={link.name}
                  className="md:ml-8 mb-1 ml-7 text-md md:my-0 my-7"
                >
                  <Link
                    to={link.link}
                    smooth
                    className="text-prussian-blue hover:text-powder-blue tracking-wide duration-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {/*}
              <li className="md:ml-8 mb-1 ml-7 text-base font-medium tracking-wide duration-500 hover:text-honeydew">
                <Link to="#home" smooth>
                  About Me
                </Link>
              </li>
              */}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
