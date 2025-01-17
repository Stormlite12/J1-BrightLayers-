import { useState, useEffect, useRef } from "react";
import founderImg from "../assets/founderImg.png";

function FounderBio() {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Reveal the text when the target div is visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the div is in view
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row w-full justify-center overflow-visible lg:space-x-[3.23rem]">
      <div className="lg:flex lg:flex-row lg:space-x-[2.08rem] ">
        <div className="relative w-full overflow-visible " ref={targetRef}>
          <img
            className="object-cover lg:hidden mx-auto"
            src={founderImg}
            alt=""
          />
          <img
            className="object-cover h-auto hidden lg:flex lg:max-w-[16.85188rem] mac:max-w-[21.06481rem] xl:max-w-[23.69794rem]"
            src={founderImg}
            alt=""
          />
        </div>
        <div className="mt-[3rem] lg:mt-0 relative">
          <div
            className="w-[11.4375rem] h-[1.625rem] text-[#565656] font-pSans text-[1.4626rem] font-semibold leading-[99%] tracking-[-0.0146rem]
                          xl:w-[13.4375rem] xl:h-[5.15625rem] xl:text-[2.5rem] xl:tracking-[-0.025rem]
                          mac:w-[11.94444rem] mac:h-[4.58331rem] mac:text-[2.22225rem] mac:tracking-[-0.02225rem]
                          lg:w-[9.55556rem] lg:h-[3.66669rem] lg:text-[1.77775rem] lg:tracking-[-0.01775rem]
                          "
          >
            Pooja Bhadoriya
          </div>
          <div
            className="mt-[0.56rem] lg:mt-0 flex w-[10.5625rem] h-[1.1875rem] flex-col justify-center text-[#727272] font-title 
          text-[0.64288rem] font-normal leading-[normal] 
          lg:w-[9.88888rem] lg:h-[1.44444rem] lg:text-[0.66669rem]
          mac:w-[12.36113rem] mac:h-[1.80556rem] mac:text-[0.83331rem]
          xl:w-[13.90625rem] xl:h-[2.03125rem] xl:text-[0.9375rem]"
          >
            Founder & Creative Director
          </div>
          <p
            className="absolute bottom-0 hidden lg:block lg:mt-0 mt-[2.4375rem] w-[13.5rem] h-[2.6875rem] text-[#546660] font-archivo text-[13.355px] font-normal leading-[130.238%] tracking-[0.134px] float-right lg:float-none
          mac:w-[12.36113rem] mac:h-[7.36113rem] mac:text-[1.26819rem] mac:tracking-[0.01269rem]
          lg:w-[9.88888rem] lg:h-[5.88888rem] lg:text-[1.01456rem] lg:leading-[130.238%] lg:tracking-[0.01013rem]
          xl:w-[13.90625rem] xl:h-[8.2813rem] xl:text-[1.42669rem] xl:tracking-[0.01425rem] 
          
          "
          >
            &quot;Oh also, she&apos;s really excited to meet you, fellow
            business-owner.&quot;
          </p>
        </div>
      </div>

      <div
        className={`mt-[2.13rem] lg:mt-0 mx-auto transition-opacity duration-2000 ease-in-out ${
          isVisible ? "opacity-100" : "md:opacity-0"
        }`}
      >
        <p
          className={`w-auto h-[10.28625rem] text-[#727171] font-title text-[0.69644rem] font-normal leading-[147%] tracking-[0.00694rem]
                lg:w-[26.66669rem] lg:h-[17.03706rem] lg:text-[clamp(0.88888rem,1.5vw,1.66669rem)] lg:tracking-[0.00888rem] lg:leading-[137%] 
                mac:w-[33.33338rem] mac:h-[21.29631rem] mac:tracking-[0.01113rem] 
                xl:w-[37.5rem] xl:h-[23.95831rem] xl:tracking-[0.0125rem]`}
        >
          Full time overthinker and part time Founder, Pooja launched The Bright
          Layers in 2019 as a tribute to her experience of working in social
          media - be it as a designer, writer, creative director, or just as a
          consultant to her uncle who really wanted his mithai business to go
          viral on Instagram. <br /> <br />
          As a business owner herself, she understands the passion that fuels a
          brand. Her goal is to bring that passion to the forefront, and to make
          businesses feel more human.
        </p>

        <p className="lg:hidden mt-[2.4375rem] w-[13.5rem] h-[2.6875rem] text-[#546660] font-archivo text-[13.355px] font-normal leading-[130.238%] tracking-[0.134px] float-right">
          &quot;Oh also, she&apos;s really excited to meet you, fellow
          business-owner.&quot;
        </p>
      </div>
    </div>
  );
}

export default FounderBio;
