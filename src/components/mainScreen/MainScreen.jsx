import React, { useState } from 'react';
import logo from '../../assets/images/ledgerlive.png';
import classNames from 'classnames';
import FullScreenContent from './fullScreenTransition/FullScreenContent';
import WindowWrapper from '../windowWrapper/WindowWrapper';

const MainScreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
  };

  const enterFullscreen = () => {
    const element = document.documentElement;

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }

    setIsFullscreen(true);
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      // document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }

    setIsFullscreen(false);
  };

  const minimizeWindow = () => {
    // Implement minimize functionality if needed
  };

  const closeWindow = () => {
    // Implement close functionality if needed
  };

  return (
    <div className={classNames('main-screen', { 'fullscreen': isFullscreen })}>
      <div className="fixed top-0 left-0 w-screen h-screen bg-black flex flex-col items-center justify-center">
           {isFullscreen && <WindowWrapper children={<FullScreenContent/>} />}
           {isFullscreen ? (<></>):(<>       <div className="mb-8 center-container p-20 w-[90%] h-4/5 mx-auto border border-solid border-[#808080] text-center mt-4 flex flex-col justify-center items-center">
          <img
            src={logo}
            alt="Logo"
            className="mx-auto cursor-pointer scale-75"
            onClick={toggleFullscreen}
          />
          <p
            className="click-text text-[#BCB5FD] mt-4 text-lg font-bold cursor-pointer"
            onClick={toggleFullscreen}
          >
            Click here to open
          </p>
        </div></>)}

      </div>
    </div>
  );
};

export default MainScreen;
