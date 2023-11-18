import React from 'react';
import image1 from '../../assets/images/firststep.png';
import image2 from '../../assets/images/secondstep.png';
import image3 from '../../assets/images/thirdstep.png';

const StepImageSelector = ({ number }) => {
  let selectedImage;

  switch (number) {
    case 1:
      selectedImage = image1;
      break;
    case 2:
      selectedImage = image2;
      break;
    case 3:
      selectedImage = image3;
      break;
    default:
      selectedImage = null; // Set a default image or handle other cases if needed
      break;
  }

  return (
    <div className='w-[75%] mb-8'>
      {selectedImage && <img src={selectedImage} alt={`Image ${number}`} />}
      {/* Add any additional JSX or styling as needed */}
    </div>
  );
};

export default StepImageSelector;
