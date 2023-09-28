import React from 'react';
import ImageGallery from "react-image-gallery";

import './App.css';
import './input.css';

function App() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <div>
      <div className="flex flex-col text-center">
        <div className="font-bold text-7xl text-customOrange">
          Jan's
        </div>
        <div className="font-bold text-xl text-customOrange">
          Family Book Store
        </div>
      </div>
      <h1 class="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Hello</h1>
      <h1 class="[text-shadow:_0_1px_0_var(--tw-shadow-color)]">Hello</h1>
      <div className="flex justify-center mt-0.5">
        <div className="top-28 left-0 w-16 m-0 w-9/12">
          <div className="flex border-solid border-t-2 border-b-2 border-black">
            <i className="sidebar-icon">NOVELS</i>
            <i className="sidebar-icon">ROMANCE</i>
            <i className="sidebar-icon">MYSTERIES</i>
            <i className="sidebar-icon">WESTERN</i>
            <i className="sidebar-icon">SCIENCE FICTION</i>
          </div>
        </div>

        <div>
          Hours
          <div>Monday: 11 AM - 5 PM</div>
          <div>Tuesday: 11 AM - 5 PM</div>
          <div>Wednesday: 11 AM - 3:30 PM</div>
          <div>Thursday: 11 AM - 3:30 PM</div>
          <div>Friday: 11 AM - 3:30 PM</div>
          <div> Saturday: 10 AM - 3:30 PM</div>
          <div>Sunday: Closed</div>
        </div>

        <div>
          Location
          <div>309 N Cole St Lima, OH 45805</div>
        </div>

        <div>
          Contact
          <div>(567) 204-2718</div>
        </div>


      </div>
    </div>
  );
}

export default App;

// https://www.npmjs.com/package/react-image-gallery
{/* <ImageGallery items={images} /> */}
