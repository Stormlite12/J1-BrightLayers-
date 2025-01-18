import { forwardRef } from "react";
import PropTypes from "prop-types";

// Use forwardRef to forward the ref to the div element inside Card
const Card = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="overflow-x-hidden">
      <div className="max-w-full bg-[#1a3f60]  rounded-[0.71956rem] lg:rounded-[1.66669rem] overflow-hidden mx-auto px-4 py-4 md:p-8 flex flex-col justify-between
       w-[12.60431rem] h-[17.33094rem] 
       md:w-[21.11113rem] md:h-[29.02781rem]
       xl:w-[23.75rem] xl:h-[32.65625rem]">
        <div className="text-white font-pSans font-light 
                        w-[10.83656rem] h-[10.93075rem] text-[0.81669rem] leading-[1.03719rem] tracking-[0.00819rem]
                        md:text-[1.20369rem] md:w-[15.97225rem] md:h-[16.11113rem] md:leading-[1.52869rem] md:tracking-[0.01206rem]
                        xl:text-[1.35419rem] xl:w-[17.96875rem] xl:h-[18.125rem] xl:leading-[1.71981rem] xl:tracking-[0.01356rem]">
          {props.content}
        </div>
        <div className="w-[10.83656rem] h-[2.54425rem] md:w-[15.97225rem] md:h-[3.75rem] xl:w-[15.97225rem] xl:h-[3.75rem]">
            <div className="text-white font-pSans 
            text-[0.75388rem] font-semibold leading-[0.95738rem] tracking-[0.00756rem]
            md:text-[1.11113rem] md:leading-[1.41113rem] md:tracking-[0.01113rem]
            xl:text-[1.25rem] xl:leading-[1.5875rem] xl:tracking-[0.0125rem]
            ">{props.name}</div>
            <div className="text-white font-pSans
             text-[0.691rem] font-light tracking-[0.00694rem] leading-[0.95738rem]
              md:text-[1.0185rem] md:tracking-[0.01019rem] md:leading-[127%]
             xl:text-[1.14581rem] xl:tracking-[0.01144rem] xl:leading-[127%]
             ">{props.title}</div>
        </div>
      </div>
    </div>
  );
});

// Set the display name explicitly for better debugging
Card.displayName = "Card";

// Define propTypes for the Card component to ensure proper validation
Card.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;