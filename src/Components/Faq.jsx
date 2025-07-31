import { faq } from "../Data/Data";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Buttons1 } from "./Buttons";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="flex flex-col items-center py-6 px-4 md:py-14 md:px-28 lg:py-16 lg:px-40 lg:gap-8 gap-6">
      <div className="flex flex-col items-center justify-center self-stretch gap-3 md:gap-4 lg:gap-8">
        <div className="flex flex-col justify-center items-center self-stretch gap-2 lg:gap-4">
          <div className="flex justify-center items-center gap-2 py-2 px-4">
            <span className="font-inter text-xs md:text-sm font-semibold text-[#1D5ADD]">
              FAQs
            </span>
          </div>
          <h4 className="font-inter text-xl md:text-[2rem] self-stretch text-center font-semibold text-[#242424]">
            How can we help you today?
          </h4>
        </div>
        <p className="font-inter text-sm md:text-base lg:text-lg text-center self-stretch text-[#475467] ">
          Here is everything you need to know about our services.
        </p>
      </div>

       <div className="flex flex-col justify-center items-center self-stretch p-1 md:py-4 md:gap-5 gap-3">
        {faq.map((faqItem, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div key={idx} className="w-full">
              <div className="flex flex-col items-start w-full rounded-lg md:self-stretch">
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : idx)
                  }
                  className={`flex w-full justify-between self-stretch p-2 md:p-3 lg:py-2 lg:px-4 lg:gap-4 text-left text-base font-semibold focus:outline-none focus-visible:ring rounded-[4px]
                    ${
                      isOpen
                        ? "bg-[#123787] text-white"
                        : "bg-[#F0F0F0] text-[#313131]"
                    }`}
                >
                  <span>{faqItem.question}</span>
                  <ChevronDownIcon
                    className={`${
                      isOpen
                        ? "rotate-180 transform text-white"
                        : "text-[#313131]"
                    } h-5 w-5 lg:h-6 lg:w-6`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 py-4 text-sm md:text-base lg:text-lg shadow-md text-[#565656]">
                    {faqItem.answer}
                  </div>
                )}
              </div>
              <hr className="hidden md:block h-[0.0625rem] w-full bg-[#F0F0F0]" />
            </div>
          );
        })}
      </div>

      <section className="flex flex-col justify-center items-center self-stretch gap-8">
        <div className="flex flex-col items-start self-stretch gap-4">
          <div className="flex flex-col items-center self-stretch gap-2">
            <span className="self stretch font-inter lg:text-lg font-semibold text-[#242424]">
              Do you still have questions?
            </span>
          </div>
          <h3 className="font-inter lg:text-base self-stretch text-center text-[#565656]">
            Whether its a question, feedback or assistance you seek, We’re here to listen and assist.
          </h3>
        </div>
        <div className="flex justify-center items-center lg:gap-8">
          <Buttons1 className={`gap-2 flex-1 border text-[#FFFFFF] bg-[#1D5ADD] py-3 px-4`}>
            <i className="flex justify-center items-center gap-2 h-5 w-5 lg:h-6 lg:w-6">
              {/* <FcCellPhone /> */}
              {/* <SlEarphonesAlt  /> */}
              <TfiHeadphoneAlt className='h-6 w-4' />
            </i>
              Give us a call
          </Buttons1>
        </div>
      </section>

      <Buttons1 className={`md:hidden block py-2 px-4 gap-2`}>
        <span className="font-inter text-sm text-[#1D5ADD] shadow-none ">
          See more
        </span>
      </Buttons1>
    </main>
  );
}

export default Faq;
