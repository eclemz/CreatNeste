import Benefits from "../Components/Benefits";
import Metrics from "../Components/Metrics";
import ServiceCard from "../Components/ServiceCard";
import Faq from "../Components/Faq";
import Testimonial from "../Components/Testimonial";
import ContactPreview from "../Components/ContactPreview";
import { Buttons } from "../Components/Buttons";
import { motion } from "framer-motion";

function Services() {
  return (
    <motion.main>
      <section
        className="relative flex flex-col justify-center bg-cover bg-center items-start md:self-stretch  gap-8 lg:px-14 lg:pt-40 lg:pb-24 md:pt-16 md:px-10 md:pb-20 md:mt-20 lg:mt-24 pt-56 pb-10 px-4"
        style={{ backgroundImage: `url('/background.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex md:flex-1 flex-col justify-center md:justify-start md:self-start items-start self-stretch md:gap-4 gap-2">
          <div className="flex flex-col justify-center items-start self-stretch gap-1 lg:gap-2">
            <span className="font-inter text-xs md:text-sm text-white font-semibold">
              ALL-IN-ONE DIGITAL SOLUTIONS FOR ALL
            </span>
            <h3 className="font-inter text-2xl md:text-4xl lg:text-5xl leading-tight md:leading-[2.5rem] lg:leading-[3.5rem] font-semibold md:self-start self-stretch text-white">
              Premium Services <br /> Your business <br /> Can Count On
            </h3>
          </div>
          <p className="font-inter text-sm md:text-base text-[#EEEAEA] self-stretch">
            We ensure that your business achieves the best goals <br /> through
            our experience .
          </p>
        </div>
        <Buttons className="relative z-10">Contact us</Buttons>
      </section>
      <section className="flex flex-col gap-5">
        <Metrics />
        <ServiceCard />
        <Benefits showAll={true} showSection={true} />
        <section className="flex flex-col items-center py-6 px-4 md:py-14 md:px-28 lg:py-16 lg:px-60 lg:gap-8 gap-6">
          <Faq showSection={true} />
        </section>
        <Testimonial />
        <ContactPreview />
      </section>
    </motion.main>
  );
}

export default Services;
