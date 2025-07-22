import { faq } from "../Data/Data"
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

function Faq() {
  return (
    <main className='flex flex-col items-center py-6 px-4 gap-6'>
        <div className='flex flex-col items-center justify-center self-stretch gap-3'>
        <span className='font-inter text-xs font-semibold text-[#1D5ADD]'>FAQs</span>
        <h4 className='font-inter text-xl font-semibold text-[#242424]'>
            How can we help you today?
        </h4>
        </div>

      
      <div className="flex flex-col justify-center items-center self-stretch p-1 gap-3">
        {faq.map((faq, idx) => (
          <Disclosure key={idx}>
            {({ open }) => (
              <div className="flex flex-col gap-4 items-start w-full rounded-lg shadow-md">
                <Disclosure.Button className={`flex w-full justify-between self-stretch p-2 text-left text-base font-semibold focus:outline-none focus-visible:ring rounded-[4px]
                    ${
                      open ? 'bg-[#123787] text-white' : 'bg-[#F0F0F0] text-[#313131]'
                    }`}>
                  <span>{faq.question}</span>
                  <ChevronUpIcon
                    className={` ${
                      open ? 'rotate-180 transform text-white' : 'text-[#313131]'
                    } h-5 w-5 `}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-4 pt-2 text-sm text-[#565656]">
                  {faq.answer}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </main>
  )
}

export default Faq