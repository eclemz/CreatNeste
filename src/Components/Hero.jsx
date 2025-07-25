import { Buttons } from "./Buttons";



function Hero() {
  return (
    <main className="flex flex-col relative justify-center items-start md:self-stretch md:gap-20 gap-4 flex-1 md:mt-20 md:pt-5 md:pb-20 pt-56 pb-10 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('/hero.png')` }}>
      <section className="flex flex-col py-5 px-4 md:pl-10 md:pr-5 justify-center bg-cover bg-center items-start gap-8 md:self-auto self-stretch" >
        <div className="flex flex-col items-start md:gap-4 gap-1">
          <span className="font-inter text-xs font-semibold md:font-bold text-[#1D5ADD]">
            ALL-IN-ONE DIGITAL SOLUTIONS FOR ALL
          </span>
          <h2 className="text-black text-[1.75rem] md:text-4xl font-inter font-semibold">
            Building{" "}
            <span className="bg-[#F9E79F] text-[#1D5ADD] p-1 md:font-bold border border-[#988D61]">
              High-Converting
            </span>{" "}
            <br /> Digital Products for <br /> Businesses
          </h2>
          <p className="text-black text-base font-inter">
            We build exceptional Websites and <br /> mobile apps for startups and
            Enterprises.
          </p>
        </div>
        
        <form action=""
        className="flex flex-col justify-center items-start self-stretch p-2 border border-[#ABABAB] bg-white rounded-md">
                <label htmlFor="Message" className="sr-only text-black">Send Message</label>
                <textarea name="Message" id="Message"
                placeholder="Send us a message"
                className="py-2 pl-3 pr-2 text-sm font-inter justify-center items-center placeholder:text-[#565656] h-10 align-middle self-stretch rounded-none"></textarea>
            <Buttons
                type="submit"
                className=" bg-[#1D5ADD] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors self-stretch"
            >
                Start Project
            </Buttons>
        </form>
      </section>
      <section className="hidden md:flex justify-center items-cente absolute right-[0.688rem] top-[6.25rem]">
        <picture>
          <img src="/Designer.png" alt="" className="h-[16.7rem] w-[16.7rem]" />
        </picture>
      </section>
    </main>
  );
}

export default Hero;
