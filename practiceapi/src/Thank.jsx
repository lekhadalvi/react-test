import React from 'react'
import img from "./assets/6963.jpg";

const Thank = () => {
  return (
    <div className=" flex flex-col items-center justify-center text-center p-10">
      
      <img
        src={img}
        alt="Thank you"
        className=" mb-6"
      />

      <div className="text-lg font-medium text-gray-800">
        Thanks! Our team will get in touch with you shortly.
      </div>

      <p className="text-sm text-gray-600 mt-2">
        We appreciate your interest.
      </p>
    </div>
  );
};

export default Thank;
