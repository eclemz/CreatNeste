import React from "react";
import { teamCard } from "../Data/Data";

function TeamCard() {
  return (
    <main className="flex flex-col items-center self-stretch md:gap-5 gap-4 md:p-10 pt-10 pb-5 px-4">
      <div className="flex flex-col items-center slef-stretch gap-2 px-20">
        <span className="font-inter text-sm font-semibold text-[#1D5ADD]">
          CEO DESK
        </span>
        <h3 className="font-inter text-2xl md:text-3xl text-[#242424] font-semibold">
          Meet The Team
        </h3>
        <p className="hidden md:block font-inter self-stretch text-base text-center whitespace-nowrap text-[#475467]">
          Our philosophy is simple; hire a team of diverse, passionate people
          and foster <br /> a culture that empowers you to do your best work.
        </p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-3 lt:grid-cols-3 lg:grid-cols-4 justify-center items-start self-stretch md:gap-5 gap-8">
        {teamCard.map((item, index) => (
          <article
            key={index}
            className="flex md:flex-1 flex-col items-start self-stretch lg:gap-4 md:gap-5 gap-2"
          >
            <picture className="flex-1 self-stretch">
              <img
                src={item.image}
                alt=""
                className="w-full h-[23rem] md:h-[16rem] lg:h-[19rem] object-cover"
              />
            </picture>
            <div className="flex flex-col items-start md:px-2 md:py-1 lg:px-4 lg:pb-2 self-stretch gap-[2px] md:gap-1">
              <span className="font-inter text-base md:text-lg lg:text-xl font-semibold text-[#101828]">
                {item.name}
              </span>
              <span className="font-inter text-sm md:text-base lg:text-lg text-[#6941C6] self-stretch">
                {item.title}
              </span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default TeamCard;
