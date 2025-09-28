import { BsEnvelope } from "react-icons/bs";
import { RiMailSendLine } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Buttons, Buttons1 } from "./Buttons";

function ContactPreview() {
  return (
    <main
      className="flex flex-col justify-center items-center md:self-stretch md:py-10 md:px-20 py-6 px-4 gap-6 bg-white"
      style={{
        background:
          "linear-gradient(0deg, rgba(232, 239, 252, 0.96) 0%, rgba(232, 239, 252, 0.96) 100%), url('/bluepattern.png') lightgray 50% / cover no-repeat",
      }}
    >
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
