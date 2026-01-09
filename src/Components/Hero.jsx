import React from "react";
import { Buttons } from "./Buttons";

function Hero({
  bgImage,
  overline,
  title,
  subtitle,
  ctaText,
  ctaAction,
  overlay = true,
}) {
  return (
    <section
      className="relative flex flex-col justify-center bg-cover bg-center items-start
      xl:px-14 xl:pt-20 xl:pb-40 md:py-20 md:px-10
       pt-56 pb-10 px-4 gap-4 md:gap-8 xl:mt-32 md:mt-28 mt-32"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      {overlay && <div className="absolute inset-0 bg-black bg-opacity-50" />}

      <div className="relative z-10 flex flex-col gap-2 md:gap-4 md:w-[716px] items-start">
        <div className="flex flex-col gap-1 md:gap-2">
          {overline && (
            <span className="font-inter text-xs md:text-sm text-white font-bold leading-[1.005rem]">
              {overline}
            </span>
          )}

          <h1
            className="font-inter text-2xl md:text-4xl lg:text-5xl
          leading-tight md:leading-[2.5rem] lg:leading-[3.5rem]
          font-semibold text-white"
          >
            {title}
          </h1>
        </div>

        {subtitle && (
          <p className="font-inter text-sm md:text-lg text-[#EEEAEA] leading-[1.35rem] ">
            {subtitle}
          </p>
        )}
      </div>
      {ctaText && (
        <Buttons onClick={ctaAction} className="relative z-10 ">
          {ctaText}
        </Buttons>
      )}
    </section>
  );
}

export default Hero;
