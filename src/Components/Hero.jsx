function Hero() {
  return (
    <main className="flex flex-col  justify-center items-start gap-4 flex-1 pt-56 pb-10 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('/hero.png')` }}>
      <section className="flex flex-col py-5 px-4 justify-center bg-cover bg-center items-start gap-8 self-stretch" >
        <div className="flex flex-col items-start gap-1">
          <h1 className="font-inter text-xs font-semibold text-[#1D5ADD]">
            ALL-IN-ONE DIGITAL SOLUTIONS FOR ALL
          </h1>
          <h2 className="text-black text-[1.75rem] font-inter font-semibold">
            Building{" "}
            <span className="bg-[#F9E79F] text-[#1D5ADD] p-1 border border-[#988D61]">
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
            <button
                type="submit"
                className=" bg-[#1D5ADD] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors self-stretch"
            >
                Start Project
            </button>
        </form>
        
      </section>
    </main>
  );
}

export default Hero;
