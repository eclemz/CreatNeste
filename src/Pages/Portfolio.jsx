import Testimonial from "../Components/Testimonial";
import ProjectCard from "../Components/ProjectCard";
import ContactPreview from "../Components/ContactPreview";
import { Buttons1, Buttons } from "../Components/Buttons";

function Portfolio() {
  
  return (
    <main className="md:mt-40 mt-28">
      <section className="flex flex-col md:flex-row justify-center md:justify-between md:items-center items-start gap-5 lg:pt-20 lg:pb-28 lg:px-14 md:pt-5 md:pb-20 md:px-10 py-20 px-4">
        <div className="flex-col flex items-start gap-4 md:gap-8 lg:shrink-0">
        <div className="flex md:flex-1 flex-col justify-center md:justify-normal items-start self-stretch md:gap-4 gap-2">
          <div className="md:flex md:flex-col md:items-start md:self-stretch md:gap-1 lg:gap-2">
          <span className="font-inter text-xs lg:text-sm md:font-bold lg:font-semibold text-[#1D5ADD] font-semibold">
            HERE, IMAGINATION MEETS EXECUTION
          </span>
          <h3 className="font-inter text-2xl md:text-4xl lg:text-5xl font-semibold self-stretch text-[#000]">
            Businesses where <br className="md:hidden hidden lg:block"/> our <br className="md:hidden block"/> Digital Solutions <br className="hidden md:block"/>  Made <br className="md:hidden block"/> an Impact
          </h3>
          </div>
          <p className="font-inter text-base text-[#000] self-stretch">
            Our courses and hands on practices have helped <br className="md:hidden block"/> beginners and
            professionals <br className="md:hidden hidden lg:block"/> alke to thrive in their respective fields.
          </p>
        </div>
        <Buttons className="py-2 md:py-3 px-4 bg-[#1D5ADD] md:rounded-md lg:h-12 rounded-md gap-2 md:self-start self-stretch text-white">
          See Projects
        </Buttons>
        </div>
        <picture className="hidden md:block">
          <img src="/portfolio.png" alt="" className="w-[26.07631rem] h-[20.25rem] flex "/>
        </picture>
      </section>

      <section className="flex flex-col justify-center items-center py-5 px-4 md:py-4 md:px-10 gap-2 md:self-stretch">
        <span className="font-inter text-xs md:font-bold font-semibold text-[#1D5ADD]">
            SOME OF OUR BEST PROJECTS
        </span>
        <h3 className="font-inter text-center md: text-2xl md:text-[1.75rem] font-semibold mb-2 text-[#242424]">
            See how we made a difference
        </h3>
        <ProjectCard showSection={true}/>
      </section>
      <Testimonial />
      <ContactPreview />
    </main>
  );
}

export default Portfolio;
