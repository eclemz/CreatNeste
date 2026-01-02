import React from "react";
import MissionCard from "../Components/MissionCard";
import TeamCard from "../Components/TeamCard";
import ContactPreview from "../Components/ContactPreview";
import Hero from "../Components/Hero";

function About() {
  return (
    <main>
      <Hero
        bgImage={"/background.jpg"}
        overline="CRAFTING SEAMLESS DIGITAL EXPERIENCES"
        title={
          <>
            A <span className="text-[#1D5ADD]">People-centred</span> <br />
            approach to your IT <br />
            challenges
          </>
        }
        subtitle={<>Designing for people, Driven by Data.</>}
        ctaText="Contact Us"
        ctaAction={() => console.log("See Projects clicked")}
      />
      <MissionCard />
      <section className="stretch flex flex-col items-center self-stretch lg:gap-6 md:gap-5 gap-4 md:p-10 lg:py-16 lg:px-14 pt-10 pb-5 px-4">
        <div className="lg:w-[80rem] lt:w-auto flex flex-col md:flex-row items-center justify-center md:justify-between self-stretch gap-6">
          <picture className="flex-1 items-center lt:w-[50%] lt:h-[21.8rem]">
            <img
              src="/story.png"
              alt=""
              className="md:h-[21.375rem] lt:h-[21.8rem] h-[22rem] self-center lg:w-[39.75rem] w-[24.8rem] md:w-[full] lt:w-full "
            />
          </picture>
          <div className="flex flex-col flex-1 items-start gap-2">
            <div className="flex flex-col items-start self-stretch gap[0.125rem]">
              <h3 className="font-inter text-xl self-stretch font-semibold text-[#242424]">
                Our Story
              </h3>
            </div>

            <p className="font-inter self-stretch text-base">
              At CreatNest, our mission is to create seamless, user-centered
              digital experiences that make life easier and more enjoyable. In
              today’s fast-paced digital world, great design isn’t just about
              aesthetics, it’s about solving real problems with simplicity and
              efficiency. <br /> <br /> Our commitment to innovation and
              continuous improvement drives everything we do. We believe that
              every interaction should be meaningful, inclusive, and impactful.
              And we strive to push the boundaries of design to deliver
              exceptional results.
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
