import { faq } from "../Data/Data"
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FcCellPhone } from "react-icons/fc";
import { Buttons1 } from "./Buttons";

function Faq() {
  return (
    <main className='flex flex-col items-center py-6 px-4 md:py-14 md:px-28 gap-6'>
        <div className='flex flex-col items-center justify-center self-stretch gap-3 md:gap-4'>
        <div className="flex flex-col justify-center items-center self-stretch gap-2">
          <div className="flex justify-center items-center gap-2 py-2 px-4">
        <span className='font-inter text-xs md:text-sm font-semibold text-[#1D5ADD]'>FAQs</span>
        </div>
        <h4 className='font-inter text-xl md:text-[2rem] self-stretch text-center font-semibold text-[#242424]'>
            How can we help you today?
        </h4>
        </div>
        <p className="font-inter text-sm md:text-base text-center self-stretch text-[#475467] ">
          Here is everything you need to know about our services.
        </p>
        </div>

      
      <div className="flex flex-col justify-center items-center self-stretch p-1 md:py-4 md:gap-5 gap-3">
        {faq.map((faq, idx) => (
          <Disclosure key={idx}>
            {({ open }) => (
              <>
              <div className="flex flex-col items-start w-full rounded-lg md:self-stretch shadow-md">
                <Disclosure.Button className={`flex w-full justify-between self-stretch p-2 md:p-3 text-left text-base font-semibold focus:outline-none focus-visible:ring rounded-[4px]
                    ${
                      open ? 'bg-[#123787] text-white' : 'bg-[#F0F0F0] text-[#313131]'
                    }`}>
                  <span>{faq.question}</span>
                  <ChevronDownIcon
                    className={` ${
                      open ? 'rotate-180 transform text-white' : 'text-[#313131]'
                    } h-5 w-5 `}
                  />
                </Disclosure.Button>
                
                <Disclosure.Panel className="px-4 py-4 text-sm md:text-base text-[#565656]">
                  {faq.answer}
                </Disclosure.Panel>

              </div>
              <hr className="hidden md:block h-[0.0625rem] w-full bg-[#F0F0F0]"/>
              </>
            )}
          </Disclosure>
        ))}
      </div>

      <Buttons1 className={`py-2 px-4 gap-2`}>
        <span className="font-inter text-sm text-[#1D5ADD] shadow-none ">
          See more
        </span>
      </Buttons1>
      {/* <section className="flex flex-col justify-center items-center self-stretch gap-8">
        <div className="flex flex-col items-center self-stretch gap-4">
          <div className="flex flex-col items-center self-stretch gap-2">
            <span className="font-inter text-lg font-semibold text-[#242424]">
              Do you still have questions?
            </span>
          </div>
          <span className="font-inter text-base text-center text-[#565656]">
            Whether its a question, feedback or assistance you seek, We’re here to listen and assist.
          </span>
        </div>
        <div className="hidden md:flex lg:w-[24.75rem] justify-center items-center gap-8">
          <Buttons1 className={`border-[0.5px] border-[#1D5ADD] md:py-3 md:px-8 gap-2 flex-1 rounded-[0.25rem]`}>
            <div className="flex justify-center items-center h-6 w-6 gap-2">
            <FcCellPhone className="w-5 h-8 shrink-0"/>
            </div>
            <span className="text-base font-inter text-[#1D5ADD]">Give us a call</span>
          </Buttons1>
        </div>
      </section> */}
    </main>
  )
}

export default Faq