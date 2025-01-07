import { useState} from 'react';

// eslint-disable-next-line react/prop-types
const ContactForm = ({ isVisible, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 700); // Match the duration of the sliding animation (700ms)
  };

  return (
    <div className={`fixed bottom-5 right-5 z-50 w-64 ${isVisible || isClosing ? 'block' : 'hidden'}`}>
      <form
        id="form"
        className={`bg-white border border-gray-300 p-4 shadow-md mt-4 transition-transform duration-700 ease-in-out ${
          isVisible && !isClosing
            ? 'animate-slideIn'
            : 'animate-slideOut'
        }`}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute text-xs font-pSans text-gray-400"
        >
          X
        </button>
        <h3 className="text-xs font-bold mb-2 text-center font-title text-gray-400">Tell Us About Your Need</h3>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full h-9 border border-gray-300 rounded mb-2 placeholder:text-xs placeholder:pl-3 placeholder:-translate-y-0.5"
          placeholder='Name'
        />
        <input
          type="text"
          id="contact"
          name="contact"
          required
          className="w-full p-2 h-9 border border-gray-300 rounded mb-2 placeholder:text-xs placeholder:pl-1 placeholder:-translate-y-0.5"
          placeholder='Contact'
        />
        <input
          type="text"
          id="service"
          name="service"
          required
          className="w-full p-2 h-9 border border-gray-300 rounded mb-2 placeholder:text-xs placeholder:pl-1 placeholder:-translate-y-0.5"
          placeholder='Service'
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
        >
          Submit
        </button>
      </form>
      <style >{`
        @keyframes slideIn {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideOut {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(100%);
            opacity: 0;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.7s ease-in-out;
        }
        .animate-slideOut {
          animation: slideOut 0.7s ease-in-out;
        }
      `}</style>
    </div>
  );
};

const HoverableDiv = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsFormVisible(true);
  };

  return (
    <div
      className=" flex flex-col items-center justify-center mx-auto bg-[#ecf0f1] 
      mt-[9.83rem]  md:mt-[16.99rem] md:w-[31.25rem] md:h-[12.5rem] 
      w-[12.9375rem] h-[2.43594rem] "
      onMouseEnter={handleMouseEnter}
    >
      <div className="text-center  font-semibold font-pSans 
       leading-[1.60169rem] tracking-[0.01356rem] text-[1.35738rem]
       md:leading-[2.7315rem] md:tracking-[0.02313rem] md:text-[2.31481rem]
       xl:leading-[3.07294rem] xl:tracking-[0.02606rem] xl:text-[2.60419rem]

      ">The Perfect Match!!</div>
      <div className="text-center font-medium lowercase text-[#ff8312] font-pSans
       text-[1.05425rem] leading-[1.24406rem] tracking-[0.01056rem]
       md:text-[1.71294rem] md:leading-[2.02131rem] md:tracking-[0.01713rem] 
       xl:text-[1.92706rem] xl:leading-[2.27394rem] xl:tracking-[0.01925rem]               
      ">are you the one?</div>
      <ContactForm isVisible={isFormVisible} onClose={() => setIsFormVisible(false)} />
    </div>
  );
};

export default HoverableDiv;