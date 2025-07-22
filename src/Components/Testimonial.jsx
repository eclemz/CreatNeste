import { useEffect, useState } from "react";
import { testimonial } from "../Data/Data";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";


const slideVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.6 } },
};

function Testimonial() {
    const [current, setCurrent] = useState(0);
  const total = testimonial.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, [total]);

  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + total) % total);
  const handleNext = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <main className='flex flex-col justify-center items-start py-6 px-4 gap-6'>
        <section className='flex flex-col justify-center items-start gap-2'>
            <div className='flex flex-col items-start self-stretch gap-1'>
                <span className='font-inter text-xs font-semibold text-[#1D5ADD]'>Testimonial</span>
                <h4 className='font-inter text-xl font-semibold text-[#242424]'>
                    See how we made a difference
                </h4>
            </div>
        </section>

        <section className="flex flex-col items-center gap-6 self-stretch mx-auto ">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-col justify-center items-start self-stretch gap-3  px-3 py-6 bg-white rounded-lg  border border-[#EBEBEB] shadow-md relative overflow-hidden"
        >
            <p className="text-[#242424] font-inter text-sm ">
              "{testimonial[current].desc}"
            </p>
            <div className="flex items-center gap-4">
                <picture>
                    <img
            src={testimonial[current].image}
            alt={testimonial[current].name}
            className="w-11 h-11 rounded-full object-cover shadow"
          />
                </picture>
                <div className="mt-3">
              <h4 className="text-lg font-semibold text-blue-600">
                {testimonial[current].name}
              </h4>
              <p className="text-sm text-gray-500">
                {testimonial[current].title}
              </p>
            </div>
            </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-4">
        <button
          onClick={handlePrev}
          className="bg-[#1D5ADD] border border-[#565656] justify-center items-center h-6 w-6 text-white p-[6px] hover:bg-blue-500"
        >
          <IoIosArrowRoundBack className="h-3 w-3" />
        </button>
        <button
          onClick={handleNext}
          className="bg-[#1D5ADD] border border-[#565656] justify-center items-center h-6 w-6 text-white p-[6px] hover:bg-blue-500"
        >
          <IoIosArrowRoundForward className="h-3 w-3" />
        </button>
      </div>
    </section>
    </main>
  )
}

export default Testimonial