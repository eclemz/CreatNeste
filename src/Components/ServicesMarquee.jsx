import React from "react";

const ServicesMarquee = () => {
  const marquee = [
    { name: "Branding" },
    { name: "UI/UX Design" },
    { name: "Web Development" },
    { name: "App Development" },
    { name: "E-commerce" },
  ];
  return (
    <div className="lg:h-20 h-12 lg:py-5 py-2 overflow-hidden bg-[#1D5ADD] text-white">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(8)].map((_, i) => (
          <ul
            key={i}
            className="flex items-center lg:gap-10 gap-4 lg:mx-5 mx-2"
          >
            {marquee.map((link, index) => (
              <li
                key={`${link.name}-${i}-${index}`}
                className="flex items-center lg:gap-6 gap-3 font-inter font-medium md:text-lg text-base"
              >
                {link.name}
                <img
                  src="/whitestar.svg"
                  alt=""
                  className="lg:h-8 lg:w-8 h-4 w-4 self-center"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ServicesMarquee;
