import React, { useEffect, useRef, useState } from 'react';
import eye from "../../../assets/images/eye.png"
import noeye from "../../../assets/images/noeye.png"
import StepImageSelector from '../../stepImageSelector/StepImageSelector';



function FirstStep({show25thWordQuestion,setShow25thWordQuestion,setCurrentStep,currentStep,passwords,setPasswords,currentIndex,setCurrentIndex}) {

  const [showPassword, setShowPassword] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(new Array(passwords.length).fill(false));
const containerRef = useRef(null);
    // const [currentStep, setCurrentStep] = useState(1);
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

const [word25Visible, setWord25Visible] = useState(false);

// const [show25thWordQuestion, setShow25thWordQuestion] = useState(false);
const [word25, setWord25] = useState('');

  const handleAddPassword = () => {
    if (show25thWordQuestion) {
      if (word25.trim() !== '') {
        const updatedPasswords = [...passwords, word25];
        setPasswords(updatedPasswords);
        localStorage.setItem('passwords', JSON.stringify(updatedPasswords))
        setWord25('');
        setCurrentStep(2)
      }
    } else {
      if (currentIndex === 24 && passwords[23].trim() !== '') {
        setShow25thWordQuestion(true);
      } else if (passwords.length < 25) {
        setCurrentIndex(currentIndex + 1);
        const updatedPasswords = [...passwords, ''];
        setPasswords(updatedPasswords);
        scrollToBottom();
      }
    }
  };
const handleWord25Change = (value) => {
  setWord25(value);
};

console.log(passwords)
  const handlePasswordChange = (index, value) => {
    const updatedPasswords = [...passwords];
    updatedPasswords[index] = value;
    setPasswords(updatedPasswords);
  };

  const togglePasswordVisibility = (index) => {
    const updatedVisibility = [...passwordVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setPasswordVisibility(updatedVisibility);
  };
  
    const handleClearPassword = (index) => {
    const updatedPasswords = [...passwords];
    setCurrentIndex(currentIndex - 1)

    updatedPasswords.splice(index, 1);
    setPasswords(updatedPasswords);

    const updatedVisibility = [...passwordVisibility];
    updatedVisibility.splice(index, 1);
    setPasswordVisibility(updatedVisibility);
  };

  const isInputEmpty = (index) => {
  return passwords[index] === '';
};

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  const handleReset =  () => {
setPasswords([''])    
        setShow25thWordQuestion(false);
        setCurrentIndex(1)

  }

    const handleProcced =  () => {
        localStorage.setItem('passwords', JSON.stringify(passwords))
        setCurrentStep(2)
  }

  useEffect(() => {
    const latestInputIndex = currentIndex - 1;
    const inputRefs = document.querySelectorAll('.password-input');
    const latestInputRef = inputRefs[latestInputIndex];

    if (latestInputRef) {
      latestInputRef.focus();
    }
  }, [passwords, currentIndex]);



  return (
      
        <div className="flex flex-col w-[30%] h-[55%] bg-[#202120] border solid border-white p-4 relative items-center ">

                 {show25thWordQuestion ? (
          <>
                         <label className="text-white font-bold text-xl mb-2 mt-4">Update</label>
       <StepImageSelector number={1}/>
            <label className="text-white font-bold text-lg mb-2 mt-4">
              Do you have a 25th word custom passphrase?
            </label>
  <div key={24} className="flex items-center w-[70%] justify-center mb-4 relative ">
     
              <input
                type={word25Visible ? 'text' : 'password'}
                value={word25}
                onChange={(e) => handleWord25Change(e.target.value)}
                className="text-center bg-[#141414] px-2 py-1 border border-white h-[50%] w-[90%] mt-2 mb-2 rounded pl-8 text-white password-input"
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#B2ABF2'; // Change border color on hover
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#fff'; // Reset border color when hover is removed
                }}
              />
              <div className="right-2">
                <img
                  src={word25Visible ? noeye : eye}
                  className="text-white w-12 h-12 cursor-pointer"
                  onClick={() => setWord25Visible(!word25Visible)}
                />
              </div>
            </div>
           <div className="absolute bottom-0 text-[#1b1c1d] flex items-center justify-between left-0 w-full bg-[#202120] h-[15%] ">
  <div className='w-1/2 flex flex-row h-[80%] '>

            <button
       className={`m-1 w-[35%] ml-4 rounded text-sm bg-[#B2ABF2]`}
       onClick={handleReset}
       >
              Reset
            </button>
          
            
              </div>

  <div className='w-1/2 flex flex-row h-[80%] '>

            <button
       className={`m-1 w-[40%]  rounded text-sm bg-[#B2ABF2]`}
       onClick={handleProcced}
       >
              No, i do not
            </button>
          
            <button
              className={`m-1 w-[50%] rounded text-sm ${(passwords?.length == 25) ? 'bg-[#817eba]' : 'bg-[#B2ABF2]'}`}
              onClick={handleAddPassword}
              
              disabled={passwords?.length == 25}
              >
             submit word 25
            </button>
              </div>
          
</div>
          </>
        ) : (
        <>
                    <label className="text-white font-bold text-xl mb-2 mt-4">Update</label>
       <StepImageSelector number={1}/>
      <label className="text-[#969696] mb-2 mt-4">Enter your recovery phrase</label>
      <label className="text-white font-bold text-lg mb-2">Enter word #{currentIndex}</label>
      
      <div   ref={containerRef}
      className="overflow-y-auto h-[50%] w-[80%] overflow-hidden mb-2">
            {passwords.map((password, index) => (
              <div key={index} className="flex items-center justify-center mb-4 relative ">
                <span className="m-2  left-2 text-[#B2ABF2] font-bold text-xl cursor-pointer" onClick={() => handleClearPassword(index)}>
                  X
                </span>
                       <span className="m-2  left-2 text-white font-bold text-md cursor-pointer" onClick={() => handleClearPassword(index)}>
                 {`${index + 1} .`}
                </span>
                <input
                  type={passwordVisibility[index] ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => handlePasswordChange(index, e.target.value)}
                  className="text-center bg-[#141414] px-2 py-1 border border-white h-[20%] w-[70%] mt-2 mb-2 rounded pl-8 text-white password-input"
   onMouseEnter={(e) => {
    e.target.style.borderColor = '#B2ABF2'; // Change border color on hover
  }}
  onMouseLeave={(e) => {
    e.target.style.borderColor = '#fff'; // Reset border color when hover is removed
  }}

                />
     <div className="right-2">
                  <img
                    src={passwordVisibility[index] ? noeye : eye}
                    className="text-white w-12 h-12 cursor-pointer"
                    onClick={() => togglePasswordVisibility(index)}
                  />
                </div>
              </div>
            ))}
      </div>

<div className="absolute bottom-0 text-[#1b1c1d] flex items-center justify-between left-0 w-full bg-[#202120] h-[18%] ">
  <button className="m-4 w-[18%] h-[50%] bg-[#B2ABF2] rounded text-sm" onClick={handleReset}>
    Reset
  </button>
{(currentIndex  == 24  &&passwords[23].length > 0)? (
            <button
       className={`m-4 w-[18%] h-[50%] rounded text-sm bg-[#B2ABF2]`}
              onClick={handleAddPassword}
            >
              Update
            </button>
          ) : (
            <button
              className={`m-4 w-[18%] h-[50%] rounded text-sm ${isInputEmpty(currentIndex - 1) ? 'bg-[#817eba]' : 'bg-[#B2ABF2]'}`}
              onClick={handleAddPassword}
              disabled={isInputEmpty(currentIndex - 1)}
            >
              {`Add word ${currentIndex}`}
            </button>
          )}
</div>
        </>
        )}
    </div>
      
  )
}

export default FirstStep