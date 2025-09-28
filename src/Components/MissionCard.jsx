import { missionCard } from "../Data/Data";
import { motion } from "framer-motion";

const cardOverlayVariants = {
  initial: {
    clipPath: "circle(10% at 100% 0%)",
  },
  hover: {
    clipPath: "circle(150% at 100% 0%)",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  tap: {
    clipPath: "circle(150% at 100% 0%)",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

// Create a parent variant to handle the state propagation
const cardVariants = {
  initial: {},
  hover: {},
  tap: {},
};

function MissionCard() {
  return (
    <main className="grid lt:grid lg:flex lg:flex-col grid-cols-1 lt:grid-cols-2 md:grid-cols-2 justify-center lg:items-start items-center self-stretch lg:gap-6 md:gap-5 gap-4 pt-10 pb-5 md:px-10 px-4 lg:py-16 lg:px-14 ">
      <section className="flex md:flex-1 lt:flex-1 lt:flex-col lt:min-h-[120px] lg:flex-row h-full lg:gap-x-60 flex-col lg:justify-between justify-center items-start lg:self-stretch lt:items-start lg:items-center py-5 lt:gap-5 gap-4 ">
        <div className="flex flex-col items-start md:justify-between justify-center gap-2 lt:gap-3">
          <span className="font-inter text-xs lg:font-semibold md:font-bold font-semibold text-[#1D5ADD]">
            ABOUT US
          </span>
          <h3 className="font-inter text-2xl md:text-[2rem] leading-[120%] font-semibold text-[#242424]">
            Meet the Team
          </h3>
        </div>
        <p className="flex font-inter text-base lg:text-lg lg:flex-1 text-[#475467]">
          Our team of diverse, passionate people that foster a{" "}
          <br className="md:hidden hidden lg:block" /> culture that empowers you
          to do your best work.
        </p>
      </section>

      {/* For Desktop */}
      <section className="md:hidden hidden lt:hidden lg:grid lg:grid-cols-3 lg:items-center lg:self-stretch lg:gap-6">
        {missionCard.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={index}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="relative flex group min-h-[14rem] flex-col h-full justify-center items-start self-stretch rounded-lg border border-[#F0F0F0] md:gap-3 gap-2 md:py-5 md:px-3 py-4 px-2 overflow-hidden"
              style={item.style}
            >
              <motion.div
                variants={cardOverlayVariants}
                className="absolute inset-0 z-0 rounded-lg bg-[#1D5ADD] pointer-events-none"
              />
              <div className="relative z-10 flex flex-grow items-center gap-2">
                <div className="flex h-7 w-7 md:h-8 md:w-8 p-2 justify-center items-center gap-[0.375rem] rounded-full bg-white text-[#1D5ADD]">
                  <Icon className="h-4 w-4 md:h-5 md:w-5 shrink-0" />
                </div>
                <span className="relative z-10 font-inter text-base md:text-lg font-semibold text-[#565656] group-hover:text-white transition-all duration-700 mix-blend-difference">
                  {item.title}
                </span>
              </div>
              <p className="relative z-10 flex-grow font-inter text-xs md:text-base group-hover:text-white transition-all duration-700 self-stretch">
                {item.desc}
              </p>
            </motion.article>
          );
        })}
      </section>

      {/* For Phones & Tablets */}
      <section className="lg:hidden grid grid-cols-1 lt:grid-cols-2 md:grid-cols-2 gap-4 lt:gap-6 w-full">
        {missionCard.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={index}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="relative flex flex-col h-full justify-center items-start self-stretch rounded-lg border border-[#F0F0F0] lt:gap-6 md:gap-3 gap-4 md:py-5 md:px-3 lt:py-6 lt:px-4 p-4 overflow-hidden"
              style={item.style}
            >
              <motion.div
                variants={cardOverlayVariants}
                className="absolute inset-0 z-0 rounded-lg bg-[#011843] pointer-events-none"
              />
              <div className="relative z-10 flex items-center self-start gap-2">
                <div className="flex h-7 w-7 md:h-8 md:w-8 p-2 justify-center items-center gap-[0.375rem] rounded-full bg-white text-[#1D5ADD]">
                  <Icon className="h-4 w-4 md:h-5 md:w-5 shrink-0" />
                </div>
                <span className="font-inter text-base md:text-lg font-semibold text-white mix-blend-difference">
                  {item.title}
                </span>
              </div>
              <p className="relative z-10 font-inter text-xs md:text-base text-white mix-blend-difference self-stretch">
                {item.desc}
              </p>
            </motion.article>
          );
        })}
      </section>
    </main>
  );
}

export default MissionCard;
