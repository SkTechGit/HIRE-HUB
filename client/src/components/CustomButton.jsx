import React from "react";

const CustomButton = ({ title, containerStyles, iconRight, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type || "button"}
<<<<<<< HEAD
      className={`inline-flex items-center justify-center font-semibold transition-all duration-300 ${containerStyles}`}
=======
      className={`inline-flex items-center ${containerStyles}`}
>>>>>>> e3dfdbd9b3d169d75b412796dbf97a28f063ad89
    >
      {title}

      {iconRight && <div className='ml-2'>{iconRight}</div>}
    </button>
  );
};

export default CustomButton;
