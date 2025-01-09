
import image26 from "../assets/image26.png";
import image25 from "../assets/image25.png";
import image27 from "../assets/image27.png";

function PeopleSaying() {
  return (
    <div className="mt-[10.84rem] md:mt-[15.69rem] xl:mt-[17.08rem] flex flex-col">
      <div className="flex justify-center w-[15.81875rem] h-[1.19069rem] mx-auto
                      md:w-[25.92594rem] md:h-[1.68038rem]">
        <div className="text-[#313338] text-center font-pSans text-[1.02056rem] md:text-[1.71294rem] font-semibold leading-[2.02131rem] tracking-[0.01713rem]">
          What Are People Saying
        </div>
      </div>
      <div className="mt-[2.08rem] md:mt-[6.42rem] xl:mt-[4.72rem] mx-auto">
        <div className="flex flex-row space-x-[1.45rem] md:space-x-[5rem] w-auto ">
          <img
            src={image26}
            alt="eurekaLogo"
            className="w-[6.01344rem] h-[3.52513rem]
                      md:w-[7.2685rem]  md:h-[5.85188rem]
                       lg:w-[12.2685rem] lg:h-[6.85188rem]
                       xl:w-[13.80206rem] xl:h-[7.70831rem]"
          />
          <img
            src={image25}
            alt="thamesLogo"
            className="w-[7.4245rem] h-[2.00113rem] mt-3 md:mt-6
                      md:w-[10.55188rem] md:h-[2.79444rem]
                      lg:w-[11.85188rem] lg:h-[3.19444rem]
                      xl:w-[13.33331rem] xl:h-[3.59375rem]"
          />
          <img
            src={image27}
            alt="tunvay"
            className="w-[4.66319rem] h-[3.75838rem] -mt-3 md:-mt-6
                      md:w-[9.83331rem] md:h-[6.68519rem]
                       lg:w-[10.83331rem] lg:h-[7.68519rem]
                       xl:w-[12.1875rem] xl:h-[8.64581rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default PeopleSaying;
