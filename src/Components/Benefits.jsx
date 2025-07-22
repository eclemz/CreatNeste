import { div } from "framer-motion/client"
import { benefits } from "../Data/Data"

function Benefits({ showAll=false }) {
  return (
    <main className='flex flex-col py-6 px-4 justify-center items-start gap-6'>
        <picture className="flex items-center w-full justify-center">
        <img src="/Subtract1.png" alt="" className="flex self-center h-[25rem] w-[24rem]"/>
       </picture>

       <section className='flex flex-col justify-center items-start gap-4 py-2'>
        <div className='flex flex-col justify-center items-start self-stretch gap-3'>
            <span className='font-inter text-sm font-semibold text-[#1D5ADD]'>
                Benefits
            </span>
            <h4 className='font-inter text-xl font-semibold text-[#242424]'>
                A digital agency with added value.
            </h4>
        </div>
       </section>

       <section className="flex flex-col items-start gap-2 self-stretch">
        {(showAll ? benefits : benefits.slice(0, 3)).map((item, index) => (
        <div key={index} className="flex flex-col items-start self-stretch gap-2 py-2">
            <h1 className="font-inter text-base font-semibold text-[#313131]">
                {item.title}
            </h1>
            <p className="font-inter text-sm ">
                {item.desc}
            </p>
        </div>
     ))}
       </section>
       {!showAll && (
        <button className="flex bg-white border-[0.5px] rounded-[4px] border-[#1D5ADD] py-2 px-3 justify-center items-center self-stretch gap-2">Learn More</button>
       )}
    </main>
  )
}

export default Benefits