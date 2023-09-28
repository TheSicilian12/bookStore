import React from 'react';
import './App.css';
import './input.css';

function App() {
  return (
    <div>
      <div className="flex flex-col text-center">
        <div className="font-bold text-7xl">
          Jan's
        </div>
        <div className="font-bold text-xl">
          Family Book Store
        </div>
      </div>
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
      </div>
    </div>
  );
}

export default App;
