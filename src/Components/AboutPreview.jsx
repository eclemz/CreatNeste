import React from "react";

function AboutPreview() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:gap-5 md:self-stretch gap-9 md:p-10 py-6 px-4 ">
      <picture className="hidden md:flex">
        <img src="/Subtract.png" alt="" className="flex self-center md:w-[23rem] md:h-[22rem] h-[25rem] w-[24rem]"/>
       </picture>
      <div className="flex flex-col items-start gap-3 md:flex-1 md:self-auto self-stretch">
        <span className="font-inter text-xs md:font-bold font-semibold text-[#1D5ADD]">
          WHO WE ARE
        </span>
        <div className="flex flex-col items-start self-stretch gap-3">
        <h4 className="text-xl md:text-3xl font-semibold text-black font-inter leading-6 self-stretch">
          A Human-centered approach to your <span className="text-[#123787]">IT</span> challenges.
        </h4>
        <p className="text-sm md:text-base text-[#565656] font-inter leading-4">
            At CreatNeste, we empower businesses with solutions designed around their unique needs, our human-centered approach tackles your challenges with empathy and insight, bridging the gap between technology and user experience to delivering results that drive sustainable success.
        </p>
        </div>
        <button className="flex justify-center items-center self-stretch rounded-md border-[0.5px] border-[#1D5ADD] bg-white gap-2 py-2 px-3">
            Learn More
        </button>
      </div>
       <picture className="md:hidden flex items-center w-full justify-center">
        <img src="/Subtract.png" alt="" className="flex self-center h-[25rem] w-[24rem]"/>
       </picture>
    </div>
  );
}

export default AboutPreview;
