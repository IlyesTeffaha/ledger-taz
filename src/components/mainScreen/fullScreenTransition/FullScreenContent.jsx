import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gif from '../../../assets/gifs/logo-animation.gif';

const FullScreenContent = () => {
  const navigate = useNavigate();
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (animationCompleted) {
      timeoutId = setTimeout(() => {
        navigate('/main'); // Replace with your desired redirect link
      }, 500); // 6 seconds delay after GIF loads and animation completes
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [animationCompleted, navigate]);

  return (
    <div className="bg-black flex flex-col">
      <div className="flex flex-col items-center justify-center flex-1">
        <img
          src={gif}
          alt="GIF"
          className="mx-auto"
          style={{ opacity: animationCompleted ? '0' : '1' }}
          onLoad={() => {
            setTimeout(() => {
              setAnimationCompleted(true);
            }, 6000); // 6 seconds delay after GIF loads to trigger animation completion
          }}
        />
      </div>
    </div>
  );
};

export default FullScreenContent;
