import React from "react";
import { Buttons1 } from "./Buttons";
import { useNavigate } from "react-router-dom";

function AboutPreview() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row justify-between items-center lg:gap-6 md:gap-5 md:self-stretch gap-9 lg:py-16 lg:px-14 md:p-10 py-6 px-4 ">
      <picture className="hidden md:flex ">
        <img
          src="/Subtract.svg"
          alt=""
          className="flex self-stretch md:w-[23rem] lt:w-[30rem] lg:w-[37.75rem] w-[24rem] md:h-full h-[25rem]"
        />
      </picture>
      <div className="flex flex-1 flex-col w-full items-start gap-3 md:flex-1 md:self-auto self-stretch">
        <span className="font-inter text-xs lg:text-sm md:font-bold font-semibold text-[#1D5ADD]">
          WHO WE ARE
        </span>
        <div className="flex flex-col items-start self-stretch gap-3 lg:pr-10">
          <h4 className="text-xl md:text-3xl lg:text-[2rem] font-semibold text-[#242424] font-inter leading-6 self-stretch">
            A Human-centered approach <br className="lt:hidden lg:block" /> to
            your <span className="text-[#1D5ADD]">IT</span> challenges.
          </h4>
          <p className="text-sm md:text-sm lg:text-base text-[#565656] font-inter lg:self-stretch">
            We’re a team of developers, designers, and product managers
            committed to turning bold ideas into powerful software solutions.
            From MVPs to enterprise systems, we combine creativity with
            technical expertise to help businesses solve real problems, scale
            faster, and stay ahead of the curve. Whether you're launching a new
            product or modernizing legacy systems, we bring the agility and
            experience to make it happen.
          </p>
        </div>
        <Buttons1
          onClick={() => navigate("/about")}
          className="rounded-md border border-[#1D5ADD] text-[#1D5ADD] bg-[#FFF] h-10 gap-2 py-2 px-3 lg:py-3 md:self-start self-stretch lg:px-4"
        >
          Learn More
        </Buttons1>
      </div>
      <picture className="md:hidden flex items-center w-full justify-center">
        <img
          src="/Subtract.svg"
          alt=""
          className="flex self-center -[25rem] w-[24rem]"
        />
      </picture>
    </div>
  );
}

export default AboutPreview;
