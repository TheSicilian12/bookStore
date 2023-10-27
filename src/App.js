import React, { useEffect, useState } from 'react';
import ImageGallery from "react-image-gallery";
// import { CSSTransition, SwitchTransition } from "react-transition-group"
import './App.css';
import './input.css';
import logo from './Images/Logo/logo.png';
import paperbackExchangeImage from './Images/graphics/paperbackExchange.png';
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
      </div>

      <div className={`${rotate === "rotate-down" ? 'info-small-container' : 'info-container'} flex justify-around bg-antiqueWhite`}>

        <div>
          <div className="font-bold text-4xl">Hours</div>
          <div>Monday & Tuesday: 11 AM - 5 PM</div>
          <div>Wednesday - Friday: 11 AM - 3:30 PM</div>
          <div> Saturday: 10 AM - 3:30 PM</div>
          <div>Sunday: Closed</div>
        </div>

        <div>
          <div className="font-bold text-4xl">Location</div>
          <div>309 N Cole St Lima, OH 45805</div>
        </div>

        <div>
          <div>
            <div className="font-bold text-4xl">Contact</div>
            <div>(567) 204-2718</div>
          </div>
        </div>



      </div>

      <div className={`${rotate === "rotate-down" ? 'arrow-up' : 'arrow-down'} arrow-box flex`}
        onClick={toggleInfoDisplay}>

        <i
          className={`fa fa-angle-down ${rotate} color-white flex justify-center text-4xl mr-5`}
        ></i>
        {/* <img src={hoursAndLocation}
          alst={'Hours and Location'} /> */}
          <div className='color-white text-4xl m-2'>Hours and Location</div>
        <i
          className={`fa fa-angle-down ${rotate} color-white flex justify-center text-4xl ml-5`}
        ></i>
        {/* <FontAwesomeIcon icon="fa-solid fa-angle-down" style={{color: "#ffffff",}} /> */}

      </div>

      <div className={`${rotate === "rotate-down" ? 'general-up' : 'general-down'} flex flex-col justify-center items-center w-screen mt-4`}>
        {/* <Carousel /> */}
        <img src={carouselHeader}
          alt={'Featured Books'}
          className='w-1/3 mb-5 pb-5 header-carousel' />
        <div className='carousel-box'>
          <ImageGallery items={images}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay={true}
            swipingTransitionDuration={400}
            slideDuration={800}
          />
        </div>
      </div>

      <div className="w-screen flex justify-around border-solid border-t-2 mt-10 pt-5 pb-10 footer-color">
        <div className="text-white">
          <div className="font-bold text-4xl">Hours</div>
          <div>Monday & Tuesday: 11 AM - 5 PM</div>
          <div>Wednesday - Friday: 11 AM - 3:30 PM</div>
          <div> Saturday: 10 AM - 3:30 PM</div>
          <div>Sunday: Closed</div>
        </div>

        <div className="text-white">
          <div className="font-bold text-4xl">Location</div>
          <div>309 N Cole St Lima, OH 45805</div>
        </div>

        <div className="text-white" v>
          <div className="font-bold text-4xl">Contact</div>
          <div>(567) 204-2718</div>
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
