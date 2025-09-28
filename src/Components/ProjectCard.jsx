import { projectCard } from "../Data/Data";
import { Buttons1 } from "./Buttons";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ProjectCard({ showSection = false }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const titles = ["All", ...new Set(projectCard.map((item) => item.title))];

  const filteredProjects =
    activeFilter === "All"
      ? projectCard
      : projectCard.filter((item) => item.title === activeFilter);

  const cardVariants = {
    initial: { opacity: 0, y: 24, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 16, scale: 0.98 },
    hover: { scale: 1.02, boxShadow: "0px 12px 30px rgba(16,24,40,0.08)" },
  };

  const buttonVariants = {
    initial: { opacity: 0, y: 12 },
    hover: { opacity: 1, y: 0, transition: { duration: 0.28 } },
  };

  return (
    <main className="flex flex-col gap-4 md:gap-6 lg:gap-8 px-">
      {showSection && (
        <div className="flex flex-nowrap overflow-x-auto md:flex-wrap md:overflow-visible no-scrollbar items-center bg-[#FFF] shadow-md rounded-lg md:rounded-xl border border-[#F0F0F0] gap-2 md:gap-9 p-2 md:py-2 md:px-10 mx-auto">
          {titles.map((title, index) => (
            <Buttons1
              key={index}
              className={` text-sm md:text-base p-2 font-inter h-8 lg:h-10 rounded-md transition-all duration-300 ${
                activeFilter === title
                  ? "bg-white text-[#1D5ADD] hover:font-semibold font-semibold "
                  : "border-[#CFCFCF] text-[#565656] hover:bg-[#F0F7FF]"
              }`}
              onClick={() => setActiveFilter(title)}
            >
              {title}
            </Buttons1>
          ))}
        </div>
      )}
      <motion.section
        layout
        className="grid grid-cols-1 md:grid-cols-2 lt:grid-cols-2 lg:grid-cols-3 w-full justify-center self-stretch items-center gap-8 lg:gap-6 md:py-8 lg:py-5 py-2 lg:gap-y-10"
      >
        <AnimatePresence initial={false}>
          {filteredProjects.map((item, index) => (
            <motion.article
              key={index}
              layout
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover="hover"
              className="flex group lg:w-[430px] w-full md:w-full flex-col justify-center border border-[#EBEBEB] rounded-lg items-center gap-1 pb-4"
            >
              <picture className="flex self-stretch w-full">
                <img
                  src={item.image}
                  alt=""
                  className="rounded-t-lg flex self-stretch w-full"
                />
              </picture>
              <div className="flex flex-col md:flex-row items-start md:items-end md:justify-between self-stretch py-1 px-3 gap-2">
                <div className="flex flex-1 flex-col items-start self-stretch gap-2 md:gap-1 lg:gap-2 py-2 md:py-0">
                  <span className="font-inter text-base lg:text-lg text-[#242424] leading-[1.125rem] md:leading-5 font-semibold self-stretch">
                    {item.title}
                  </span>
                  <span className="font-inter text-sm md:text-base leading-4 md:leading-[1.125rem] text-[#565656] self-stretch ">
                    {item.name}
                  </span>
                </div>

                <Buttons1 className="opacity-0 group-hover:opacity-100 hover:shadow-lg bg-[#F9E79F] transition-all duration-700 self-end rounded-lg h-12 py-1 px-4 font-inter ">
                  <span className="font-inter text-base text-[#242424]">
                    View Project
                  </span>
                  <i className="flex justify-center items-center gap-2 w-6 h-6">
                    <IoArrowForwardCircleOutline className="shrink-0 h-6 w-6" />
                  </i>
                </Buttons1>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.section>
    </main>
  );
}

export default ProjectCard;
