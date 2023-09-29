import React, { useState } from 'react';
import ImageGallery from "react-image-gallery";
// import { CSSTransition, SwitchTransition } from "react-transition-group"
import './App.css';
import './input.css';

import Carousel from './carousel';

import background from './Images/background.jpg'

function App() {
  const [infoDisplay, setInfoDisplay] = useState(true);

  // const images = [
  //   {
  //     original: "https://picsum.photos/id/1018/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1018/250/150/",
  //   },
  //   {
  //     original: "https://picsum.photos/id/1015/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1015/250/150/",
  //   },
  //   {
  //     original: "https://picsum.photos/id/1019/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1019/250/150/",
  //   },
  // ];

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

      <div>
        <div className="text-overlay text-white font-bold text-7xl w-screen h-40">
          Your Community Book Store
        </div>
        <img className="w-screen h-40"
          src={background} alt="background"
        ></img>
      </div>

      <div>
        {/* {!infoDisplay ? */}
        {/* <div className={`${!infoDisplay ? 'transition-show-info' : 'transition-hide-info'
          }`}>
          <div className="flex mt-0.5">
            <div className="ml-10">
              <i className="fa fa-angle-down text-4xl"
                onClick={() => setInfoDisplay(true)}></i>
            </div>
          </div>
        </div> */}

        {/* : */}
        {/* <div className={`${infoDisplay ? 'transition-show-info' : 'transition-hide-info'
          }`}> */}
        <div className="flex mt-0.5 w-screen">

          <div className='mr-20 ml-10 border-solid border-2'>
            <i className={`${infoDisplay ? 'mr-20 ml-10 fa fa-angle-up flex flex-col text-4xl border-solid border-2' : 'transition-rotate-arrow mr-20 ml-10 fa fa-angle-up flex flex-col text-4xl border-solid border-2'}`}
              onClick={() => setInfoDisplay(false)}></i>

            {!infoDisplay && <i className="fa fa-angle-down text-4xl"
                onClick={() => setInfoDisplay(true)}></i>}

          </div>


          <div className="flex justify-around w-5/6">
            <div>
              <div>
                <div className="font-bold text-4xl">Hours</div>
                <div>Monday & Tuesday: 11 AM - 5 PM</div>
                <div>Wednesday - Friday: 11 AM - 3:30 PM</div>
                <div> Saturday: 10 AM - 3:30 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>

            <div>
              <div>
                <div className="font-bold text-4xl">Location</div>
                <div>309 N Cole St Lima, OH 45805</div>
              </div>
            </div>

            <div>
              <div>
                <div className="font-bold text-4xl">Contact</div>
                <div>(567) 204-2718</div>
              </div>
            </div>
          </div>
        </div>
        {/* } */}
        {/* </div> */}
      </div>

      <div className={`${infoDisplay ? 'transition-show-info' : 'transition-hide-info'
        }`}>
        Hello
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
