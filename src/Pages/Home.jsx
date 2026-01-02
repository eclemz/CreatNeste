import LandingHero from "../Components/LandingHero";
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
    <main className="gap-20">
      <LandingHero />
      <Metrics />
      <AboutPreview />
      <ServiceCard showSection={true} />
      <Benefits showAll={false} showSection={false} />
      <section className="flex flex-col justify-center items-center lg:py-16 lg:px-14 md:px-10 px-4 gap-4 lg:gap-8">
        <div className="flex flex-col justify-center items-center py-5 gap-3 self-stretch">
          <div className="flex justify-center items-center md:gap-2 md:py-2 md:px-4">
            <span className="font-inter text-xs md:text-sm md:font-bold font-semibold text-[#1D5ADD]">
              OUR SOFTWARE SOLUTIONS
            </span>
          </div>
          <h3 className="font-inter text-2xl md:text-[2rem] leading-7 md:leading-10 font-semibold md:text-center md:self-stretch text-[#242424]">
            A Human-centered approach <br className="hidden md:block" />
            to your IT challenges.
          </h3>
        </div>
        <ProjectCard showSection={false} />
      </section>
      <section className="flex flex-col items-center relative lg:bg-[#E8EFFC] py-6 px-4 md:py-14 md:px-28 lg:py-16 lg:px-60 lg:gap-8 gap-6">
        <img
          src="/Star1.svg"
          className="hidden lg:block h-8 w-8 absolute right-[35rem] top-14 "
          alt=""
        />
        <img
          src="/Star1.svg"
          className="hidden lg:block h-7 w-7 absolute left-24 top-56 "
          alt=""
        />
        <img
          src="/Star1.svg"
          className="hidden lg:block h-8 w-8 absolute right-36 top-96 "
          alt=""
        />
        <img
          src="/Star1.svg"
          className="hidden lg:block h-10 w-10 absolute left-32 bottom-24 "
          alt=""
        />
        <Faq showSection={true} showSearchSection={false} />
      </section>
      <Testimonial />
      <ContactPreview />
    </main>
  );
}

export default Home;
