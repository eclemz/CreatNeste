
import { serviceCard } from "../Data/Data.js";
import { Buttons1 } from "./Buttons.jsx";

const ServiceCard = ({ showSection = false }) => {
  return (
    <main className="flex flex-col justify-center items-center md:self-stretch md:gap-5 gap-4 md:p-10 py-6 px-4">
    {showSection && (
        <>
        <section className="flex flex-col justify-center items-center md:items-start self-stretch gap-3">
            <span className="font-inter text-[#123787] text-sm font-semibold">Our Services</span>
            <h4 className="font-inter text-xl font-semibold">Our Software Solutions</h4>
            <p className="font-inter text-base text-[#565656] self-stretch leading-5">
              At CreatNeste, we empower businesses with solutions designed around their unique needs, our human-centered approach tackles your challenges with empathy and insight, bridging the gap between technology and user experience to delivering results that drive sustainable success.
            </p>
        </section>
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start self-stretch gap-4 md:gap-5">
      {serviceCard.map((item, index) => {
            const Icon = item.icon; 
            return (
        <article
          key={index}
          className="flex flex-col items-start justify-end self-stretch md:p-4 py-4 px-2 gap-4 rounded-lg bg-[#E8EFFC] shadow-md hover:shadow-lg transition"
        >
          <div className="flex py-4 px-3 rounded-[4px] text-3xl text-[white] bg-[#1D5ADD]">
            <Icon className="h-5 w-7"/>
          </div>
          <div className="flex flex-col p-1 items-start self-stretch gap-2">
           <h3 className="text-[#242424] font-semibold text-base md:text-lg font-inter">
            {item.title}
           </h3>
          <p className="text-sm md:text-base font-inter text-[#565656]">{item.desc}</p>
          </div>
          <Buttons1 className="md:py-3 py-2 px-4 text-[#1D5ADD]">
            Contact Us
          </Buttons1>
        </article>
      );
    })}
    </section>
    </>
    )}

    {!showSection && (
        <>
        {/* For Mobile */}
        <section className="flex flex-col justify-center items-center self-stretch gap-3">
            <span className="font-inter text-[#123787] text-sm font-semibold">Our Services</span>
            <h4 className="font-inter text-2xl md:text-3xl font-semibold">The Value we offer</h4>
        </section>
        <section className="md:hidden grid grid-cols-1 gap-6">
      {serviceCard.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-xl text-blue-600 mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm">{item.desc}</p>
          </div>
          <Buttons1 className="md:py-3 py-2 px-4 text-[#1D5ADD]">
            Contact Us
          </Buttons1>
        </div>
      ))}
    </section>

    {/* For Tablet and Desktop */}
    <section className="hidden md:flex flex-col gap-10 w-full">
        {serviceCard.map((item, index) => {
          const Icon = item.icon;
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${!isEven ? "md:flex-row-reverse" : ""} items-center gap-5 p-5 rounded-lg shadow-md md:gap-5`}
            >
              <div className="flex-1 flex flex-col items-start gap-5">
                <h3 className="text-[#242424] font-semibold text-lg font-inter">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base font-inter text-[#565656]">
                  {item.desc}
                </p>
                <Buttons1 className="md:py-3 py-2 px-4 text-[#1D5ADD] border-[0.5px] border-[#1D5ADD]">
                  Contact Us
                </Buttons1>
              </div>

              <picture className="flex-1">
                <img
                  src={item.image}
                  alt={item.title}
                  className="md:w-full h-64 md:h-72 object-cover rounded-xl shadow-md"
                />
              </picture>
            </div>
          );
        })}
      </section>
    </>
    )}
    </main>
  );
};

export default ServiceCard;
