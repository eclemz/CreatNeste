import { benefits } from "../Data/Data";
import { Buttons1 } from "./Buttons";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { easeBounceOut } from "d3-ease";

const cardOverlayVariants = {
  initial: {
    clipPath: "circle(0% at 100% 0%)", // Starts from top-right corner
  },
  hover: {
    clipPath: "circle(150% at 100% 0%)", // Expands to cover entire element
    transition: { duration: 0.6, ease: "easeOut" },
  },
  tap: {
    clipPath: "circle(150% at 100% 0%)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

const iconOverlayVariants = {
  initial: { height: "0%" },
  hover: {
    height: "100%",
    transition: { duration: 0.4, ease: easeBounceOut },
  },
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function Benefits({ showAll = false, showSection = false }) {
  const navigate = useNavigate();

  return (
    <>
      <main className="flex flex-col md:flex-row lg:py-[3.75rem] lg:px-14 md:p-10 py-6 px-4 md:justify-between justify-center items-start md:items-center lg:gap-6 md:gap-5 gap-6 lg:self-stretch">
        <AnimatePresence>
          <div className="flex flex-col md:flex-1 md:gap-6">
            {showSection && (
              <>
                <section className="flex flex-col justify-center items-start gap-4 py-2">
                  <div className="flex flex-col justify-center items-center self-stretch lg:gap-4 gap-3 md:gap-3">
                    <span className="font-inter text-xs md:text-sm md:font-bold font-semibold text-[#1D5ADD]">
                      Benefits
                    </span>
                    <h4 className="font-inter text-xl md:text-[28px] lg:text-[2rem] font-semibold text-[#242424] leading-9">
                      A digital agency with added value.
                    </h4>
                  </div>
                </section>

                <motion.section
                  variants={containerVariants}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
              items-start gap-2 md:gap-5 lg:gap-6 self-stretch"
                >
                  {(showAll ? benefits : benefits.slice(0, 3)).map(
                    (item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.article
                          key={index}
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.6, delay: index * 0.2 }}
                          whileHover="hover"
                          // whileTap="tap"
                          className="group relative flex md:flex-1 md:flex-col flex-row w-full md:min-h-[13rem] min-h-[9rem] md:items-center items-start self-stretch md:gap-4 gap-2 md:py-6 md:px-4 py-3 px-2 md:self-stretch transition-all duration-600 ease-linear rounded-lg border border-[#F0F0F0] bg-[#E8EFFC] lg:bg-[#FFF] overflow-hidden lg:hover:bg-[#E8EFFC] hover:border hover:border-[#1D5ADD]"
                        >
                          <motion.div
                            variants={cardOverlayVariants}
                            initial="initial"
                            className=" absolute inset-0 z-0 rounded-lg bg-[#3a70d6]"
                          />
                          <motion.i className="relative z-0 flex self-stretch md:self-center justify-center p-2 lg:h-14 lg:w-14 md:h-10 md:w-10 h-8 w-8 lg:p-4 lg:bg-[#E8EFFC] bg-[#FFFF] items-center lg:gap-[0.41rem] md:gap-1 gap-1 rounded-full">
                            <motion.div
                              variants={iconOverlayVariants}
                              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#1D5ADD] to-sky-400 z-0 rounded-full"
                            />
                            <Icon className="z-20 flex group-hover:text-white transition-all duration-700 text-[#1D5ADD] lg:h-6 lg:w-8 md:h-5 md:w-4 w-6 h-6" />
                          </motion.i>
                          <div className="flex gap-1 max-w-full md:gap-0 flex-col md:items-center items-start self-stretch">
                            <h1 className="font-inter text-start text-base md:text-lg lg:text-xl font-semibold md:text-center text-[#242424]">
                              {item.title}
                            </h1>
                            <p className="font-inter text-sm md:text-base md:self-stretch md:text-center text-[#565656] ">
                              {item.desc}
                            </p>
                          </div>
                        </motion.article>
                      );
                    }
                  )}
                </motion.section>
              </>
            )}
          </div>
        </AnimatePresence>
      </main>

      {/* Section For Home page */}
      {!showSection && (
        <section className="flex flex-col md:flex-row items-center self-stretch lg:gap-0 lt:gap-5 gap-5 py-2 px-4 md:p-10 lg:py-16 lg:px-14">
          <div className="flex flex-1 flex-col justify-center items-start gap-4 py-3 lg:py-6">
            <div className="flex flex-col items-start self-stretch gap-2 lg:gap-1">
              <div className="flex flex-col items-start justify-center self-stretch gap-1 md:gap-3">
                <div className="flex flex-col justify-center items-center lg:items-start self-stretch gap-2 lg:gap-3 ">
                  <span className="font-inter text-xs lg:text-sm font-bold text-[#1D5ADD] self-stretch">
                    BENEFITS
                  </span>
                </div>
                <h3 className="font-inter text-[2rem] text-[#242424] font-semibold self-stretch leading-9">
                  A digital agency with added
                  <br className="lt:hidden hidden lg:block" /> value.
                </h3>
              </div>
            </div>

            <div className="flex flex-col items-start self-stretch md:gap-2 gap-8">
              {(showAll ? benefits : benefits.slice(0, 3)).map(
                (item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start self-stretch rounded-lg md:py-3 gap-2 "
                  >
                    <h3 className="font-inter text-base md:text-lg lg:text-xl font-semibold text-[#313131]">
                      {item.title}
                    </h3>
                    <p className="font-inter text-sm lg:text-base md:self-stretch text-[#565656] ">
                      {item.desc}
                    </p>
                  </div>
                )
              )}
            </div>
            <Buttons1
              onClick={() => navigate("/services")}
              className="flex bg-white shadow-md h-10 hover:shadow-lg border border-[#1D5ADD] md:px-4 py-2 lg:py-3 px-3  md:self-start self-stretch gap-2 text-[#1D5ADD]"
            >
              Learn More
            </Buttons1>
          </div>
          <picture className="flex flex- md:h-[29.8rem] lg:h-[34.75rem] lg:w-[50%] items-center">
            <img
              src="/Subtract1.svg"
              alt=""
              className="flex self-center justify-center lg:h-[34.75rem] lg:w-[45rem] md:h-[29.8rem] md:w-[23rem] h-[22rem] w-[24rem]"
            />
          </picture>
        </section>
      )}
    </>
  );
}

export default Benefits;
