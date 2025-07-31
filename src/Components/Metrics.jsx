import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { useState, useEffect } from "react";

function Metrics() {
  const [showCounter, setShowCounter] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    setShowCounter(inView);
  }, [inView]);

  const countUpEaseOut = (t, b, c, d) => {
  t /= d;
  return -c * t * (t - 2) + b;
};


  return (
    <main
      ref={ref}
      className="flex flex-col justify-center items-center md:self-stretch gap-4 lg:gap-8 bg-white py-6 md:px-10 lg:py-16 lg:px-14 px-4"
    >
      <section className="flex flex-col justify-center items-center md:gap-2 gap-1">
        <h2 className="font-inter text-xs md:font-bold font-semibold text-[#1D5ADD]">
          OUR SOFTWARE SOLUTIONS
        </h2>
        <h3 className="font-inter text-xl md:text-3xl lg:text-4xl font-semibold text-black">
          Our Impact
        </h3>
      </section>

      <ul className="flex flex-col md:flex-row items-start md:justify-center md:item-center gap-3 md:gap-9 p-6 md:p-5 lg:pt-6 self-stretch rounded-xl md:rounded-2xl bg-[#1D5ADD]">
        <li className="flex flex-col justify-center items-center self-stretch gap-1 lg:p-2">
          <h3 className="text-[#F0F0F0] text-center font-inter text-2xl md:text-4xl lg:text-5xl font-semibold">
            {showCounter && <CountUp start={0} end={10} duration={2} delay={0.2} suffix="+" easingFn={countUpEaseOut}  />}
          </h3>
          <p className="text-white font-inter text-base text-center">
            Completed Projects
          </p>
        </li>
        <li className="flex flex-col justify-center items-center self-stretch gap-1">
          <h3 className="text-[#F0F0F0] align-middle font-inter text-2xl md:text-4xl lg:text-5xl font-semibold">
            {showCounter && <CountUp start={0} end={15} duration={2} delay={0.2} suffix="+" easingFn={countUpEaseOut}  />}
          </h3>
          <p className="text-white font-inter text-base text-center">
            Happy Clients
          </p>
        </li>
        <li className="flex flex-col justify-center items-center self-stretch gap-1">
          <h3 className="text-[#F0F0F0] text-center font-inter text-2xl md:text-4xl lg:text-5xl font-semibold">
            {showCounter && <CountUp start={0} end={6} duration={2} delay={0.2} suffix="+" easingFn={countUpEaseOut}  />}
          </h3>
          <p className="text-[#F0F0F0] font-inter text-base text-center">
            Industry Experts
          </p>
        </li>
        <li className="flex flex-col justify-center items-center self-stretch gap-1">
          <h3 className="text-[#F0F0F0] text-center font-inter text-2xl md:text-4xl lg:text-5xl font-semibold">
            {showCounter && <CountUp start={0} end={12} duration={2} delay={0.2} suffix="+" easingFn={countUpEaseOut}  />}
          </h3>
          <p className="text-[#F0F0F0] font-inter text-base text-center">
            Happy Clients
          </p>
        </li>
      </ul>
    </main>
  );
}

export default Metrics;
