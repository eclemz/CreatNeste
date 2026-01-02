import Benefits from "../Components/Benefits";
import Metrics from "../Components/Metrics";
import ServiceCard from "../Components/ServiceCard";
import Faq from "../Components/Faq";
import Testimonial from "../Components/Testimonial";
import ContactPreview from "../Components/ContactPreview";
import Hero from "../Components/Hero";
import { motion } from "framer-motion";

function Services() {
  return (
    <motion.main className="flex flex-col gap-5">
      <Hero
        bgImage={"/background.jpg"}
        overline="ALL IN ONE DIGITAL SOLUTIONS"
        title={
          <>
            Tailored Digital <br />
            Solutions for Businesses <br />
            in Nigeria
          </>
        }
        subtitle={
          <>
            We blend creativity, strategy, and technology to solve real <br />
            business problems ensuring that your business achieves <br /> the
            best goals through our experience .
          </>
        }
        ctaText="Work with us"
        ctaAction={() => console.log("See Projects clicked")}
      />
      <section>
        <Metrics />
        <ServiceCard />
        <Benefits showAll={true} showSection={true} />
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
          <Faq showSection={true} />
        </section>
        <Testimonial />
        <ContactPreview />
      </section>
    </motion.main>
  );
}

export default Services;
