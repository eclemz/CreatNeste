import Hero from "../Components/Hero";
import Metrics from "../Components/Metrics";
import AboutPreview from "../Components/AboutPreview";
import ServiceCard from "../Components/ServiceCard";
import Benefits from "../Components/Benefits";
import Faq from "../Components/Faq";
import Testimonial from "../Components/Testimonial";
import ContactPreview from "../Components/ContactPreview";
import ProjectCard from "../Components/ProjectCard";

function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <AboutPreview />
      <ServiceCard showSection={true} />
      <Benefits showAll={false} showSection={false}/>
      <section className="flex flex-col justify-center items-center lg:py-16 lg:px-14 md:px-10 px-4 gap-4 lg:gap-8">
      <div className="flex flex-col justify-center items-center py-5 gap-3 self-stretch">
        <div className="flex justify-center items-center md:gap-2 md:py-2 md:px-4">
        <span className="font-inter text-xs md:text-sm md:font-bold font-semibold text-[#1D5ADD]">
          OUR SOFTWARE SOLUTIONS
        </span>
        </div>
        <h3 className="font-inter text-2xl md:text-[2rem] leading-10 font-semibold md:text-center md:self-stretch text-[#242424]">
          A Human-centered approach <br className="hidden md:block"/>to your IT challenges.
        </h3>
        </div>
        <ProjectCard showSection={false} />
      </section>
      <Faq />
      <Testimonial />
      <ContactPreview />
    </>
  );
}

export default Home;
