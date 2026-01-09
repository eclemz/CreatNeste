import React from "react";
import { getSeasonalMessage } from "../Utilities/getSeasonalMessage";

const REPEAT_COUNT = 3; // tweak if needed for very large screens

const SeasonalMarquee = () => {
  const message = getSeasonalMessage();
  if (!message) return null;

  // One logical marquee unit
  const baseItems = message.icons.map((icon) => ({
    icon,
    text: message.text,
  }));

  // Repeat just enough to fill + scroll smoothly
  const marqueeItems = Array(REPEAT_COUNT).fill(baseItems).flat();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-10 overflow-hidden"
      style={{ background: message.bg, color: message.color }}
    >
      <div className="flex items-center h-full whitespace-nowrap animate-marquee">
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4 mx-2 shrink-0">
            <img src={item.icon} alt="" className="w-6 h-6 md:w-8 md:h-8" />
            <span className="font-inter font-medium text-xs md:text-base">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonalMarquee;
