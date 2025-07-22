import React from "react";

function AboutPreview() {
  return (
    <div className="flex flex-col justify-center items-center gap-9 py-6 px-4 ">
      <div className="flex flex-col items-start gap-3 self-stretch">
        <span className="font-inter text-xs font-semibold text-[#1D5ADD]">
          WHO WE ARE
        </span>
        <div className="flex flex-col items-start self-stretch gap-3">
        <h4 className="text-xl font-semibold text-black font-inter leading-6 self-stretch">
          A Human-centered approach to your <span className="text-[#123787]">IT</span> challenges.
        </h4>
        <p className="text-sm text-[#565656] font-inter leading-4">
            At CreatNeste, we empower businesses with solutions designed around their unique needs, our human-centered approach tackles your challenges with empathy and insight, bridging the gap between technology and user experience to delivering results that drive sustainable success.
        </p>
        </div>
        <button className="flex justify-center items-center self-stretch rounded-md border-[0.5px] border-[#1D5ADD] bg-white gap-2 py-2 px-3">
            Learn More
        </button>
      </div>
       <picture className="flex items-center w-full justify-center">
        <img src="/Subtract.png" alt="" className="flex self-center h-[25rem] w-[24rem]"/>
       </picture>
    </div>
  );
}

export default AboutPreview;
