import React, { useState } from 'react';
import img from "../../assets/images/exitfullscreen.png";

const WindowWrapper = ({ children }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleMinimizeClick = () => {
    if (!isFullscreen) {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  const handleExitClick = () => {
    alert('Exit clicked');
    // Implement exit functionality here
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center border-b-2 border-l-2 border-r-2 border-white">
      {/* Your header */}
      <div className="flex justify-end items-center w-screen h-[2%] p-1 bg-white">
        <button className="text-sm flex h-4 justify-center items-center" onClick={handleMinimizeClick}>
          <img src={img} alt="" />
        </button>
        {/* <button className="border border-solid border-gray-300 p-1 w-4 h-4 text-sm flex justify-center items-center" onClick={handleExitClick}>x</button> */}
      </div>
      {/* Content */}
      <div className="flex items-center justify-center flex-1">
        {children}
      </div>
    </div>
  );
};

export default WindowWrapper;
