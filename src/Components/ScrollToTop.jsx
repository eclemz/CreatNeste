import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  // Track scroll position for both visibility and progress
  useEffect(() => {
    const updateScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const totalScrollable = scrollHeight - clientHeight;
      const scrolled = (scrollTop / totalScrollable) * 100;
      setScrollProgress(scrolled);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full bg-gray-400/50 text-white flex items-center justify-center shadow-md md:hidden transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="z-10" />
      <svg className="absolute inset-0 w-full h-full">
        <circle
          className="text-white/20"
          stroke="currentColor"
          strokeWidth="2"
          fill="transparent"
          r="22"
          cx="24"
          cy="24"
        />
        <circle
          className="text-white"
          stroke="currentColor"
          strokeWidth="2"
          fill="transparent"
          r="22"
          cx="24"
          cy="24"
          strokeDasharray={138}
          strokeDashoffset={138 - (138 * scrollProgress) / 100}
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}

export default ScrollToTop;
