import { BsEnvelope } from "react-icons/bs";
import { RiMailSendLine } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Buttons, Buttons1 } from "./Buttons";

function ContactPreview() {
  return (
    <main
      className="flex flex-col justify-center items-center md:self-stretch md:py-16 md:px-16 py-6 px-4 gap-6 bg-white relative overflow-hidden"
      // style={{
      //   background:
      //     "linear-gradient(0deg, rgba(232, 239, 252, 0.96) 0%, rgba(232, 239, 252, 0.96) 100%), url('/bluepattern.png') lightgray 50% / cover no-repeat",
      // }}
    >
      <div className="hidden lg:flex">
        <img
          src="/Star.svg"
          className="md:h-60 md:w-60 lg:h-[9rem] lg:w-[9rem] absolute right-[35.9rem] lg:right-[-1.5rem] lg:top-[-3rem] md:top-[10.5625rem] md:right-[21rem] lt:top-[7rem] lt:right-[19rem] top-[5.2rem]"
          alt=""
        />
        <img
          src="/Star.svg"
          className="h-10 w-10  absolute right-[35.9rem] lg:left-[13.7rem] lg:bottom-[6.25rem] md:top-[10.5625rem] md:right-[21rem] lt:top-[7rem] lt:right-[19rem] top-[5.2rem]"
          alt=""
        />
      </div>
      <section className="flex flex-col justify-center md:self-center items-center md:gap-3 gap-2 self-stretch">
        <h4 className="font-inter text-xl md:text-3xl text-[#282828] text-center font-semibold">
          Need our Services?
        </h4>
        <p className="font-inter text-[#3A3A3A] text-sm md:text-base md:text-center md:self-center self-stretch">
          Whether its a question, feedback or assistance you seek, <br /> We’re
          here to listen and assist.
        </p>
      </section>
      <section className="flex flex-col md:flex-row justify-center items-center self-stretch gap-2 md:gap-8">
        <Buttons className="flex py-2 md:py-3 px-4 justify-center items-center self-stretch rounded-md gap-2 bg-[#1D5ADD] text-white">
          {/* <BsEnvelope /> */}
          <RiMailSendLine />
          <span className="font-inter text-sm">Send an Email</span>
        </Buttons>
        <Buttons1 className="flex py-2 md:py-3 px-4 justify-center items-center self-stretch rounded-md gap-2 text-[#1D5ADD] border border-[#1D5ADD]">
          <TfiHeadphoneAlt className="h-5 w-4" />
          <span className="font-inter text-sm">Give us a call</span>
        </Buttons1>
      </section>
    </main>
  );
}

export default ContactPreview;
