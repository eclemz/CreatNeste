
import { serviceCard } from "../Data/Data.js";
import { Buttons1 } from "./Buttons.jsx";

const ServiceCard = ({ showSection = false }) => {
  return (
    <main className="flex flex-col justify-center items-center md:self-stretch lg:gap-8 md:gap-5 gap-4 lg:py-16 lg:px-14 md:px-10 md:py-10 py-6 px-4">
    {showSection && (
        <>
        <section className="flex flex-col lt:flex-col lg:flex-row justify-center items-center md:items-start self-stretch gap-3">
          <div className="flex flex-col items-start justify-center md:gap-2 lg:gap-3 lg:flex-1">
            <span className="font-inter text-[#123787] text-sm font-semibold">Our Services</span>
            <h4 className="font-inter text-xl lg:text-3xl text-[#242424] font-semibold">Our Software Solutions
            </h4>
            </div>
            <p className="font-inter text-base lg:text-lg lg:flex-1 text-[#565656] self-stretch leading-5">
              At CreatNeste, we empower businesses with solutions designed <br className="lt:hidden md:hidden hidden lg:block"/> around their unique needs, our human-centered approach tackles <br className="lt:hidden md:hidden hidden lg:block"/> your challenges with empathy and insight, bridging the gap  between <br className="lt:hidden md:hidden hidden lg:block"/> technology and user experience to delivering results that drive <br className="lt:hidden md:hidden hidden lg:block"/> sustainable success.
            </p>
        </section>
    <section className="grid grid-cols-1 md:grid-cols-2 lt:grid-cols-2 lg:grid-cols-3 justify-center items-start self-stretch gap-4 md:gap-5 lg:gap-6">
      {serviceCard.map((item, index) => {
            const Icon = item.icon; 
            return (
        <article
          key={index}
          className="flex flex-col lg:flex-1 items-start justify-end self-stretch md:p-4 py-4 px-2 gap-4 rounded-lg bg-[#E8EFFC] shadow-md hover:shadow-lg transition"
        >
          <i className="flex py-4 px-3 rounded-[0.25rem] lg:gap-2 text-3xl text-white [#E8EFFC] bg-[#1D5ADD]">
            <Icon className="h-5 w-7"/>
          </i>
          <div className="flex flex-col p-1 items-start self-stretch gap-2">
           <h3 className="text-[#242424] font-semibold text-base md:text-lg font-inter">
            {item.title}
           </h3>
          <p className="text-sm md:text-base font-inter lg:self-stretch text-[#565656]">{item.desc}</p>
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
            <h3 className="font-semibold text-base text-[#242424] mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm">{item.desc}</p>
          </div>
          <Buttons1 className="md:py-3 py-2 px-4 text-[#1D5ADD]">
            Contact Us
          </Buttons1>
        </div>
      ))}
    </section>

    {/* For Tablet and Desktop */}
    <section className="hidden md:flex flex-col lg:gap-10 md:gap-5 self-stretch w-full">
        {serviceCard.map((item, index) => {
          const Icon = item.icon;
          const isEven = index % 2 === 0;

          return (
            <article
              key={index}
              className={`flex flex-col md:flex-row ${!isEven ? "md:flex-row-reverse" : ""} lg:items-center md:items-start gap-5 p-5 rounded-lg md:gap-6 lg:py-5 lg:px-0 lg:gap-10`}
            >
              <div className="flex-1 flex flex-col items-start gap-5 lg:gap-6 lg:self-stretch">
                <div className="flex flex-col items-start justify-center lg:gap-3 lg:py-3 ">
                <h3 className="text-[#242424] font-semibold text-lg lg:text-xl font-inter">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base font-inter text-[#565656]">
                  {item.desc}
                </p>
                </div>
                <Buttons1 className="md:py-3 py-2 px-4 text-[#1D5ADD] border-[0.5px] border-[#1D5ADD]">
                  Contact Us
                </Buttons1>
              </div>

              <picture className="flex-1">
                <img
                  src={item.image}
                  alt={item.title}
                  className="md:w-full h-64 md:h-72 lg:h-[21.5625rem] lg:flex-1 object-cover rounded-xl"
                />
              </picture>
            </article>
          );
        })}
      </section>
    </>
    )}
    </main>
  );
};

export default ServiceCard;
