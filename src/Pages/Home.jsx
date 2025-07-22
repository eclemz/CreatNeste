import Hero from "../Components/Hero"
import Metrics from "../Components/Metrics";
import AboutPreview from "../Components/AboutPreview";
import ServiceCard from "../Components/ServiceCard";
import Benefits from "../Components/Benefits";
import Faq from "../Components/Faq";
import Testimonial from "../Components/Testimonial";
import ContactPreview from "../Components/ContactPreview"

function Home() {
  return (
    <>
        <Hero />
        <Metrics />
        <AboutPreview />
        <ServiceCard showSection={true} />
        <Benefits showAll={false}/>
        <Faq />
        <Testimonial />
        <ContactPreview />
    </>
  )
}

export default Home