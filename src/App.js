import React, { useEffect, useState } from 'react';
import ImageGallery from "react-image-gallery";
// import { CSSTransition, SwitchTransition } from "react-transition-group"
import './App.css';
import './input.css';
import logo from './Images/Logo/logo.png';
import paperbackExchangeImage from './Images/graphics/paperbackExchange.png';
import general from './Images/graphics/general.png';
import carouselHeader from './Images/graphics/carouselHeader.png';
import hoursAndLocation from './Images/graphics/hoursAndLocation.png';
import book1 from './Images/bookCovers/book1.jpg';
import book2 from './Images/bookCovers/book2.jpg';
import book3 from './Images/bookCovers/book3.jpg';
import book4 from './Images/bookCovers/book4.jpg';
import book5 from './Images/bookCovers/book5.jpg';
import book6 from './Images/bookCovers/book6.jpg';

import Carousel from './carousel';

import background from './Images/graphics/background.png'

function App() {
  const [infoDisplay, setInfoDisplay] = useState(true);
  const [initial, setInitial] = useState(true);
  const [rotate, setRotate] = useState("rotate-up")

  const toggleInfoDisplay = () => {
    console.log("toggle")
    setInfoDisplay(!infoDisplay);
    setInitial(false);
    rotate === "rotate-down" ? setRotate("rotate-up") : setRotate("rotate-down");
  };

  const images = [
    {
      original: book1,
      thumbnail: book1,
    },
    {
      original: book2,
      thumbnail: book2,
    },
    {
      original: book3,
      thumbnail: book3,
    },
    {
      original: book4,
      thumbnail: book4
    },
    {
      original: book5,
      thumbnail: book5
    },
    {
      original: book6,
      thumbnail: book6
    },
    {
      original: book1,
      thumbnail: book1
    },
    {
      original: book2,
      thumbnail: book2
    },
    {
      original: book3,
      thumbnail: book3
    },
    {
      original: book4,
      thumbnail: book4
    },
    {
      original: book5,
      thumbnail: book5
    },
    {
      original: book6,
      thumbnail: book6
    },
    {
      original: book1,
      thumbnail: book1
    },
    {
      original: book2,
      thumbnail: book2
    },
    {
      original: book3,
      thumbnail: book3
    },
    {
      original: book4,
      thumbnail: book4
    },
    {
      original: book5,
      thumbnail: book5
    },
    {
      original: book6,
      thumbnail: book6
    },
  ]

  return (
    <div className="w-screen">
      <div className="flex justify-between mb-5">
        <img src={logo}
          alt={"Jan's Family Book Store"}
          className="logo-box" />
        <img src={paperbackExchangeImage}
          alt={"Paperback Exchange"}
          className="paperbackExchange-box" />
      </div>

      <div className="image-container">
        <img className="w-screen backgroung-img"
          src={background} alt="background"
        ></img>
        <div className='background-text-container'>
          <div className='background-image-text'>
            Your Community Book Store
          </div>
        </div>
      </div>

      <div className={`${rotate === "rotate-down" ? 'info-small-container' : 'info-container'} justify-center background-info`}>

        <div className='w-1/4 flex mt-4 mb-4'>
          <div className="large-screen">
            <div className="font-bold text-4xl">Hours</div>
            <div>Monday - Tuesday: 11 AM - 5 PM</div>
            <div>Wednesday - Friday: 11 AM - 3:30 PM</div>
            <div>Saturday: 10 AM - 3:30 PM</div>
            <div>Sunday: Closed</div>
          </div>

          <div className="mid-screen">
            <div className="font-bold text-4xl">Hours</div>
            <div>Monday - Tuesday:</div>
            <div>11 AM - 5 PM</div>
            <div>Wednesday - Friday:</div>
            <div>11 AM - 3:30 PM</div>
            <div>Saturday:</div>
            <div>10 AM - 3:30 PM</div>
            <div>Sunday:</div>
            <div>Closed</div>
          </div>
        </div>



        <div className='w-1/4 flex mt-4 mb-4'>
          <div className="h-36">
            <div className="font-bold text-4xl">Visit</div>
            <div>309 N Cole St Lima, OH 45805</div>
            <div>(567) 204-2718</div>
          </div>
        </div>
      </div>

      <div className={`${rotate === "rotate-down" ? 'arrow-up' : 'arrow-down'} arrow-box flex`}
        onClick={toggleInfoDisplay}>

        <i
          className={`fa fa-angle-down ${rotate} color-white flex justify-center text-2xl mr-5`}
        ></i>
        <div className='color-white text-2xl m-2'>Our Info</div>
        <i
          className={`fa fa-angle-down ${rotate} color-white flex justify-center text-2xl ml-5`}
        ></i>
      </div>

      <div className={`${rotate === "rotate-down" ? 'general-up' : 'general-down'} flex flex-col justify-center items-center w-screen mt-4`}>
        <img src={general} className='w-96' alt='Who We Are' />
        <div className='about-details text-2xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </div>
      </div>

      <div className="w-screen flex justify-center border-solid border-t-2 mt-40 pt-5 pb-10 footer-color">
        <div className='w-1/4 flex justify-center text-white'>
          <div>
            <div className="font-bold text-4xl">Hours</div>
            <div>Monday & Tuesday: 11 AM - 5 PM</div>
            <div>Wednesday - Friday: 11 AM - 3:30 PM</div>
            <div> Saturday: 10 AM - 3:30 PM</div>
            <div>Sunday: Closed</div>
          </div>
        </div>

        <div className='w-1/4 flex justify-center text-white'>
          <div>
            <div className="font-bold text-4xl">Visit</div>
            <div>309 N Cole St Lima, OH 45805</div>
            <div>(567) 204-2718</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// https://www.npmjs.com/package/react-image-gallery
// <ImageGallery items={images} />

// https://reactcommunity.org/react-transition-group/
// https://unpkg.com/react-transition-group@4.4.5/dist/react-transition-group.js

// maybe
// https://www.npmjs.com/package/react-multi-carousel?activeTab=readme
