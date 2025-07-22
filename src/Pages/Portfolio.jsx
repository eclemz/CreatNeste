import Testimonial from "../Components/Testimonial";
import ProjectCard from "../Components/ProjectCard";
import ContactPreview from "../Components/ContactPreview";

function Portfolio() {
  return (
    <main className="mt-40">
      <section className="flex flex-col justify-center items-start gap-5 py-10 px-4">
        <div className="flex flex-col justify-center items-start self-stretch gap-2">
          <span className="font-inter text-xs text-[#1D5ADD] font-semibold">
            HERE, IMAGINATION MEETS EXECUTION
          </span>
          <h3 className="font-inter text-2xl font-semibold self-stretch text-[#242424]">
            Businesses where our Digital Solutions Made an Impact
          </h3>
          <p className="font-inter text-sm text-black self-stretch">
            Our courses and hands on practices have helped beginners and
            professionals alke to thrive in their respective fields.
          </p>
        </div>
        <button className="flex py-2 px-4 justify-center bg-[#1D5ADD] rounded-md items-center gap-2 self-stretch text-white">
          See Projects
        </button>
      </section>

      <section className="flex flex-col justify-center items-center py-5 px-4 gap-2">
        <span className="font-inter text-xs font-semibold text-[#1D5ADD]">
            SOME OF OUR BEST PROJECTS
        </span>
        <h3 className="font-inter text-2xl font-semibold text-[#242424]">
            See how we made a difference
        </h3>
        <ProjectCard />
      </section>
      <Testimonial />
      <ContactPreview />
    </main>
  );
}

export default Portfolio;
