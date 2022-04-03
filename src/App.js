import React from 'react';
import Header from './Component/Head/Header';
import Home from './Component/Hero/Home';
import Features from './Component/Features/Features';
import Portfolio from './Component/Portfolio/Portfolio';
import Resume from './Component/Resume/Resume';
import Testimonial from './Component/Testimonial/Testimonial';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Home />
      <Resume />
      <Features />
      <Portfolio />
      <Contact />
    </BrowserRouter>
  );
}
