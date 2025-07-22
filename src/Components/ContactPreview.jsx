import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { FcCellPhone } from "react-icons/fc";

function ContactPreview() {
  return (
    <main className='flex flex-col justify-center items-center py-6 px-4 gap-6 bg-white'>
        <section className='flex flex-col justify-center items-center gap-2 self-stretch'>
            <h4 className='font-inter text-xl text-[#282828] text-center font-semibold'>
                Need our Services?
            </h4> 
            <p className='font-inter text-[#3A3A3A] text-sm self-stretch'>
                Whether its a question, feedback or assistance you seek, We’re here to listen and assist.
            </p>
        </section>
        <section className='flex flex-col justify-center items-center self-stretch gap-2'>
            <button className='flex py-2 px-4 justify-center items-center self-stretch rounded-md gap-2 bg-[#1D5ADD] text-white'>
                <PiEnvelopeSimpleThin />
                <span className="font-inter text-sm">
                    Send an Email
                </span>
            </button>
            <button className='flex py-2 px-4 justify-center items-center self-stretch rounded-md gap-2 text-[#1D5ADD] border border-[#1D5ADD]'>
                <FcCellPhone />
                <span className="font-inter text-sm">
                    Contact us
                </span>
            </button>
        </section>
        
    </main>
  )
}

export default ContactPreview