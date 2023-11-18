import React, { useEffect, useRef, useState } from "react";
import eye from "../../assets/images/eye.png";
import noeye from "../../assets/images/noeye.png";
import StepImageSelector from "../stepImageSelector/StepImageSelector";
import SecondStep from "./secondStep/SecondStep";
import FirstStep from "./firstStep/FirstStep";
import ThirdStep from "./thirdStep/ThirdStep";

const CustomStepper = ({ onCancel }) => {
  const [passwords, setPasswords] = useState([""]); // State to manage entered passwords
  const [currentIndex, setCurrentIndex] = useState(1); // State to manage entered passwords

  const [currentStep, setCurrentStep] = useState(1);

  const [show25thWordQuestion, setShow25thWordQuestion] = useState(false);


  useEffect(() => {
    let timer;
    if (currentStep === 2) {
      timer = setTimeout(() => {
        setCurrentStep(3);
      }, 5000); 
    }
    return () => clearTimeout(timer); 
  }, [currentStep]);



  return (
    <div
      className={`w-full h-[${
        show25thWordQuestion ? "70%" : "120%"
      }] flex items-center justify-center`}>
      {currentStep === 1 && (
        <FirstStep
          show25thWordQuestion={show25thWordQuestion}
          setShow25thWordQuestion={setShow25thWordQuestion}
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          passwords={passwords}
          setPasswords={setPasswords}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}

      {currentStep === 2 && <SecondStep
               show25thWordQuestion={show25thWordQuestion}
          setShow25thWordQuestion={setShow25thWordQuestion}
          passwords={passwords}
          setPasswords={setPasswords}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        setCurrentStep={setCurrentStep}
          currentStep={currentStep}

      />}

      {currentStep === 3 && <ThirdStep 
      
        show25thWordQuestion={show25thWordQuestion}
          setShow25thWordQuestion={setShow25thWordQuestion}
          passwords={passwords}
          setPasswords={setPasswords}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        setCurrentStep={setCurrentStep}
          currentStep={currentStep}/>}
    </div>
  );
};

export default CustomStepper;
