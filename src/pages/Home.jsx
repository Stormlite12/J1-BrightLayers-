import Navbar from "../components/Navbar.jsx";
import LetsTalkFloater from "../assets/LetsTalkFloater.svg";
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
import FounderBio from "../components/FounderBio.jsx";
import FeaturesPC from "../components/FeaturesPC.jsx";

import BlogSpot from "../components/BlogSpot.jsx";
import Footer from "../components/Footer.jsx";

function Home() {

  return (
    <div className="w-full h-auto bg-[#ecf0f1] z-[-1] no-scrollbar">
      <div
        className="w-full h-[7.4rem]  flex justify-center items-center md:justify-between
                      mac:h-[7.69rem] lg:h-[6.15rem] xl:h-[8.65rem]"
      >
        <Navbar />
      </div>

      <div className="md:hidden fixed bottom-6 right-6 bg-[#2C3E50] w-[2rem] h-[2rem] rounded-full flex items-center justify-center">
  <img src={LetsTalkFloater} className="w-[1rem] h-[1.5rem] " alt="" />
</div>


      <section className="flex w-full justify-center mt-[1.36rem] md:mt-[5.56rem] mac:mt-[6.94rem] xl:mt-[7.81rem]">
        <div
          className="w-[20.03675rem] h-[7.17894rem] text-center 
                        sm:w-[24.3125rem] sm:text-[1.17388rem] sm:leading-[120%] sm:tracking-[0.01075rem]
                        md:w-[56.25rem] md:h-[16.38888rem]
                        xl:w-[63.28125rem] xl:h-[18.4375rem]"
        >
          <span
            className="text-[#303338] text-[0.96431rem] font-semibold leading-[1.5815rem] tracking-[0.00963rem] font-pSans 
                      sm:text-[0.99rem]
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

      <div id="about" ></div>

      <div className="w-full flex flex-col justify-center items-center">

      <div className="w-full mt-[5.43rem] md:mt-[6.15rem] mac:mt-[7.69rem] xl:mt-[8.65rem] mb-[4.93rem] md:mb-[4.63rem] mac:mb-[5.79rem] xl:mb-[6.51rem]
       flex justify-end">
        <img src={home1} alt="" className="w-full h-auto max-w-[90%]
        lg:max-w-[52rem] mac:max-w-[60rem] lap:max-w-[62.5rem] xl:max-w-[67.5rem] 2xl:max-w-[70.5rem] 3xl:max-w-[82.5rem] 
         "/>
      </div>
      

      <div>
        
      </div>
      <div className="w-[11.197rem] h-[1.01794rem] text-center text-[0.83719rem] leading-[0.00856rem] tracking-[0.00856rem]
                      sm:text-[0.95456rem]
                      md:w-[40.13888rem] md:h-[1.89813rem] md:text-left md:text-[1.15744rem] md:leading-[1.36575rem] md:tracking-[0.01156rem]
                      xl:w-[45.15625rem] xl:h-[2.13544rem] xl:text-[1.30206rem] xl:leading-[1.53644rem] xl:tracking-[0.013rem]
                    text-[#da5428] font-semibold font-pSans capitalize "
      >What Do We Do?</div>



      <div className="font-title text-center md:text-left mt-[0.91rem] text-[#545454]
             w-[85%] h-[11.83988rem] text-[0.7rem] font-medium leading-[130.238%] tracking-[0.00813rem]
             sm:w-[85%] sm:text-[0.9rem] sm:leading-[1.2rem] sm:tracking-[0.009rem]
             md:w-[40.13888rem] md:h-[16.85rem] md:text-[1.15rem] md:font-medium md:leading-[1.5rem] md:tracking-[0.0116rem] md:mt-[0.51rem] 
             xl:w-[45.15625rem] xl:h-[18rem] xl:text-[1.3rem] xl:leading-[1.7rem] xl:tracking-[0.013rem] xl:mt-[0.57rem]"
            >
              In the last 5 years, the country has seen trendsetting marketing campaigns —
              but what&apos;s missing is &quot;the beyonds&quot; of a campaign. Does it end after
              a post, a hoarding, an ad? So we just want likes & comments? Maybe an app
              download? No. That can&apos;t be all.
              <br />
              <br />
              There&apos;s more to your brand than this — and we want to bring that to the
              front too. Beyond just campaigns. Just like our name, we are here to brighten
              up your social media presence with a layered approach that works exclusively
              for you.
            </div>

      </div>
      <div className="max-w-[80rem] mx-auto hidden mac:-translate-y-20 md:block">
  <a
    href="#examples"
    className="w-[9.4375rem] h-[1.75rem] float-right text-[#545454] text-xl font-semibold font-title underline leading-relaxed tracking-tight mb-4"
  >
    check services
  </a>
</div>

      <div
        className="w-full mt-[10rem] md:mt-[7.69rem] lg:mt-[9.48rem] mac:mt-[11.85rem] xl:mt-[8.65rem]
       flex justify-start"
      >
        <img
          src={image}
          alt=""
          className="w-full h-auto max-w-[90%] lg:max-w-[52rem] mac:max-w-[60rem] lap:max-w-[62.5rem] xl:max-w-[67.5rem] 2xl:max-w-[70.5rem] 3xl:max-w-[82.5rem] "
        />
      </div>

      <div className="w-full flex flex-col justify-center items-center md:mt-[9.48rem] mac:mt-[11.85rem] xl:mt-[13.33rem] mt-[5.06rem]">
        <div
          className="w-[11.197rem] h-[1.01794rem] text-center text-[0.85719rem] leading-[0.00856rem] tracking-[0.00856rem]
                      sm:text-[0.95456rem] 
                      md:w-[40.13888rem] md:h-[1.89813rem] md:text-left md:text-[1.15744rem] md:leading-[1.36575rem] md:tracking-[0.01156rem]
                      xl:w-[45.15625rem] xl:h-[2.13544rem] xl:text-[1.30206rem] xl:leading-[1.53644rem] xl:tracking-[0.013rem]
                    text-[#da5428] font-semibold font-pSans capitalize"
        >
          How Do We Do It?
        </div>

        <div
          className="font-title text-center md:text-left mt-[0.91rem] w-[85%] h-[11.84rem] text-[0.7rem] font-medium leading-[130%] tracking-[0.007rem] 
          sm:w-[85%] sm:text-[0.9rem] sm:leading-[1.2rem] sm:tracking-[0.009rem]
          md:w-[40.14rem] md:h-[8.8rem] md:text-[1.16rem] md:font-medium md:leading-[1.51rem] md:tracking-[0.012rem] md:mt-[0.51rem] 
          xl:w-[45.16rem] xl:h-[9.9rem] xl:text-[1.3rem] xl:leading-[1.7rem] xl:tracking-[0.013rem] xl:mt-[0.57rem] text-[#545454]"
        >
          Our approach is different - a boutique-style agency that prioritizes
          understanding our clients as intimately as our own business. This
          approach has not only made us experts in our field but has allowed us
          to build genuine partnerships.
        </div>
      </div>

      <div className="max-w-[80rem] mx-auto hidden mac:-translate-y-20 md:block">
  <a
    href="#examples"
    className="w-[9.4375rem] h-[1.75rem] float-right text-[#545454] text-xl font-semibold font-title underline leading-relaxed tracking-tight mb-4"
    
  >
    check services
  </a>
</div>

      <div className="lg:hidden w-full h-auto flex mt-[8rem]" >
        <img
          src={rectangleMobile}
          alt="Mobile View"
          className="object-cover w-full h-full"
        />
      </div >

    
      <div id="service"></div>

      <div className="mx-auto max-w-[90%] justify-around space-x-4 h-auto flex flex-row md:items-center mt-[4.77rem] lg:mt-[11.41rem] mac:mt-[14.26rem]  "  >
       
        <div className=" " >
        <div className="w-[70%] mx-auto lg:mx-0 h-[3.98444rem] text-center text-[#303338] text-[1.23225rem] font-pSans font-semibold leading-[1.69631rem] tracking-[0.01438rem] 
            sm:text-[1.4rem]
            md:text-left
            lg:w-[22.37038rem] lg:h-[5.07406rem] lg:text-[1.83069rem] lg:tracking-[0.01831rem] 
            mac:w-[25.46294rem] mac:h-[6.34263rem] mac:text-[2.28831rem] mac:tracking-[0.02288rem] 
            lap:w-[27.17375rem] lap:h-[6.76875rem] lap:text-[2.44206rem] lap:tracking-[0.02444rem] 
            xl:w-[28.64581rem] xl:h-[7.13544rem] xl:text-[2.57438rem]  xl:tracking-[0.02575rem]
            2xl:w-[30.55556rem] 2xl:h-[7.61113rem] 2xl:text-[2.746rem]  2xl:tracking-[0.02744rem]
            "
            >Service We Provide For Your Brand
          <span className="text-[#303338] md:text-[2.28831rem] md:leading-[2.70025rem] md:tracking-[0.02288rem] font-pSans font-semibold  ">
            {" "}
          </span>
          <span className="text-[#303338] xl:text-[2.57438rem] xl:leading-[3.03775rem] xl:tracking-[0.02575rem] font-pSans font-semibold ">
            ツ
          </span>
          <AnimatedLogo />  
        </div>

        <div className="">
        <DropDown />
        </div>
     
        </div>



        <div className="hidden lg:flex ">
          <img src={rectangle} alt="image" className="w-auto" />
        </div>
      </div>

      <div>
        <ContactForm className="lg:mt-[13.59rem] mac:mt-[16.99rem] xl:mt-[19rem]" />
      </div>

      <div className="w-full flex justify-center mt-[3.08rem]">
        <div
          className="text-center text-[#545454] font-medium font-title
                    w-[20.74813rem] leading-[0.94181rem] tracking-[0.00725rem] text-[0.72313rem]
                    sm:w-[24.95281rem] sm:text-[0.8556rem] sm:leading-[130.238%] sm:tracking-[0.00775rem]
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
        <FeaturesPC className="md:mt-[2rem]" />
      </div>

      <PeopleSaying />
      <InfiniteCarousel />

      <div
        className="md:mt-[9.81rem] mac:mt-[12.27rem] xl:mt-[13.8rem] text-center font-pSans w-full h-[1.3125rem] text-[1.125rem] font-semibold leading-[1.3275rem] tracking-[0.01125rem]
            md:text-[clamp(1.35606rem,1.5vw,2.54263rem)] md:leading-[2.25019rem] md:font-semibold md:tracking-[0.01906rem]"
      >
        Meet Our Founder
      </div>

      <div className="w-full mt-[3.63rem] md:mt-[5.5rem] mac:mt-[6.56rem] xl:mt-[7.38rem]" >
        <div className="w-[90%] mx-auto">
        <FounderBio />
        </div>


        <div id="blog"></div>
        <div className="md:mt-[10.26rem] mac:mt-[12.5rem] xl:mt-[14.06rem] mx-auto w-[80%]" >
          <BlogSpot />
        </div>
      </div>

      <div className="className=lg:mt-[15.3rem] mac:mt-[19.12rem] xl:mt-[21.51rem] ">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
