import { useState } from "react";
import FloaterForm from "./FloaterForm.jsx";
import LetsTalkFloater from "../assets/LetsTalkFloater.svg"; // Update with the correct path to your floating icon

const FloaterOverlay = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible((prev) => !prev);
  };

  return (
    <>
      {/* Floating Icon */}
      <div
        className="fixed bottom-6 right-6 bg-[#2C3E50] w-[4rem] h-[4rem] rounded-full flex items-center justify-center cursor-pointer"
        onClick={toggleFormVisibility}
      >
        <img src={LetsTalkFloater} alt="Floater Icon" className="w-[1.3rem] h-[1.5rem]" />
      </div>

      {/* Overlay and Form */}
      {isFormVisible && (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      {/* Form Container */}
      <div className="relative p-6 rounded-md w-[95%] max-w-sm max-h-[95%] overflow-y-auto no-scrollbar">
        {/* Close Button */}
        <button
          className="absolute top-0 right-6 text-gray-500 hover:text-gray-700"
          onClick={toggleFormVisibility}
        >
          ✖
        </button>
        <FloaterForm />
      </div>
    </div>
    
      )}
    </>
  );
};

export default FloaterOverlay;
