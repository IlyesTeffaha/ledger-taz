import React from 'react'
import StepImageSelector from '../../stepImageSelector/StepImageSelector'

import spinner from "../../../assets/gifs/spinner.gif";

function SecondStep({show25thWordQuestion,setShow25thWordQuestion,passwords,setPasswords,currentIndex,setCurrentIndex,currentStep,setCurrentStep}) {

   const handleReset =  () => {
setPasswords([''])    
        setShow25thWordQuestion(false);
        setCurrentIndex(1)
        setCurrentStep(1)

  }

  return (
    <div className="flex flex-col w-[30%] h-[55%] bg-[#202120] border solid border-white p-4 relative items-center">
      <label className="text-white font-bold text-xl mb-2 mt-4">Update</label>
      <StepImageSelector number={2} />
       <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <img src={spinner} alt="Spinner" className="w-10 h-10" />
        </div>
      <div className="absolute h-[20%]  w-1/2 bottom-0 left-0  ml-4">
        <button
          className={`m-1 w-[40%] h-[50%] rounded text-sm bg-[#B2ABF2]`}
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default SecondStep