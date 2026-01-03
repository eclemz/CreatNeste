import React from "react";
import { getSeasonalMessage } from "../Utilities/getSeasonalMessage";
import { color } from "framer-motion";

const SeasonalMarquee = () => {
  const message = getSeasonalMessage();

  if (!message) return null;

  return (
    <div
      className={`${message.bg} h-10 overflow-hidden fixed top-0 left-0 right-0 z-[60]`}
      style={{ background: message.bg, color: message.color }}
    >
      <div className="flex items-center h-full gap-6 animate-marquee whitespace-nowrap">
        <img src={message.icon1} alt="" className="w-8 h-8" />
        <span className="font-inter font-medium text-sm md:text-base">
          {message.text}
        </span>
        {/* <span className="mx-6">•</span> */}
        <img src={message.icon2} alt="" className="w-8 h-8" />
        <span className="font-inter font-medium text-sm md:text-base">
          {message.text}
        </span>
        <img src={message.icon3} alt="" className="w-8 h-8" />
        <span className="font-inter font-medium text-sm md:text-base">
          {message.text}
        </span>
        {/* <span className="mx-6">•</span> */}
        <img src={message.icon4} alt="" className="w-8 h-8" />
        <span className="font-inter font-medium text-sm md:text-base">
          {message.text}
        </span>
        <img src={message.icon5} alt="" className="w-8 h-8" />
        <span className="font-inter font-medium text-sm md:text-base">
          {message.text}
        </span>
        {/* <span className="mx-6">•</span> */}
        <img src={message.icon2} alt="" className="w-8 h-8" />
        <span className="font-inter font-medium text-sm md:text-base">
          {message.text}
        </span>

        <img src={message.icon1} alt="" className="w-8 h-8" />
        <span className="font-inter font-medium text-sm md:text-base">
          {message.text}
        </span>
        {/* <span className="mx-6">•</span> */}
        <img src={message.icon2} alt="" className="w-8 h-8" />
        <span className="font-inter font-medium text-sm md:text-base">
          {message.text}
        </span>
        <img src={message.icon3} alt="" className="w-8 h-8" />
        <span className="font-inter font-medium text-sm md:text-base">
          {message.text}
        </span>
        {/* <span className="mx-6">•</span> */}
        <img src={message.icon4} alt="" className="w-8 h-8" />
        <span className="font-inter font-medium text-sm md:text-base">
          {message.text}
        </span>
        <img src={message.icon5} alt="" className="w-8 h-8" />
        <div>
          <img src={message.icon1} alt="" className="w-8 h-8" />
          <span className="font-inter font-medium text-sm md:text-base">
            {message.text}
          </span>
          {/* <span className="mx-6">•</span> */}
          <img src={message.icon2} alt="" className="w-8 h-8" />
          <span className="font-inter font-medium text-sm md:text-base">
            {message.text}
          </span>
          <img src={message.icon5} alt="" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default SeasonalMarquee;
