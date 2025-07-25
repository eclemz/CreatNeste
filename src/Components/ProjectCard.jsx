import { projectCard } from "../Data/Data"
import { Buttons1 } from "./Buttons"
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { useState } from "react";

function ProjectCard( {showSection = false} ) {


    const [activeFilter, setActiveFilter] = useState("All");

  const titles = ["All", ...new Set(projectCard.map((item) => item.title))];

  const filteredProjects =
    activeFilter === "All"
      ? projectCard
      : projectCard.filter((item) => item.title === activeFilter);
      
  return (

    <section className="gap-9 flex flex-col">

   {showSection && ( <div className="flex flex-wrap justify-between items-center bg-[#FFF] shadow-md rounded-xl border border-[#F0F0F0] md:gap-9 md:py-2 md:px-10 mx-10">
          {titles.map((title, index) => (
            <Buttons1
              key={index}
              className={`py-2 px-4 text-sm md:text-base font-inter rounded-md transition-all ${
                activeFilter === title
                  ? "bg-[#1D5ADD] text-white border-[#1D5ADD]"
                  : "border-[#CFCFCF] text-[#1D5ADD] hover:bg-[#F0F7FF]"
              }`}
              onClick={() => setActiveFilter(title)}
            >
              {title}
            </Buttons1>
          ))}
        </div>
        )}
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full justify-center items-center gap-4'>
        {filteredProjects.map((item, index) => (
            <article key={index} className='flex w-full flex-col justify-center border border-[#EBEBEB] rounded-lg items-center gap-1 pb-4'>
                <picture className='flex self-stretch w-full' >
                    <img src={item.image} alt="" className='rounded-t-lg flex self-stretch w-full'/>
                </picture>
                <div className='flex flex-col md:flex-row items-start md:items-end md:justify-between self-stretch px-3 gap-2'>
                    <div className='flex flex-col items-start self-stretch gap-1'>
                        <span className='font-inter text-base text-[#242424] leading-[1.125rem] md:leading-5 font-semibold self-stretch'>
                            {item.title}
                        </span>
                        <span className='font-inter text-sm md:text-base leading-4 md:leading-[1.125rem] text-[#565656] self-stretch '>
                            {item.name}
                        </span>
                    </div>
                    <Buttons1 className='hidden lg:block shadow-md hover:shadow-lg bg-[#F9E79F] py-2 px-4 text-sm md:text-base font-inter opacity-0 hover:opacity-100'>
                        <span className="font-inter text-base text-[#242424]">
                        View Project
                        </span>
                        <i className="flex justify-center items-center gap-2 w-6 h-6">
                        <IoArrowForwardCircleOutline className="shrink-0 h-6 w-6" />
                        </i>
                    </Buttons1>
                    <Buttons1 className='lg:hidden block bg-[#F9E79F] shadow-md  py-2 px-4 text-sm md:text-base font-inter md:self-start self-stretch'>
                        <span className="font-inter text-base text-[#242424]">
                        View Project
                        </span>
                        <i className="flex justify-center items-center gap-2 w-6 h-6">
                        <IoArrowForwardCircleOutline className="shrink-0 md:h-6 md:w-6 h-5 w-5" />
                        </i>
                    </Buttons1>
                </div>
            </article>
        ))}
    </section>
    </section>
  )
}

export default ProjectCard