import React, { useEffect, useState } from "react";
import backgroundImage from "../../assets/images/background.png";
import spinner from "../../assets/gifs/spinner.gif";
import logoImage from "../../assets/images/buttons.png";
import redCircleImage from "../../assets/images/red.png";
import LeftText from "../../assets/images/LeftText.png";
import shoppingCart from "../../assets/images/shoppingCart.png";

const BackgroundView = ({ children }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkFullScreen = () => {
    setIsFullScreen(!!document.fullscreenElement);
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", checkFullScreen);
    simulateLoading();
    animateImagesOnLoad();
    return () => {
      document.removeEventListener("fullscreenchange", checkFullScreen);
    };
  }, []);

  const simulateLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 9000);
  };

  const animateImagesOnLoad = () => {
    setTimeout(() => {
      const leftTextImage = document.getElementById("leftText");
      const shoppingCartImage = document.getElementById("shoppingCart");

      if (leftTextImage) {
        leftTextImage.style.transition = "transform 1s ease-in-out";
        leftTextImage.style.transform = "translateX(0)";
      }

      if (shoppingCartImage) {
        setTimeout(() => {
          shoppingCartImage.style.transition = "transform 1s ease-in-out";
          shoppingCartImage.style.transform = "translateX(0)";
        }, 500);
      }
    }, 500);
  };

  return (
    <div className="relative w-screen h-[99%] overflow-hidden bg-black">
      <div className="p-4 bg-[#111413] w-screen text-white flex justify-between items-center">
        <span className="text-lg px-3 py-1"></span>

        <div className="flex w-[40%] justify-end items-center">
          <img src={redCircleImage} alt="Logo" className="w-6 h-6 mt-1" />
          <span className="text-[#B90606] px-1">Synchronization error</span>
          <span className="text-[#B90606] text-md underline px-3">Refresh</span>
          <img src={logoImage} alt="Logo" className="w-[25%] h-8" />
        </div>
      </div>

      <div className="p-0 w-screen h-[13%] bg-[#1C1D1F] text-white flex justify-between items-center">
        <span className="text-lg"></span>

        <div className="flex w-full justify-between items-center w-screen">
          <img
            id="leftText"
            src={LeftText}
            alt="Left Text"
            className="w-[37.5%] h-[9.5%] transform translate-x-full"
          />
          <img
            id="shoppingCart"
            src={shoppingCart}
            alt="Shopping Cart"
            className="w-[37.5%] h-[7.5%] transform translate-x-full"
          />
        </div>
      </div>

      {isLoading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <img src={spinner} alt="Spinner" className="w-10 h-10" />
        </div>
      )}
      <div className="">
        <img
          src={backgroundImage}
          alt="Background"
          className={`absolute  w-full h-full ${
            isFullScreen ? "object-cover" : "w-90  h-auto"
          }`}
          style={{ objectPosition: "center" }}
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 bg-black bg-opacity-50 text-white flex justify-center">
        {/* Place your buttons or elements inside this div */}
        {children}
      </div>
    </div>
  );
};

export default BackgroundView;
