
import { serviceCard } from "../Data/Data.js";

const ServiceCard = ({ showSection = false }) => {
  return (
    <main className="flex flex-col justify-center items-center gap-4 py-6 px-4">
    {showSection && (
        <>
        <section className="flex flex-col justify-center items-center self-stretch gap-3">
            <span className="font-inter text-[#123787] text-sm font-semibold">Our Services</span>
            <h4 className="font-inter text-xl font-semibold">Our Software Solutions</h4>
        </section>
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start self-stretch gap-4">
      {serviceCard.map((item, index) => {
            const Icon = item.icon; 
            return (
        <div
          key={index}
          className="flex flex-col items-start justify-end self-stretch py-4 px-2 gap-4 rounded-lg bg-[#E8EFFC] shadow-md hover:shadow-lg transition"
        >
          <div className="flex py-4 px-3 rounded-[4px] text-3xl text-[white] bg-[#1D5ADD]">
            <Icon className="h-5 w-7"/>
          </div>
          <div className="flex flex-col p-1 items-start self-stretch gap-2">
           <h3 className="text-[#242424] font-semibold text-base font-inter">
            {item.title}
           </h3>
          <p className="text-sm font-inter  text-[#565656]">{item.desc}</p>
          </div>
          <button className="flex py-2 px-4 justify-center items-center gap-2 rounded-[4px]">
            Contact Us
          </button>
        </div>
      );
    })}
    </section>
    </>
    )}

    {!showSection && (
        <>
        <section className="flex flex-col justify-center items-center self-stretch gap-3">
            <span className="font-inter text-[#123787] text-sm font-semibold">Our Services</span>
            <h4 className="font-inter text-2xl font-semibold">The Value we offer</h4>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      ))}
    </section>
    </>
    )}
    </main>
  );
};

export default ServiceCard;
