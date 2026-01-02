import React from "react";
import { serviceCard } from "../Data/Data.js";
import { Buttons2, Buttons1 } from "./Buttons.jsx";
import { motion } from "framer-motion";

const ServiceCard = ({ showSection = false }) => {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:creatneste@gmail.com?subject=Let's%20Work%20Together";
  };

  const cardBaseClass =
    "flex relative overflow-hidden flex-col group items-start justify-end self-stretch md:p-4 py-4 px-2 gap-4 rounded-lg border-2  min-h-[250px] lg:min-h-[250px] transition-all duration-300 ease-in-out ";

  return (
    <main className="flex flex-col justify-center items-center md:self-stretch gap-8 lg:py-16 lg:px-14 md:px-10 md:py-10 py-6 px-4">
      {showSection && (
        <div className="flex flex-col lt:flex lt:flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Left section */}
          <section className="flex flex-col justify-center items-center md:items-start self-stretch gap-3 md:gap-4">
            <div className="flex flex-col items-start gap-2 md:gap-3 lg:gap-4">
              <span className="font-inter text-[#1D5ADD] text-sm font-semibold">
                OUR SERVICES
              </span>
              <h4 className="lg:hidden hidden md:block font-inter text-xl lg:text-3xl text-[#242424] font-semibold">
                Our Software Solutions
              </h4>
              <h4 className="md:hidden lg:block self-stretch font-inter leading-9 md:leading-[3rem] lg:leading-[2.375rem] text-[2rem] text-[#242424] font-semibold">
                Tailored Software Solutions That Solve Real Problems
              </h4>
              <p className="font-inter text-base lg:text-lg text-[#565656] self-stretch leading-5">
                We understand the hurdles of visibility, efficiency and
                scalability which is why at
                <span className="text-[#1D5ADD]"> CreatNeste</span>, our job is
                to solve them with practical and future-ready technology by
                offering end-to-end software development services designed to
                help you build, launch, and scale with confidence.
              </p>
            </div>
          </section>

          {/* For Tablet */}
          <section className="lg:hidden hidden lt:grid md:grid grid-cols-2 gap-y-10 justify-center items-stretch self-stretch gap-5">
            {serviceCard.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={index}
                  className={cardBaseClass}
                  style={{ background: item.bg, borderColor: item.border }}
                >
                  <i
                    className="flex z-10 py-4 px-3 rounded-[0.25rem] lg:gap-2 text-3xl text-white"
                    style={{ background: item.iconBg }}
                  >
                    <Icon className="h-5 w-7" />
                  </i>
                  <div className="flex relative z-10 flex-col flex-grow p-1 items-start self-stretch gap-2">
                    <h3 className="text-[#242424] font-semibold text-base md:text-lg font-inter">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base font-inter lg:self-stretch text-[#565656]">
                      {item.desc}
                    </p>
                  </div>
                  <Buttons2
                    onClick={handleEmailClick}
                    className="relative z-10 md:py-3 py-2 px-4 text-[#1D5ADD] group-active:underline underline-offset-4 transition-all duration-600"
                  >
                    Contact Us
                  </Buttons2>
                </article>
              );
            })}
          </section>

          {/* Right top: first card */}
          <section className="md:hidden lt:hidden lg:block">
            {serviceCard.slice(0, 1).map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={index}
                  className={cardBaseClass}
                  style={{ background: item.bg, borderColor: item.border }}
                >
                  <i
                    className="flex z-10 py-4 px-3 rounded-[0.25rem] text-3xl text-white"
                    style={{ background: item.iconBg }}
                  >
                    <Icon className="h-5 w-7" />
                  </i>
                  <div className="flex relative z-10 flex-col flex-grow p-1 items-start self-stretch gap-2">
                    <h3 className="text-[#242424] font-semibold text-base md:text-lg font-inter">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base font-inter text-[#565656]">
                      {item.desc}
                    </p>
                  </div>
                  <Buttons2
                    onClick={handleEmailClick}
                    className="relative z-10 group-hover:underline group-active:underline underline-offset-4 transition-all duration-600"
                  >
                    Contact Us
                  </Buttons2>
                </article>
              );
            })}
          </section>

          {/* Bottom row: remaining 3 cards */}
          <section className="md:hidden lt:hidden lg:grid lg:col-span-2 grid grid-cols-1 lt:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8">
            {serviceCard.slice(1).map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={index}
                  className={cardBaseClass}
                  style={{ background: item.bg, borderColor: item.border }}
                >
                  <i
                    className="flex z-10 py-4 px-3 rounded-[0.25rem] text-3xl text-white"
                    style={{ background: item.iconBg }}
                  >
                    <Icon className="h-5 w-7" />
                  </i>
                  <div className="flex relative z-10 flex-col flex-grow p-1 items-start self-stretch gap-2">
                    <h3 className="text-[#242424] font-semibold text-base md:text-lg font-inter">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base font-inter text-[#565656]">
                      {item.desc}
                    </p>
                  </div>
                  <Buttons2
                    onClick={handleEmailClick}
                    className="relative z-10 group-hover:underline group-focus:underline underline-offset-4 transition-all duration-600"
                  >
                    Contact Us
                  </Buttons2>
                </article>
              );
            })}
          </section>
        </div>
      )}

      {!showSection && (
        <>
          {/* For Mobile */}
          <section className="flex flex-col justify-center items-center self-stretch gap-3">
            <span className="font-inter text-[#1D5ADD] text-sm font-semibold">
              OUR SERVICES
            </span>
            <h4 className="font-inter text-2xl md:text-3xl font-semibold">
              The Value we offer
            </h4>
          </section>
          <section className="md:hidden grid grid-cols-1 gap-6">
            {serviceCard.map((item, index) => (
              <article
                key={index}
                className="flex relative overflow-hidden flex-col justify-center py-4 px-1 gap-3 rounded-lg shadow-md border border-[#F0F0F0] transition bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="relative z-10 w-full h-48 object-cover"
                />
                <div className="relative z-10 p-1">
                  <h3 className="font-semibold text-base text-[#242424] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
                <Buttons1 onClick={handleEmailClick} className="relative z-10 ">
                  Contact Us
                </Buttons1>
              </article>
            ))}
          </section>

          {/* For Tablet and Desktop */}
          <section className="hidden md:flex flex-col lg:gap-10 md:gap-5 self-stretch w-full">
            {serviceCard.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={index}
                  className={`flex relative overflow-hidden flex-col md:flex-row ${
                    !isEven ? "md:flex-row-reverse" : ""
                  } lg:items-center md:items-start gap-5 p-5 rounded-lg md:gap-6 lg:py-5 lg:px-0 lg:gap-10 bg-white`}
                >
                  <div className="relative z-10 flex-1 flex flex-col items-start gap-5 lg:gap-6 lg:self-stretch">
                    <div className="flex flex-col items-start justify-center lg:gap-3 lg:py-3">
                      <h3 className="text-[#242424] font-semibold text-lg lg:text-xl font-inter">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base font-inter text-[#565656]">
                        {item.desc}
                      </p>
                    </div>
                    <Buttons1 onClick={handleEmailClick} className="ml-1">
                      {item.button}
                    </Buttons1>
                  </div>

                  <picture className="relative z-10 flex-1">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="md:w-full h-64 md:h-72 lg:h-[21.5625rem] lg:flex-1 object-cover rounded-xl"
                    />
                  </picture>
                </motion.article>
              );
            })}
          </section>
        </>
      )}
    </main>
  );
};

export default ServiceCard;
