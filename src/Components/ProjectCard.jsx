import { projectCard } from "../Data/Data";
import { Buttons1 } from "./Buttons";
import { FiArrowUpRight } from "react-icons/fi";
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
    hover: {
      scale: 0.97,
      boxShadow: "0 10px 20px rgba(0,0,0,0.12), 0 6px 6px rgba(0,0,0,0.08)",
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="flex flex-col gap-4 md:gap-6 lg:gap-8 w-full">
      {showSection && (
        <div className="flex flex-nowrap overflow-x-auto md:flex-wrap md:overflow-visible no-scrollbar items-center bg-[#FFF] shadow-md rounded-lg md:rounded-xl border border-[#F0F0F0] gap-2 md:gap-9 p-2 md:py-5 md:px-16 mx-auto justify-center">
          {titles.map((title, index) => (
            <button
              key={index}
              className={` text-sm md:text-base py-2 px-4 font-inter transition-all duration-300 ${
                activeFilter === title
                  ? "bg-white text-[#1D5ADD] font-medium text-shadow-sm border-b-2 border-[#1D5ADD]"
                  : "border-none text-[#565656] font-normal hover:bg-[#F0F7FF]"
              }`}
              onClick={() => setActiveFilter(title)}
            >
              {title}
            </button>
          ))}
        </div>
      )}
      <section className="grid grid-cols-1 md:grid-cols-2 lt:grid-cols-3 xl:grid-cols-3 w-full gap-8 self-stretch lg:gap-6 py-2 lg:gap-y-10">
        <AnimatePresence initial={false}>
          {filteredProjects.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover="hover"
              layoutId={item.id}
              className="flex group flex-col border w-full border-[#EBEBEB] rounded-lg gap-1 pb-2 lg:pb-4 cursor-pointer"
            >
              <img
                src={item.image}
                alt=""
                className="rounded-t-lg flex flex-1 object-fill self-stretch w-full h-72 "
              />
              <div className="flex flex-col md:flex-row items-start md:items-end md:justify-between self-stretch py-1 px-3 gap-2">
                <div className="flex flex-1 flex-col items-start self-stretch gap-2 md:gap-1 lg:gap-2 py-2 md:py-0">
                  <span className="font-inter text-base lg:text-lg text-[#242424] leading-[1.125rem] md:leading-5 font-semibold self-stretch">
                    {item.title}
                  </span>
                  <span className="font-inter text-sm md:text-base leading-4 md:leading-[1.125rem] text-[#565656] self-stretch ">
                    {item.name}
                  </span>
                </div>

                <Buttons1 className="hidden lg:flex hover:bg-white hover:shadow-none border-none transition-all duration-700 self-end rounded-lg h-12 py-1 px-4 font-inter ">
                  <i className="flex justify-center items-center hover:shadow-lg hover:scale-105 gap-2 p-1 rounded-full bg-[#1D5ADD]">
                    <FiArrowUpRight className="shrink-0 h-6 w-6 text-white" />
                  </i>
                </Buttons1>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
}

export default ProjectCard;
