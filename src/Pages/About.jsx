import React from "react";
import MissionCard from "../Components/MissionCard";
import TeamCard from "../Components/TeamCard";
import ContactPreview from "../Components/ContactPreview";
import { Buttons } from "../Components/Buttons";

function About() {
  return (
    <main>
      <section
        className="relative flex flex-col justify-center bg-cover bg-center md:self-stretch items-start md:gap-5 md:mt-20 gap-20 md:py-20 md:px-10 pt-[400px] pb-10 px-4"
        style={{ backgroundImage: `url('/background.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-start self-stretch gap-2 md:gap-4">
          <div className="flex flex-col justify-center items-start self-stretch gap-2">
            <span className="font-inter text-xs text-white font-semibold">
              Crafting Seamless Digital Experience
            </span>
            <h1 className="font-inter text-2xl md:text-5xl leading-[3.3rem] font-semibold md:font-medium self-stretch text-white">
              A human-centered <br className="hidden md:block" /> approach to{" "}
              <br className="hidden md:block" /> your IT challenges
            </h1>
          </div>
          <p className="font-inter text-base text-[#EEEAEA] self-stretch">
            Designing for people, Driven by Data
          </p>
        </div>
        <Buttons className="relative z-10 flex md:py-3 py-2 px-4 justify-center bg-[#1D5ADD] rounded-md items-center gap-2 md:self-start self-stretch text-white">
          Contact us
        </Buttons>
      </section>
      <MissionCard />
      <section className="flex flex-col items-center self-stretch md:gap-5 gap-4 md:p-10 pt-10 pb-5 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between self-stretch gap-6">
          <picture className="flex-items-center">
            <img src="/boss.png" alt="" className="flex-1 md:h-[21.375rem] h-[24rem] self-center w-[24.8rem] md:w-[19rem]" />
          </picture>
          <div className="flex flex-col flex-1 items-start gap-2">
            <div className="flex flex-col items-start self-stretch gap[0.125rem]">
              <h3 className="font-inter text-xl self-stretch font-semibold text-[#242424]">
                Chief Engr. Clement Eneh
              </h3>
              <span className="font-inter text-base text-[#242424]">
                The Boss
              </span>
            </div>
            <p className="font-inter self-stretch text-base">
              At CreatNest, our mission is to create seamless, user-centered
              digital experiences that make life easier and more enjoyable. In
              today’s fast-paced digital world, great design isn’t just about
              aesthetics-it’s about solving real problems with simplicity and
              efficiency. <br/>  <br/>Our commitment to innovation and continuous
              improvement drives everything we do. We believe that every
              interaction should be meaningful, inclusive, and impactful. And we
              strive to push the boundaries of design to deliver exceptional
              results.
            </p>
          </div>
        </div>
      </section>
      <TeamCard />
      <ContactPreview />
    </main>
  );
}

export default About;
