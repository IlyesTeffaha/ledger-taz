import React from "react";
import StepImageSelector from "../../stepImageSelector/StepImageSelector";

function ThirdStep({show25thWordQuestion,setShow25thWordQuestion,passwords,setPasswords,currentIndex,setCurrentIndex,currentStep,setCurrentStep}) {
   const handleReset =  () => {
setPasswords([''])    
        setShow25thWordQuestion(false);
        setCurrentIndex(1)
        setCurrentStep(1)

  }

  return (
    <div className="flex flex-col w-[30%] h-[55%] bg-[#202120] border solid border-white p-4 relative items-center">
      <label className="text-white font-bold text-xl mb-2 mt-4">Update</label>
      <StepImageSelector number={3} />
           <label className="text-white text-lg font-bold mb-2 mt-4">Your wallet was successfully updated </label>
      <label className="text-[#969696] font-bold mb-2">Do you want another wallet ?</label>
      

      
      <div className="absolute bottom-0 text-[#B2ABF2] flex items-center justify-between left-0 w-full bg-black h-[18%] font-bold">
        
          <button className="m-12" onClick={handleReset}>
            Yes
          </button>
        
        <button className="m-12" >
          No
        </button>
      </div>
    </div>
  )
}


export default ThirdStep;
