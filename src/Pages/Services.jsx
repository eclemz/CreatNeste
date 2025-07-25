import Benefits from "../Components/Benefits";
import Metrics from "../Components/Metrics"
import ServiceCard from "../Components/ServiceCard";
import Faq from "../Components/Faq";
import Testimonial from "../Components/Testimonial";
import ContactPreview from "../Components/ContactPreview";
import { Buttons } from "../Components/Buttons";

function Services() {
  return (
    <main>
    <section className="relative flex flex-col justify-center bg-cover bg-center items-start md:self-stretch md:gap-8 gap-4 md:pt-[70px] md:px-10 md:pb-[100px] md:mt-20 pt-[400px] pb-10 px-4" style={{ backgroundImage: `url('/background.jpg')` }}>
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center md:justify-start md:self-start items-start self-stretch gap-2 md:gap-4">
        <span className="font-inter text-xs md:text-sm text-white font-semibold">
          ALL-IN-ONE DIGITAL SOLUTIONS FOR ALL
        </span>
        <h3 className="font-inter text-2xl md:text-[44px] leading-[52.8px] md:font-medium font-semibold md:self-start self-stretch text-white">
          Premium Services <br className="hidden md:block"/> Your business <br className="hidden md:block"/>  Can Count On
        </h3>
        <p className="font-inter text-sm md:text-base text-[#EEEAEA] self-stretch">
            We ensure that your business achieves the <br className="hidden md:block" /> best goals through our experience .
        </p>
      </div>
      <Buttons className="relative z-10 flex md:py-3 py-2 px-4 bg-[#1D5ADD] md:self-start self-stretch text-white">
        Contact us
      </Buttons>
    </section>
    <section className="flex flex-col gap-5">
    <Metrics />
      <ServiceCard />
      <Benefits showAll={true} showSection={true}/>
      <Faq />
      <Testimonial />
      <ContactPreview />
      </section>
      </main>
  );
}

export default Services;
