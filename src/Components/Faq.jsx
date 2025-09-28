import { useState } from "react";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Buttons } from "./Buttons";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Faq({ showSection = false, faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="w-full flex flex-col items-center gap-6">
      {showSection && (
        <>
          {/* Heading section */}
          <div className="flex flex-col items-center justify-center self-stretch gap-1 md:gap-4 lg:gap-8">
            <div className="flex flex-col justify-center items-center self-stretch gap-2 lg:gap-4">
              <span className="font-inter text-xs md:text-sm font-semibold text-[#1D5ADD]">
                FAQs
              </span>
              <h4 className="font-inter text-xl md:text-[2rem] text-center font-semibold text-[#242424]">
                How can we help you today?
              </h4>
            </div>
            <p className="font-inter text-sm md:text-base lg:text-lg text-center text-[#475467] ">
              Here is everything you need to know about our services.
            </p>
          </div>
        </>
      )}

      {/* FAQ List */}
      <div className="flex flex-col justify-center items-center self-stretch p-1 md:py-4 md:gap-5 gap-3">
        {faqs.map((faqItem, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div key={idx} className="w-full">
              <div className="flex flex-col items-start w-full rounded-lg md:self-stretch">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className={`flex w-full justify-between p-2 md:p-3 lg:py-2 lg:px-4 text-left text-base font-semibold focus:outline-none rounded-[4px] ${
                    isOpen
                      ? "bg-[#123787] text-white"
                      : "bg-[#F0F0F0] text-[#313131]"
                  }`}
                >
                  <span>{faqItem.question}</span>
                  <MdOutlineArrowDropDownCircle
                    className={`${
                      isOpen
                        ? "rotate-180 transform text-white"
                        : "text-[#313131]"
                    } h-5 w-5 lg:h-6 lg:w-6`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="w-full "
                    >
                      <p className="px-4 py-4 text-sm md:text-base lg:text-lg shadow-md text-[#565656]">
                        {faqItem.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <hr className="hidden md:block h-[0.0625rem] w-full bg-[#F0F0F0]" />
            </motion.div>
          );
        })}

        {showSection && (
          <NavLink
            className="text-[#1D5ADD] text-sm md:text-base lg:text-base hover:scale-105 hover:font-medium transition-transform duration-300"
            to="/faqpage"
          >
            See more
          </NavLink>
        )}
      </div>

      {showSection && (
        <section className="flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <span className="font-inter lg:text-lg font-semibold text-[#242424]">
              Do you still have questions?
            </span>
            <h3 className="font-inter lg:text-base text-center text-[#565656]">
              Whether it's a question, feedback or assistance you seek, we’re
              here to listen and assist.
            </h3>
          </div>
          <Buttons className="lg:h-12 h-10 rounded-md text-white bg-[#1D5ADD] py-3 px-4 flex items-center gap-2">
            <TfiHeadphoneAlt className="h-6 w-4" />
            Give us a call
          </Buttons>
        </section>
      )}
    </main>
  );
}

export default Faq;
