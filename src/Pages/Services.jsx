import Benefits from "../Components/Benefits";
import Metrics from "../Components/Metrics"
import ServiceCard from "../Components/ServiceCard";
import Faq from "../Components/Faq";
import Testimonial from "../Components/Testimonial";
import ContactPreview from "../Components/ContactPreview";

function Services() {
  return (
    <main>
    <section className="relative flex flex-col justify-center bg-cover bg-center items-start gap-4 pt-[400px] pb-10 px-4" style={{ backgroundImage: `url('/background.jpg')` }}>
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center items-start self-stretch gap-2">
        <span className="font-inter text-xs text-white font-semibold">
          ALL-IN-ONE DIGITAL SOLUTIONS FOR ALL
        </span>
        <h3 className="font-inter text-2xl font-semibold self-stretch text-white">
          Premium Services Your business Can Count On
        </h3>
        <p className="font-inter text-sm text-[#EEEAEA] self-stretch">
            We ensure that your business achieves the best goals through our experience .
        </p>
      </div>
      <button className="relative z-10 flex py-2 px-4 justify-center bg-[#1D5ADD] rounded-md items-center gap-2 self-stretch text-white">
        Contact us
      </button>
    </section>
    <section className="flex flex-col gap-5">
    <Metrics />
      <ServiceCard />
      <Benefits showAll={true}/>
      <Faq />
      <Testimonial />
      <ContactPreview />
      </section>
      </main>
  );
}

export default Services;
