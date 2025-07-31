import React from "react";
import { Buttons1 } from "./Buttons";

function AboutPreview() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center lg:gap-6 md:gap-5 md:self-stretch gap-9 lg:py-16 lg:px-14 md:p-10 py-6 px-4 ">
      <picture className="hidden md:flex lg:w-[50%]">
        <img src="/Subtract.svg" alt="" className="flex self-center md:w-[23rem] lg:w-[41rem] lg:h-[32rem] md:h-[22rem] h-[25rem] w-[24rem]"/>
       </picture>
      <div className="flex flex-col items-start gap-3 md:flex-1 md:self-auto self-stretch">
        <span className="font-inter text-xs lg:text-sm md:font-bold font-semibold text-[#1D5ADD]">
          WHO WE ARE
        </span>
        <div className="flex flex-col items-start self-stretch gap-3">
        <h4 className="text-xl md:text-3xl lg:text-[2rem] font-semibold text-[#242424] font-inter leading-6 self-stretch">
          A Human-centered approach <br className="md:hidden lg:block"/> to your <span className="text-[#123787]">IT</span> challenges.
        </h4>
        <p className="text-sm md:text-base text-[#565656] font-inter leading-4">
            At CreatNeste, we empower businesses with solutions designed around their unique <br className="md:hidden lg:block"/> needs, our human-centered approach tackles your challenges with empathy and insight, <br className="md:hidden lg:block"/> bridging the gap between technology and user experience to delivering results <br className="md:hidden lg:block"/> that drive sustainable success.
        </p>
        </div>
        <Buttons1 className="rounded-md border-[0.5px] border-[#1D5ADD] bg-[#FFF] gap-2 py-2 px-3 lg:py-3 lg:px-4">
            Learn More
        </Buttons1>
      </div>
       <picture className="md:hidden flex items-center w-full justify-center">
        <img src="/Subtract.svg" alt="" className="flex self-center h-[25rem] w-[24rem]"/>
       </picture>
    </div>
  );
}

export default AboutPreview;
