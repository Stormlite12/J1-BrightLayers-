import founderImgMobile from "../assets/founderMobile.png";
import founderImg from "../assets/founderImg.png";

function FounderBio() {
  return (
    <div className="flex flex-col w-full lg:max-w-[80rem] mx-auto overflow-visible">
      <div>
        <div className="w-full">
          <img
            className="object-contain lg:hidden mx-auto"
            src={founderImgMobile}
            alt=""
          />
          <img
            className="object-contain h-auto hidden lg:flex"
            src={founderImg}
            alt=""
          />
        </div>
        <div className="mt-[3rem] lg:mt-0">
          <div className="w-[11.4375rem] h-[1.625rem] text-[#565656] font-pSans text-[1.4626rem] font-semibold leading-[99%] tracking-[-0.0146rem]">
            Pooja Bhadoriya
          </div>
          <div className="mt-[0.56rem] lg:mt-0 flex w-[10.5625rem] h-[1.1875rem] flex-col justify-center text-[#727272] font-title text-xs font-normal leading-[normal]">
            Founder & Creative Director
          </div>
          
        </div>


      </div>

      <div className="mt-[2.13rem] lg:mt-0">
        <p className="max-w-[23.3125rem] h-50 text-[#727171] font-title text-[0.8125rem] font-normal leading-[147%] tracking-[0.13px]">
          Full time overthinker and part time Founder, Pooja launched The Bright
          Layers in 2019 as a tribute to her experience of working in social
          media - be it as a designer, writer, creative director, or just as a
          consultant to her uncle who really wanted his mithai business to go
          viral on Instagram. <br /> <br />As a business owner herself, she understands the
          passion that fuels a brand. Her goal is to bring that passion to the
          forefront, and to make businesses feel more human.
        </p>

        <p className="lg:hidden mt-[2.4375rem] w-[13.5rem] h-[2.6875rem] text-[#546660] font-family:Archivo text-[13.355px] font-normal leading-[130.238%] tracking-[0.134px] float-right">&quot;Oh also, she&apos;s really excited to meet you, fellow business-owner.&quot;</p>
      </div>
    </div>
  );
}

export default FounderBio;

// {/* <div className="flex flex-col lg:flex-row items-center mt-[3.11rem] lg:mt-[6.56rem] mx-auto lg:max-w-[60rem] mac:max-w-[80rem] "> {/*md:mr-[20rem]*/}

//         <div className="w-full lg:max-w-[16.85188rem] xl:max-w-[22.76475rem] ">
//           <img
//             className="object-fill lg:hidden mx-auto"
//             src={founderImgMobile}
//             alt=""
//           />
//           <img
//                                                               // md:ml-[1.5rem] xl:ml-[2.5rem] md:mr-[3rem] xl:mr-[6rem]
//             className="object-fill h-auto hidden lg:flex"
//             src={founderImg} alt="" />
//         </div>

//         <div className="lg:ml-[1.68rem] lg:mr-[2.67rem]  w-[19.98319rem] lg:w-[10.757rem] mac:w-[11.94406rem] xl:w-[12.90838rem]  lg:flex flex-col lg:h-[21.602rem] mac:h-[23.98581rem] xl:h-[24.77rem] justify-between mt-[3rem] lg:mt-0">
//             <div className="">
//             <p className="mb-[0.48rem] font-pSans font-semibold text-left text-[#565656]
//             w-[19.98319rem] h-[1.39294rem] text-[1.25369rem] leading-[1.24119rem] tracking-[-0.01256rem]
//              lg:w-[10.757rem] lg:h-[4.16069rem] lg:text-[2.22225rem] lg:leading-[2.2175rem] lg:tracking-[-0.02238rem]
//              mac:w-[11.94406rem] mac:h-[4.8831rem] mac:text-[2.2rem] mac:leading-[2.2rem] mac:tracking-[-0.02225rem]
//              xl:w-[12.90838rem] xl:h-[4.99281rem] xl:text-[2.42075rem] xl:leading-[2.39656rem] xl:tracking-[-0.02419rem]">
//               Pooja Bhadoriya
//             </p>
//             <p className="w-[19.98319rem] h-[1.01794rem] font-title text-[#727272]
//             text-[0.64288rem] font-normal leading-normal text-left
//             lg:w-[9.33944rem] lg:h-[1.63906rem] lg:text-[0.7565rem]
//             mac:w-[10.37006rem] mac:h-[1.81994rem] mac:text-[0.84rem]
//             xl:w-[11.20725rem] xl:h-[1.96688rem] xl:text-[0.90781rem]">
//               Founder & Creative Director
//             </p>
//             </div>

//             <div>
//             <p className="hidden text-[#546660] lg:block font-normal
//             lg:w-[11.13225rem] lg:h-[5.75775rem] lg:text-[1.15125rem]  lg:leading-[1.39938rem] lg:tracking-[0.0115rem]
//             mac:w-[12.36069rem] mac:h-[6.39313rem] mac:text-[1.27825rem]  mac:leading-[1.47825rem] mac:tracking-[0.01281rem]
//             xl:w-[13.35869rem] xl:h-[6.90925rem] xl:text-[1.3815rem]  xl:leading-[1.4919rem] xl:tracking-[0.01381rem]">
//             {`"`}Oh also, she&apos;s really excited to meet you, fellow business-owner.{`"`}
//             </p>
//             </div>

//         </div>

//         <div className="w-[19.98319rem] h-[14.68rem]
//                         lg:w-[30.01956rem] lg:h-[19.3325rem]
//                         mac:w-[33.33225rem] mac:h-[21.46588rem]
//                         xl:w-[34.02338rem] xl:h-[23.199rem]
//                         mt-[1.82rem] md:mt-0
//           ">
//             {/* lg:w-[37.50013rem] lg:h-[24.15rem] */}
//             <div className="max-w-[120rem] w-[19.98319rem] h-[10.28625rem] font-title text-[#727171] text-[0.69644rem] font-normal leading-[1.02381rem] tracking-[0.00694rem]
//             lg:w-[30.50013rem] lg:h-[19.3325rem] lg:text-[1.09269rem] lg:leading-[1.497rem] lg:tracking-[0.01094rem]
//             mac:w-[33.33225rem] mac:h-[21.46588rem] mac:text-[1.21331rem] mac:leading-[1.66219rem ] mac:tracking-[0.01213rem]
//             xl:w-[40rem] xl:h-[28.97994rem] xl:text-[1.338rem] xl:leading-[1.74406rem] xl:tracking-[0.0238rem]">
//             {/* lg:w-[37.50013rem] lg:h-[24.15rem] lg:text-[1.365rem] lg:leading-[1.87006rem] lg:tracking-[0.01363rem] */}

//              Full time overthinker and part time Founder, Pooja launched The Bright
//               Layers in 2019 as a tribute to her experience of working in social
//               media - be it as a designer, writer, creative director, or just as a
//               consultant to her uncle who really wanted his mithai business to go
//               viral on Instagram. <br /> <br /> As a business owner herself, she understands the
//               passion that fuels a brand. Her goal is to bring that passion to the
//               forefront, and to make businesses feel more human.
//             </div>
//             <div className="ml-auto lg:hidden text-[#546660] text-[0.71544rem] w-[11.572rem] h-[2.30369rem] font-normal leading-[0.93181rem] tracking-[0.00713rem] ">
//             {`"`}Oh also, she&apos;s really excited to meet you, fellow business-owner.{`"`}
//             </div>
//         </div>
//       </div>  */}
