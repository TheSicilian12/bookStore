import React, { useEffect, useState } from 'react';
import ImageGallery from "react-image-gallery";
// import { CSSTransition, SwitchTransition } from "react-transition-group"
import './App.css';
import './input.css';

import Carousel from './carousel';

import background from './Images/background.jpg'

function App() {
  const [infoDisplay, setInfoDisplay] = useState(true);
  const [initial, setInitial] = useState(true);
  const [rotate, setRotate] = useState("rotate-up")

  const toggleInfoDisplay = () => {
    setInfoDisplay(!infoDisplay);
    setInitial(false);
    rotate === "rotate-down" ? setRotate("rotate-up") : setRotate("rotate-down");
  };

  return (
    <div className="w-screen">
      <div className="flex flex-col">
        <div className="font-bold text-7xl">
          Jan's
        </div>
        <div className="font-bold text-xl">
          Family Book Store
        </div>
      </div>

      <div className="image-container">
        <div className="text-overlay text-white font-bold text-7xl w-screen h-40">
          Your Community Book Store
        </div>
        <img className="w-screen h-40"
          src={background} alt="background"
        ></img>
      </div>

      {/* <div className={`${rotate === "rotate-down" ? 'info-small-container' : 'info-container'} flex`}> */}
      <div className="flex border-solid border-2 bg-antiqueWhite">



        <div className='mr-20 ml-10 border-solid border-2'>
          <i
            className={`fa fa-angle-down ${rotate} text-4xl`}
            onClick={toggleInfoDisplay}
          ></i>
        </div>

        <div className={`${rotate === "rotate-down" ? 'info-small-container' : 'info-container'} border-solid border-2 bg-antiqueWhite w-5/6 flex justify-around`}>
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
      </div>

      <div className="flex justify-center w-screen">
        <Carousel />
      </div>

      <div className="w-screen flex justify-around border-solid border-t-2 mt-10 bg-footerBlack">
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
