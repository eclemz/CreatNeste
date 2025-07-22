import React from "react";
import MissionCard from "../Components/MissionCard";
import TeamCard from "../Components/TeamCard";
import ContactPreview from "../Components/ContactPreview";

function About() {
  return (
    <main>
      <section
        className="relative flex flex-col justify-center bg-cover bg-center items-start gap-20 pt-[400px] pb-10 px-4"
        style={{ backgroundImage: `url('/background.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-start self-stretch gap-2">
          <span className="font-inter text-xs text-white font-semibold">
            Crafting Seamless Digital Experience
          </span>
          <h3 className="font-inter text-2xl font-semibold self-stretch text-white">
            A human-centered approach to your IT challenges
          </h3>
          <p className="font-inter text-base text-[#EEEAEA] self-stretch">
            Designing for people, Driven by Data
          </p>
        </div>
        <button className="relative z-10 flex py-2 px-4 justify-center bg-[#1D5ADD] rounded-md items-center gap-2 self-stretch text-white">
          Contact us
        </button>
      </section>
      <MissionCard />
      <TeamCard />
      <ContactPreview />
    </main>
  );
}

export default About;
