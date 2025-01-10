
import image26 from "../assets/image26.png";
import image25 from "../assets/image25.png";
import image27 from "../assets/image27.png";

function PeopleSaying() {
  return (
    <div className="mt-[10.84rem] md:mt-[15.69rem] xl:mt-[17.08rem] flex flex-col w-full mx-auto">
    <div className="flex justify-center w-full max-h-[1.19069rem] mx-auto
                    md:max-h-[1.68038rem]">
      <div className="text-[#313338] text-center font-pSans text-[1.02056rem] md:text-[1.71294rem] font-semibold leading-[2.02131rem] tracking-[0.01713rem]">
        What Are People Saying
      </div>
    </div>
    <div className="mt-[2.08rem] md:mt-[6.42rem] xl:mt-[4.72rem] w-auto mx-auto">
      <div className="flex flex-row space-x-[1.45rem] md:space-x-[5rem] justify-center">
        <img
          src={image26}
          alt="eurekaLogo"
          className="w-[20%] h-auto object-contain"
        />
        <img
          src={image25}
          alt="thamesLogo"
          className="w-[25%] h-auto object-contain"
        />
        <img
          src={image27}
          alt="tunvay"
          className="w-[20%] h-auto object-contain"
        />
      </div>
    </div>
  </div>
  
  );
}

export default PeopleSaying;
