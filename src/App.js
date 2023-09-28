import React, { useState } from 'react';
import ImageGallery from "react-image-gallery";

import './App.css';
import './input.css';

function App() {
  const [infoDisplay, setInfoDisplay] = useState(true);

  return (
    <div>
      <div className="flex flex-col">
        <div className="font-bold text-7xl">
          Jan's
        </div>
        <div className="font-bold text-xl">
          Family Book Store
        </div>
      </div>

      <div>
        {!infoDisplay && <div className="flex mt-0.5 border-solid border-t-2 border-b-2 border-black bg-customRed">
          <i className="fa fa-angle-down"
            onClick={() => setInfoDisplay(true)}></i>

          </div>}

        {infoDisplay && <div className="flex justify-around mt-0.5 border-solid border-t-2 border-b-2 border-black">

          <i className="fa fa-angle-up"
            onClick={() => setInfoDisplay(false)}></i>

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
        </div>}


      </div>
    </div>
  );
}

export default App;

// https://www.npmjs.com/package/react-image-gallery
{/* <ImageGallery items={images} /> */ }
