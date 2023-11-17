import PerfectScrollbar from 'perfect-scrollbar';
import React, { useEffect, useRef, useState } from 'react';
import 'perfect-scrollbar/css/perfect-scrollbar.css'; // Import the CSS


const CustomStepper = ({ onCancel }) => {
  const [passwords, setPasswords] = useState(['']); // State to manage entered passwords
  const [currentIndex, setCurrentIndex] = useState(1); // State to manage entered passwords

  const handleAddPassword = () => {
    setCurrentIndex(currentIndex + 1)
    if (passwords.length < 24) {
      const updatedPasswords = [...passwords, '']; // Add an empty string for a new password input
      setPasswords(updatedPasswords);
    }
  };

  const handlePasswordChange = (index, value) => {
    const updatedPasswords = [...passwords];
    updatedPasswords[index] = value; // Update the corresponding password in the array
    setPasswords(updatedPasswords);
  };

    const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

    const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const ps = new PerfectScrollbar(container, {
        wheelSpeed: 2,
        wheelPropagation: true,
        minScrollbarLength: 20,
      });

      return () => {
        ps.destroy();
      };
    }
  }, []);




  return (

    <div className='w-full  h-[120%] flex items-center justify-center'>
      {currentStep === 1 && (
     <div className="flex flex-col w-[30%] h-[30%] bg-[#1b1c1d] border solid border-white p-4 relative items-center ">
      <label className="text-white mb-2">Enter your recovery phrase</label>
      <label className="text-white mb-2">Enter word #{currentIndex}</label>
      
      <div   ref={containerRef}
      className="overflow-y-auto max-h-[60%] overflow-hidden">
        {passwords.map((password, index) => (
          <div key={index} className="flex items-center justify-center mb-2 overflow-hidden">
            <input
              type="password"
              value={password}
              onChange={(e) => handlePasswordChange(index, e.target.value)}
              className="bg-gray-300 px-2 py-1 rounded"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 text-[#B2ABF2] flex items-center justify-center left-0 w-full bg-black h-[18%] font-bold">
        {passwords.length < 24 && (
          <button className="m-4" onClick={handleAddPassword}>
            Add
          </button>
        )}
        <button className="m-4" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
      )}

      {currentStep === 2 && (
        <div className='flex flex-col w-[30%] h-[30%] bg-[#1b1c1d]  border solid border-white p-4'>
          {/* Second step content */}
          <button onClick={handlePrev} className="bg-blue-500 text-white px-2 py-1 rounded mt-2">
            Previous
          </button>
          <button onClick={handleNext} className="bg-blue-500 text-white px-2 py-1 rounded mt-2">
            Next
          </button>
        </div>
      )}

      {currentStep === 3 && (
        <div className='flex flex-col w-[30%] h-[30%] bg-[#1b1c1d]  border solid border-white p-4'>
          {/* Third step content */}
          <button onClick={handlePrev} className="bg-blue-500 text-white px-2 py-1 rounded mt-2">
            Previous
          </button>
          {/* Possibly a 'Finish' button here */}
        </div>
      )}
    </div>
  );
};

export default CustomStepper;
