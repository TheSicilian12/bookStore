import React, { useEffect, useState } from 'react';
import ImageGallery from "react-image-gallery";
// import { CSSTransition, SwitchTransition } from "react-transition-group"
import './App.css';
import './input.css';
import logo from './Images/Logo/logo.png';
import book1 from './Images/bookCovers/book1.jpg';
import book2 from './Images/bookCovers/book2.webp';
import book3 from './Images/bookCovers/book3.jpg';
import book4 from './Images/bookCovers/book4.jpg';
import book5 from './Images/bookCovers/book5.jpg';
import book6 from './Images/bookCovers/book6.jpg';

import Carousel from './carousel';

import background from './Images/background.jpg'

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
      <div className="flex flex-col">
        {/* <div className="font-bold text-7xl">
          Jan's
        </div> */}
        {/* <div className="font-bold text-xl">
          Family Book Store
        </div> */}
        <img  src={logo}
              alt={"Jan's Family Book Store"}
              className="logo-box" />
      </div>

      <div className="image-container">
        <div className="text-overlay text-white font-bold text-7xl w-screen h-40">
          Your Community Book Store
        </div>
        <img className="w-screen h-40"
          src={background} alt="background"
        ></img>
      </div>

      {/* <div className="flex flex-col border-solid border-2 bg-antiqueWhite"> */}
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

      <div className={`${rotate === "rotate-down" ? 'arrow-up' : 'arrow-down'} arrow-box w-1/12`}>
        <i
          className={`fa fa-angle-down ${rotate} arrow-box-small flex justify-center text-4xl`}
          onClick={toggleInfoDisplay}
        ></i>
      </div>

      <div className={`${rotate === "rotate-down" ? 'general-up' : 'general-down'} flex justify-center w-screen mt-4`}>
        {/* <Carousel /> */}
        <ImageGallery items={images}
                      showFullscreenButton={false}
                      // disableThumbnailScroll={true}
                      />
      </div>

        <div className="w-screen flex justify-around border-solid border-t-2 mt-10 pt-5 pb-10 bg-footerBlack">
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
