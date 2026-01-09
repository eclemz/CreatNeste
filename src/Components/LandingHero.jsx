import { Buttons } from "./Buttons";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function LandingHero() {
  const formRef = useRef();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // e.g. service_123abc
        "your_template_id", // e.g. template_xyz456
        formRef.current,
        "your_public_key" // e.g. nK3hj2aD_lKSOMxDF
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setMessage(""); // Clear message
        },
        (error) => {
          setStatus("Failed to send. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <main
      className="flex flex-col w-full relative justify-center items-start md:self-stretch md:gap-20 gap-4 flex-1 md:mt-24 md:pt-5 md:px-10 lt:pt-10 lg:pb-32 lg:pt-10 xl:px-14 lt:pb-20 md:py-20 pt-56 pb-10 bg-cover bg-no-repeat bg-center lg:mt-32"
      style={{ backgroundImage: `url('/hero.png')` }}
    >
      <div className="absolute inset-0 left-0 bg-[linear-gradient(to_right,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.95)_10%,_rgba(255,255,255,0.8)_60%,_rgba(255,255,255,0.4)_70%,_rgba(255,255,255,0)_90%)]">
        <img
          src="/seo.svg"
          className="hidden md:block md:h-9 md:w-9 lg:h-12 lg:w-12 absolute lg:right-[40rem] lg:bottom-[9rem] lt:right-[21rem] lt:bottom-[10rem] md:right-[21rem] md:-[12rem] bottom-[11.3125rem]"
          alt=""
        />
        <img
          src="/cloud.svg"
          className="hidden md:block md:h-10 md:w-10 lg:h-14 lg:w-14 absolute right-[35.9rem] lg:right-[38rem] lg:top-[6rem] md:top-[10.5625rem] md:right-[21rem] lt:top-[7rem] lt:right-[19rem] top-[5.2rem]"
          alt=""
        />
        <img
          src="/setting.svg"
          className="hidden md:block h-10 w-10 absolute md:right-[4.0625rem] md:bottom-[-0.125rem] lg:right-[4.4375rem] lg:bottom-[4.0625rem]"
          alt=""
        />
        <img
          src="/rocket.svg"
          className="hidden md:block md:h-10 md:w-10 lg:h-14 lg:w-14 absolute md:left-[18.92413rem] md:bottom-[0.625rem] lt:left-[25rem] lt:bottom-[0.625rem] lg:left-[30rem] lg:bottom-[3rem]"
          alt=""
        />
      </div>
      <section className="flex flex-col py-5 px-4  md:pr-5 lg:py-5 md:px-0 lt:px-0 justify-center bg-cover bg-center items-start gap-8 md:self-auto self-stretch z-20 ">
        <div className="flex flex-col items-start md:gap-2 gap-1">
          <span className="font-inter text-xs lg:text-sm font-semibold md:font-bold text-[#1D5ADD]">
            ALL-IN-ONE DIGITAL SOLUTIONS FOR ALL
          </span>
          <h2 className="text-black text-2xl md:text-4xl lg:text-5xl font-inter leading-tight md:leading-[3rem] lg:leading-[3.5rem] font-semibold">
            Building{" "}
            <span className="text-[#1D5ADD] p-1 lg:p-2 leading-[130%] whitespace-nowrap md:font-bold">
              High-Converting
            </span>{" "}
            <br /> Digital Products for <br /> Businesses
          </h2>
          <p className="text-[#242424] text-base lg:text-lg font-inter">
            We build exceptional Websites and <br /> mobile apps for startups
            and Enterprises.
          </p>
        </div>

        <form
          action=""
          ref={formRef}
          onSubmit={sendEmail}
          className="flex md:w-[21.625rem] lg:flex-1 flex-col lg:flex-row lg:justify-between justify-center items-start lg:self-start self-stretch w-full md:mx-0 p-1 lg:py-1 lg:pl-0 lg:pr-1 md:py-1 md:px-2  border border-[#ABABAB] bg-white rounded-md focus-within:shadow-[0_1px_2px_0_rgba(48,48,48,0.30),0_1px_3px_1px_rgba(48,48,48,0.15)] focus-within:border-[#b8b7b8]"
        >
          <label htmlFor="Message" className="sr-only text-[#565656]">
            Send Message
          </label>
          <textarea
            name="Message"
            id="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Send us a message"
            required
            className="resize-none py-2 pl-3 pr-2 text-sm md:text-base font-inter justify-center lg:self-center items-center placeholder:text-[#a7a3a3] focus:placeholder-transparent h-8 outline-none md:h-10 align-middle self-stretch"
          ></textarea>
          <Buttons className={`md:self-stretch`} type="submit">
            Start Project
          </Buttons>
        </form>
        {status && <p className="text-sm text-green-600 mt-2 px-4">{status}</p>}
      </section>
      <section className="hidden md:flex justify-center items-cente absolute lg:right-[11rem] lt:right-[0.688rem] md:right-[0.688rem] lg:top-[2rem] lt:top-[6.25rem] md:top-[6.25rem]">
        <picture>
          <img
            src="/Designer.svg"
            alt=""
            className="z-20 md:h-[16.7rem] md:w-[16.7rem] lt:h-[16.7rem] lt:w-[16.7rem] lg:h-[24.25rem] lg:w-[24.25rem] "
          />
        </picture>
      </section>
    </main>
  );
}

export default LandingHero;
