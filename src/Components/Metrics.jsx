import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CountUp from "react-countup";

function Metrics({
  title = "OUR SOFTWARE SOLUTIONS",
  subtitle = "Our Impact",
  metrics = [],
  threshold = 0.5,
  once = true,
  className = "",
}) {
  const [hasAnimated, setHasAnimated] = useState(false);

  const { ref: listRef, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className={`flex flex-col justify-center items-center gap-6 bg-white px-4 py-10 ${className}`}
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-1">
        <h2 className="font-inter text-xs md:text-sm font-semibold text-[#1D5ADD] uppercase">
          {title}
        </h2>
        <h3 className="font-inter text-xl md:text-3xl lg:text-4xl font-semibold text-black">
          {subtitle}
        </h3>
      </div>

      {/* Metrics */}
      <motion.ul
        ref={listRef}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.25 } },
        }}
        className="flex flex-col md:flex-row gap-6 md:gap-10 p-6 rounded-xl md:rounded-2xl bg-[#1D5ADD] w-full max-w-5xl justify-center"
      >
        {metrics.map((metric, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center gap-1 text-center"
          >
            <h4 className="text-[#F0F0F0] font-inter text-3xl md:text-4xl lg:text-5xl font-semibold">
              {inView && (
                <CountUp
                  end={metric.value}
                  duration={2}
                  delay={index * 0.2}
                  suffix="+"
                />
              )}
            </h4>

            <p className="text-white font-inter text-base">{metric.label}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

export default Metrics;
