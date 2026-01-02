import Testimonial from "../Components/Testimonial";
import ProjectCard from "../Components/ProjectCard";
import ContactPreview from "../Components/ContactPreview";
import Hero from "../Components/Hero";

function Portfolio() {
  return (
    <main>
      <Hero
        bgImage={"/background.jpg"}
        overline="HERE, IMAGINATION MEETS EXECUTION"
        title={
          <>
            We create <br /> solutions that drive <br /> positive results.
          </>
        }
        subtitle={
          <>
            We’ve delivered digital solutions for businesses across <br />
            Industries like yours in Nigeria.
          </>
        }
        ctaText="Work with us"
        ctaAction={() => console.log("See Projects clicked")}
      />

      <section className="flex flex-col justify-center items-center py-5 px-4 md:py-4 md:px-10 gap-2 md:self-stretch">
        <span className="font-inter text-xs md:font-bold font-semibold text-[#1D5ADD]">
          SOME OF OUR BEST PROJECTS
        </span>
        <h3 className="font-inter text-center md: text-2xl md:text-[1.75rem] font-semibold mb-2 text-[#242424]">
          See how we made a difference
        </h3>
        <ProjectCard showSection={true} />
      </section>
      <Testimonial />
      <ContactPreview />
    </main>
  );
}

export default Portfolio;
