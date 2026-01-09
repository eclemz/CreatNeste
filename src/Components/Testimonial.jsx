import { testimonial } from "../Data/Data";
import { useRef, useState, useEffect } from "react";

function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  let startX = 0;

  useEffect(() => {
    const ref = scrollRef.current;
    const cards = ref.querySelectorAll("article");

    const observer = new IntersectionObserver(
      (entries) => {
        // Get entry with the most visibility (intersectionRatio)
        const visibleEntry = entries.reduce((prev, current) =>
          prev.intersectionRatio > current.intersectionRatio ? prev : current
        );

        const visibleIndex = Array.from(cards).indexOf(visibleEntry.target);
        setActiveIndex(visibleIndex);
      },
      {
        root: ref,
        threshold: 0.6, // Trigger when 60% of a card is in view
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const scrollToIndex = (index) => {
    const cardWidth = scrollRef.current.firstChild.offsetWidth + 16;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <main className="flex flex-col justify-center relative items-center xl:py-16 xl:px-14 md:py-14 md:p-10 py-6 px-4 gap-6 xl:bg-[#E8EFFC]">
      <picture className="hidden xl:block">
        <img
          src="/Star1.svg"
          className="h-10 w-10  absolute left-52 top-6"
          alt=""
        />
        <img
          src="/Star1.svg"
          className="h-10 w-10 absolute right-72 top-14"
          alt=""
        />
        <img
          src="/Star1.svg"
          className="h-10 w-10 absolute right-24 bottom-10 "
          alt=""
        />
      </picture>
      {/* Section Heading */}
      <section className="flex flex-col justify-center items-center gap-2 lg:gap-5 lg:self-center">
        <div className="flex flex-col items-center self-stretch gap-1 md:gap-3 lg:justify-center">
          <span className="font-inter text-xs lg:text-sm font-semibold text-[#1D5ADD] md:py-1 md:px-2 rounded-lg">
            TESTIMONIAL
          </span>
          <div className="flex flex-col self-stretch items-center lg:justify-center">
            <h4 className="font-inter text-xl md:text-3xl lg:text-[2rem] font-semibold text-[#242424]">
              See how we made a difference
            </h4>
            <p className="text-base md:self-stretch text-[#475467]">
              Hear from some of our amazing customers who are automating their
              finances.
            </p>
          </div>
        </div>
      </section>

      {/* Scrollable Carousel */}
      <section className="w-full overflow-x-auto">
        <div
          ref={scrollRef}
          className="flex gap-4 snap-x snap-mandatory overflow-x-scroll scrollbar-hide overscroll-x-contain"
        >
          {testimonial.map((item, index) => (
            <article
              key={index}
              className="min-w-[90%] sm:min-w-[48%] lg:min-w-[31%] snap-start bg-white cursor-grab border border-[#EBEBEB] shadow-md rounded-lg px-4 py-6 lg:py-6 lg:px-5 flex flex-col lg:gap-3 justify-between"
            >
              <p className="text-[#242424] font-inter text-sm lg:text-base mb-4">
                "{item.desc}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover shadow"
                />
                <div>
                  <h4 className="text-lg lg:text-base font-semibold text-blue-600">
                    {item.name}
                  </h4>
                  <p className="text-sm lg:text-base text-gray-500">
                    {item.title}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Dots */}
      <section className="flex justify-center self-center mt-4 gap-2">
        {testimonial.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-[#1D5ADD]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </section>
    </main>
  );
}

export default Testimonial;
