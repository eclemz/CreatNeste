import Benefits from "../Components/Benefits";
import ServiceCard from "../Components/ServiceCard";
import Faq from "../Components/Faq";
import Testimonial from "../Components/Testimonial";
import ContactPreview from "../Components/ContactPreview";
import Hero from "../Components/Hero";
import { AnimatePresence, motion } from "framer-motion";
import ServicesMarquee from "../Components/ServicesMarquee";

function Services() {
  return (
    <AnimatePresence>
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
          <ServiceCard />
          <ServicesMarquee />
          <Benefits showAll={true} showSection={true} />
          <section className="flex flex-col items-center relative xl:bg-[#E8EFFC] py-6 px-4 md:py-14 md:px-28 xl:py-16 xl:px-60 lt:px-28 lg:gap-8 gap-6">
            <picture className="hidden xl:block">
              <img
                src="/Star1.svg"
                className=" h-8 w-8 absolute right-[35rem] top-14 "
                alt=""
              />
              <img
                src="/Star1.svg"
                className=" h-7 w-7 absolute left-24 top-56 "
                alt=""
              />
              <img
                src="/Star1.svg"
                className=" h-8 w-8 absolute right-36 top-96 "
                alt=""
              />
              <img
                src="/Star1.svg"
                className=" h-10 w-10 absolute left-32 bottom-24 "
                alt=""
              />
            </picture>
            <Faq showSection={true} />
          </section>
          <Testimonial />
          <ContactPreview />
        </section>
      </motion.main>
    </AnimatePresence>
  );
}

export default Services;
