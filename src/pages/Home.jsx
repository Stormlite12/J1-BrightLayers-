import Navbar from "../components/Navbar.jsx";
import home1 from "../assets/home1.jpg";
import image from "../assets/image.png";
import rectangleMobile from "../assets/rectangleMobile.png";
import rectangle from "../assets/rectangle.png";
import DropDown from "../functions/DropDown.jsx";
import { AnimatedLogo } from "../functions/AnimatedLogo.jsx";
import ContactForm from "../pages/ContactForm.jsx";
import Features from "../components/Features.jsx";
import PeopleSaying from "../components/PeopleSaying.jsx";
import InfiniteCarousel from "../components/InfiniteCarousel.jsx";
import founderImg from '../assets/founderImg.png'
import FeaturesPC from '../components/FeaturesPC.jsx';
import founderImgMobile from "../assets/founderMobile.png";
import BlogSpot from "../components/BlogSpot.jsx";
import Footer from '../components/Footer.jsx'

function Home() {
  return (
    <div className="w-full h-auto bg-[#ecf0f1] z-[-1]">
      <div className="w-full h-[7.4rem]  flex justify-center items-center md:justify-between
                      md:h-[8.52]">
        <Navbar />
      </div>

      <section className="flex w-full justify-center mt-[1.36rem] md:mt-[6.94rem] xl:mt-[7.81rem]">
        <div className="w-[20.03675rem] h-[7.17894rem] text-center mb-[7rem]
                        md:w-[56.25rem] md:h-[16.38888rem]
                        xl:w-[63.28125rem] xl:h-[18.4375rem]">
          <span
            className="text-[#303338] text-[0.96431rem] font-semibold leading-[1.5815rem] tracking-[0.00963rem] font-pSans 
                      md:text-[2.54631rem] md:font-medium md:leading-[3.00463rem] md:tracking-[0.02544rem] 
                      xl:text-[2.86456rem] xl:leading-[3.38019rem] xl:tracking-[0.02863rem] "
          >
            We are Bright Layers, a dynamic social media agency since 2019,
            dedicated to elevating brands through creative content and strategic
            digital marketing
          </span>
          <span
            className="text-[#303338] md:text-[2.4375rem] text-[0.97463rem] font-semibold md:font-medium font-pSans md:leading-[3.00463rem] leading-[1.59831rem] md:tracking-[0.02544rem] tracking-[0.00975rem]
          xl:text-[2.86456rem] xl:leading-[3.38019rem] xl:tracking-[0.02863rem]"
          >
            {" "}
          </span>
          <span
            className="text-[#303338] md:text-[2.4375rem] text-[0.97463rem] font-semibold md:font-medium font-pSans md:leading-[3.00463rem] leading-[1.59831rem] md:tracking-[0.02544rem] tracking-[0.00975rem]
          xl:text-[2.86456rem] xl:leading-[3.38019rem] xl:tracking-[0.02863rem]"
          >
            ツ
          </span>
        </div>
      </section>

      <div
        className="w-full mt-[6.43rem] md:mt-[7.69rem] xl:mt-[8.65rem] mb-[4.93rem] md:mb-[5.79rem] xl:mb-[6.51rem]
       flex justify-end"
      >
        <img
          src={home1}
          alt=""
          className="w-full h-auto max-w-[21.10825rem] md:max-w-[60rem] xl:max-w-[67.5rem] max-h-[5.94675rem] md:max-h-[10.27775rem] xl:max-h-[11.5625rem]"
        />
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <div
          className=" w-[11.197rem] h-[1.01794rem] text-center text-[0.85719rem] leading-[0.00856rem] tracking-[0.00856rem]
                      md:w-[39.95369rem] md:h-[1.89813rem] md:text-left md:text-[1.15744rem] md:leading-[1.36575rem] md:tracking-[0.01156rem]
                      xl:w-[44.94794rem] xl:h-[2.13544rem] xl:text-[1.30206rem] xl:leading-[1.53644rem] xl:tracking-[0.013rem]
                    text-[#da5428] font-semibold font-pSans capitalize "
        >
          What Do We Do?
        </div>

        <div
          className="font-title text-center md:text-left mt-[0.91rem] w-[18.59025rem] h-[11.83988rem] text-[0.69644rem] font-semibold leading-[0.90706rem] tracking-[0.00694rem] 
                      md:w-[39.95369rem] md:h-[16.85188rem] text-[#535353]  md:text-[1.15744rem] md:font-medium md:leading-[1.50738rem] md:tracking-[0.01156rem]  md:mt-[0.51rem] 
                      xl:w-[44.94794rem] xl:h-[18.95831rem] xl:text-[1.30206rem] xl:leading-[1.69581rem] xl:tracking-[0.013rem] xl:mt-[0.57rem]"
        >
          In the last 5 years, the country has seen trendsetting marketing
          campaigns — but what&apos;s missing is &quot;the beyonds&quot; of a
          campaign. Does it end after a post, a hoarding, an ad? So we just want
          likes & comments? Maybe an app download? No. That can&apos;t be all.
          <br />
          <br />
          There&apos;s more to your brand than this — and we want to bring that
          to the front too. Beyond just campaigns. Just like our name, we are
          here to brighten up your social media presence with a layered approach
          that works exclusively for you.
        </div>
      </div>

      <div
        className="w-full mt-[6.43rem] md:mt-[7.69rem] xl:mt-[8.65rem] mb-[4.93rem] md:mb-[5.79rem] xl:mb-[6.51rem]
       flex justify-start"
      >
        <img
          src={image}
          alt=""
          className="w-full h-auto max-w-[21.10825rem] md:max-w-[60rem] xl:max-w-[67.5rem] max-h-[5.94675rem] md:max-h-[10.27775rem] xl:max-h-[11.5625rem]"
        />
      </div>

      <div className="w-full flex flex-col justify-center items-center md:mt-[8.19rem] mt-[5.06rem]">
        <div
          className=" w-[11.197rem] h-[1.01794rem] text-center text-[0.85719rem] leading-[0.00856rem] tracking-[0.00856rem]
                      md:w-[40.13888rem] md:h-[1.89813rem] md:text-left md:text-[1.15744rem] md:leading-[1.36575rem] md:tracking-[0.01156rem]
                      xl:w-[45.15625rem] xl:h-[2.13544rem] xl:text-[1.30206rem] xl:leading-[1.53644rem] xl:tracking-[0.013rem]
                    text-[#da5428] font-semibold font-pSans capitalize"
        >
          How Do We Do It?
        </div>

        <div
          className="font-title text-center md:text-left mt-[0.91rem] w-[18.59025rem] h-[11.83988rem] text-[0.69644rem] font-semibold leading-[0.90706rem] tracking-[0.00694rem] 
                      md:w-[40.13888rem] md:h-[8.79631rem] text-[#535353]  md:text-[1.15744rem] md:font-medium md:leading-[1.50738rem] md:tracking-[0.01156rem]  md:mt-[0.51rem] 
                      xl:w-[45.15625rem] xl:h-[9.89581rem] xl:text-[1.30206rem] xl:leading-[1.69581rem] xl:tracking-[0.013rem] xl:mt-[0.57rem]"
        >
          Our approach is different - a boutique-style agency that prioritizes
          understanding our clients as intimately as our own business. This
          approach has not only made us experts in our field but has allowed us
          to build genuine partnerships.
        </div>

        <div className="max-w-[80rem] flex justify-end">
          <a
            href="#examples"
            className="w-[9.4375rem] h-[9.75rem] text-[#535353] text-xl font-semibold font-title underline leading-relaxed tracking-tight mb-4 hidden md:block "
            id="service"
          >
            check services
          </a>
        </div>
      </div>

      <div className="md:hidden w-full h-[13.875rem] flex justify-end">
        <img src={rectangleMobile} alt="" className="w-full" />
      </div>

      <div className="md:block flex flex-col items-center justify-center mt-[4.77rem] md:mt-[14.26rem] md:ml-[7.55rem] xl:mt-[16.04rem] xl:ml-[8.49rem]">
        <div
          className="w-[15.996rem] h-[3.98444rem] text-center text-[#303338] text-[1.43756rem] font-pSans font-semibold leading-[1.69631rem] tracking-[0.01438rem] 
        md:text-left md:w-[25.46294rem] md:h-[6.34263rem]  md:text-[2.28831rem] md:leading-[2.70025rem] md:tracking-[0.02288rem]  
        xl:w-[28.64581rem] xl:h-[7.13544rem]  xl:text-[2.57438rem] xl:leading-[3.03775rem] xl:tracking-[0.02575rem]"
        >
          Service We Provide For Your Brand
          <span className="text-[#303338] md:text-[2.28831rem] md:leading-[2.70025rem] md:tracking-[0.02288rem] font-pSans font-semibold  ">
            {" "}
          </span>
          <span className="text-[#303338] xl:text-[2.57438rem] xl:leading-[3.03775rem] xl:tracking-[0.02575rem] font-pSans font-semibold ">
            ツ
          </span>
          <AnimatedLogo />
        </div>
      </div>

      <div className="flex flex-row md:items-center md:justify-between">
        <div className="">
        <DropDown />
        </div>
      
        <div className="hidden md:flex md:w-[25.97225rem] lg:w-[26rem] xl:w-[29.21875rem] h-auto md:mr-[4rem] xl:mr-[6rem]">
          <img src={rectangle} alt="image" className="w-auto" />
        </div>
      </div>

      <div>
        <ContactForm />
      </div>

      <div className="w-full flex justify-center mt-[3.08rem]">
        <div
          className="text-center text-[#535353] font-semibold font-title
                    w-[20.74813rem] leading-[0.94181rem] tracking-[0.00725rem] text-[0.72313rem]
                    md:w-[52.7315rem] md:h-[14.49075rem] md:leading-[1.50738rem] md:tracking-[0.01156rem md:text-[1.15744rem]
                    xl:w-[59.32294rem] xl:h-[16.30206rem] xl:leading-[1.69581rem ] xl:tracking-[0.013rem] xl:text-[1.30206rem]"
        >
          Our ideal customer personas are small to medium-sized business owners,
          marketing managers, and ad moguls looking to make their brand be seen.
          They value the power of strategy with creativity, and believe in
          results, rather than buzz. <br />
          <br />
          If you&apos;re that persona looking to navigate the digital marketing
          scene and give your brand the visibility it deserves, you&apos;re the
          one for us. Hope we&apos;re the one for you too.
        </div>
      </div>

      <div className="md:hidden">
        <Features />
      </div>
      <div>
        <FeaturesPC/>
      </div>

      <div>
        <PeopleSaying />
      </div>

      <div>
        <InfiniteCarousel />
      </div>

      <div className="text-center font-pSans w-full h-[1.3125rem] text-[1.125rem] font-semibold leading-[1.3275rem] tracking-[0.01125rem]">
        Meet Our Founder
      </div>

      <div className="flex flex-col md:flex-row justify-center mt-[3.11rem] md:mt-[6.56rem] md:mr-[20rem] ">
        <div className="w-full md:max-w-[23.06481rem] ">
          <img
            className="object-fill w-full h-auto md:hidden mx-auto"
            src={founderImgMobile}
            alt=""
          />
          <img
            className="object-fill h-auto hidden md:block"
          src={founderImg} alt="" />
        </div>


        <div className="md:flex flex-col justify-between md:space-y-[5rem] h-auto md:ml-[1.5rem] xl:ml-[2.5rem] md:mr-[3rem] xl:mr-[6rem] mx-auto md:mx-0">
            <div className="h-auto">
            <p className="mt-[2.57rem] mb-[0.48rem] font-pSans font-semibold 
            w-[9.80406rem] h-[1.39294rem] text-[1.25369rem] leading-[1.24119rem] tracking-[-0.01256rem]
            md:w-[11.94444rem] md:h-[4.58331rem] md:text-[2.22225rem] md:leading-[2.2rem] md:tracking-[-0.02225rem]
             xl:w-[13.4375rem] xl:h-[5.15625rem] xl:text-[2.5rem] xl:leading-[2.475rem] xl:tracking-[-0.025rem]">
              Pooja Bhadoriya
            </p>
            <p className="w-[9.05406rem] h-[1.01794rem] font-title 
            text-[0.64288rem] font-normal leading-normal text-center md:text-left
            md:w-[12.36113rem] md:h-[1.80556rem] md:text-[0.83331rem]
            xl:w-[13.90625rem] xl:h-[2.03125rem] xl:text-[0.9375rem]">
              Founder & Creative Director
            </p>
            </div>
          
            <div>
            <p className="hidden text-[#546660] md:block font-normal
            lg:w-[12.36113rem] lg:h-[7.36113rem] lg:text-[1.26819rem]  lg:leading-[1.65163rem] lg:tracking-[0.01269rem]
            xl:w-[13.90625rem] xl:h-[8.28125rem] xl:text-[0.9375rem]  xl:leading-[1.85813rem] xl:tracking-[0.01425rem]">
            {`"`}Oh also, she&apos;s really excited to meet you, fellow business-owner.{`"`}
            </p>
            </div>
         
        </div>



        <div className="w-[19.98319rem] h-[14.68rem] mt-[1.82rem] mx-auto md:mx-0">

            <div className=" w-[19.98319rem] h-[10.28625rem] font-title text-[0.69644rem] font-normal leading-[1.02381rem] tracking-[0.00694rem]
            md:w-[30.50013rem] md:h-[24.15rem] md:text-[1rem] md:leading-[1.47006rem] md:tracking-[0.01rem]
            lg:w-[37.50013rem] lg:h-[24.15rem] lg:text-[1.365rem] lg:leading-[1.87006rem] lg:tracking-[0.01363rem]
            xl:w-[45rem] xl:h-[28.97994rem] xl:text-[1.638rem] xl:leading-[2.24406rem] xl:tracking-[0.01638rem]">
              Full time overthinker and part time Founder, Pooja launched The Bright
              Layers in 2019 as a tribute to her experience of working in social
              media - be it as a designer, writer, creative director, or just as a
              consultant to her uncle who really wanted his mithai business to go
              viral on Instagram. <br /> <br /> As a business owner herself, she understands the
              passion that fuels a brand. Her goal is to bring that passion to the
              forefront, and to make businesses feel more human.
            </div>
            <div className="ml-auto md:hidden text-[#546660] text-[0.71544rem] w-[11.572rem] h-[2.30369rem] font-normal leading-[0.93181rem] tracking-[0.00713rem] ">
            {`"`}Oh also, she&apos;s really excited to meet you, fellow business-owner.{`"`}
            </div>
        </div>   
      </div>

      <BlogSpot/>

      <Footer/>
    </div>
  );
}

export default Home;
