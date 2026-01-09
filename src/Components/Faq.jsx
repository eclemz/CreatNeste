import { useState, useMemo } from "react";
import { MdOutlineArrowDropDownCircle, MdOutlineSearch } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Buttons } from "./Buttons";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { faq } from "../Data/Data";

function Faq({ showSection = false, showSearchSection = false, faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract categories from FAQ data
  const categories = ["All", ...new Set(faq.map((item) => item.title))];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Search is handled by state, no additional logic needed
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchTerm(""); // Reset search when category changes
  };

  const displayFaqs = useMemo(() => {
    // If custom faqs are provided, use them
    if (faqs.length > 0) {
      return faqs;
    }

    // For home page, show limited FAQs
    if (showSection) {
      return faq.slice(0, 6);
    }

    // Start with all FAQs
    let filteredFaqs = [...faq];

    // Apply search filter if search term exists
    if (searchTerm.trim() !== "") {
      const searchLower = searchTerm.toLowerCase();
      filteredFaqs = filteredFaqs.filter(
        (item) =>
          item.question.toLowerCase().includes(searchLower) ||
          item.answer.toLowerCase().includes(searchLower)
      );
    }

    // Apply category filter if category is selected
    if (selectedCategory !== "All") {
      filteredFaqs = filteredFaqs.filter(
        (item) => item.title === selectedCategory
      );
    } else if (searchTerm.trim() === "") {
      // Only apply the "2 per category" rule when no search and no specific category
      const categories = [...new Set(faq.map((item) => item.title))];
      const faqsByCategory = {};

      // Group FAQs by category
      categories.forEach((category) => {
        faqsByCategory[category] = faq.filter(
          (item) => item.title === category
        );
      });

      // Take 2 from each category
      filteredFaqs = categories.flatMap((category) =>
        faqsByCategory[category].slice(0, 2)
      );
    }

    return filteredFaqs;
  }, [faqs, showSection, searchTerm, selectedCategory]);

  const renderFaqList = (faqList) => (
    <div className="flex flex-col justify-center items-center self-stretch p-1 md:py-4 md:gap-5 gap-3">
      {faqList.length > 0 ? (
        faqList.map((faqItem, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={`${faqItem.title}-${idx}-${faqItem.question}`}
              className="w-full"
            >
              <div className="flex flex-col items-start w-full rounded-lg md:self-stretch">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className={`flex w-full justify-between p-2 md:p-3 lg:py-2 lg:px-4 text-left text-base hover:shadow-md transition-all duration-300 font-semibold focus:outline-none rounded-[4px] ${
                    isOpen
                      ? "bg-white text-[#1D5ADD] hover:shadow-none"
                      : "bg-white text-[#313131] group"
                  }`}
                >
                  <span>{faqItem.question}</span>
                  <MdOutlineArrowDropDownCircle
                    className={`${
                      isOpen
                        ? "rotate-180 transform text-[#1D5ADD]"
                        : "text-[#313131] "
                    } h-5 w-5 lg:h-6 lg:w-6`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="w-full "
                    >
                      <p className="p-2 md:px-4 md:py-4 text-sm md:text-base lg:text-lg shadow-md text-[#565656]">
                        {faqItem.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })
      ) : (
        <div className="text-center text-[#565656] py-8">
          No FAQs found matching your search criteria.
        </div>
      )}

      {showSection && (
        <NavLink
          className="text-[#1D5ADD] text-sm md:text-base lg:text-base hover:scale-105 hover:font-medium transition-transform duration-300"
          to="/faqpage"
        >
          See more
        </NavLink>
      )}
    </div>
  );

  const renderSearchSection = () => (
    <section className="flex flex-col items-center self-stretch gap-10 mt-24 md:mt-[4.5rem] lg:mt-24 pt-[7.5rem] pb-6 px-4 md:py-16 md:px-10 lt:py-16 lt:px-10 lg:pt-[80px] lg:pb-[50px] lg:px-[300px] bg-[#EFEFF3]">
      <h2 className="font-inter self-stretch text-center text-2xl md:text-4xl lg:text-[40px] font-semibold text-[#3A3A3A] ">
        How can we help you today?
      </h2>
      <div className="flex flex-col items-center self-stretch gap-8 md:gap-3 lg:gap-6">
        <form
          onSubmit={handleSearchSubmit}
          className="flex flex-row justify-center items-start md:items-center self-stretch py-1 px-1 md:pr-1 md:pl-3 lg:pl-4 rounded-[4px] border-[0.5px] border-[#9A9A9A] bg-[#FFF] focus-within:shadow-[0_1px_2px_0_rgba(48,48,48,0.30),0_1px_3px_1px_rgba(48,48,48,0.15)] box-border"
        >
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Ask a question..."
            className="font-inter flex flex-col text-center md:text-start p-2 md:p-0 self-stretch w-full outline-none placeholder:text-[#a7a3a3] placeholder:text-base focus:placeholder-transparent "
          />
          {/* <Buttons type="submit" className="hover:scale-[1.01]">
            Search
          </Buttons> */}

          <div className="border-[#9A9A9A] font-inter items-center self-center md:self-auto py-2 px-3 md:py-3 md:px-4 md:gap-2 gap-1 md:text-base text-sm font-medium rounded-[0.25rem]">
            <MdOutlineSearch className="h-5 w-5 md:h-6 md:w-6 text-[#9A9A9A] justify-center" />
          </div>
        </form>
        <span className="font-inter text-center text-sm md:text-base text-[#4D4D4D]">
          Or choose a category to quickly find the help you need.
        </span>
      </div>
    </section>
  );

  const renderCategoryFilters = () => (
    <div className="w-full snap-x snap-mandatory overflow-x-scroll md:overflow-x-auto scrollbar-hide flex md:justify-between border-b-2 gap-2 border-[#F0F0F0]">
      {categories.map((cat, index) => (
        <button
          key={index}
          onClick={() => handleCategoryChange(cat)}
          className={`flex md:flex-1 py-2 whitespace-nowrap justify-center items-center md:text-sm lg:text-base ${
            selectedCategory === cat
              ? "border-b-2 border-[#123787] font-semibold text-[#123787]"
              : "bg-white text-[#242424] hover:text-[#242424]/50"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );

  return (
    <main className="w-full flex flex-col items-center gap-6">
      {/* Search Section - Only show when showSearchSection is true */}
      {showSearchSection && renderSearchSection()}

      {/* Category Filters - Only show when showSearchSection is true */}
      {showSearchSection && (
        <section className="w-full flex flex-col items-center py-6 px-4 md:py-10 md:px-[7.5rem] lg:py-10 lg:px-60 gap-4 md:gap-6 lg:gap-8">
          {renderCategoryFilters()}
          {renderFaqList(displayFaqs)}
        </section>
      )}

      {/* Home Page Section - Only show when showSection is true */}
      {showSection && (
        <>
          <div className="flex flex-col items-center justify-center self-stretch gap-1 md:gap-4 lg:gap-8">
            <div className="flex flex-col justify-center items-center self-stretch gap-2 lg:gap-4">
              <span className="font-inter text-xs md:text-sm font-semibold text-[#1D5ADD]">
                FAQs
              </span>
              <h4 className="font-inter text-xl md:text-[2rem] text-center font-semibold text-[#242424]">
                How can we help you today?
              </h4>
            </div>
            <p className="font-inter text-sm md:text-base lg:text-lg text-center text-[#475467] ">
              Here is everything you need to know about our services.
            </p>
            <div className="w-full xl:border rounded-3xl lg:pt-11 lg:pb-7 lg:px-5 bg-[#FFF] border-[#4376E3]">
              {renderFaqList(displayFaqs)}
            </div>
          </div>
        </>
      )}

      {/* Home Page Call to Action */}
      {showSection && (
        <section className="hidden md:flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <span className="font-inter lg:text-lg font-semibold text-[#242424]">
              Do you still have questions?
            </span>
            <h3 className="font-inter lg:text-base text-center text-[#565656]">
              Whether it's a question, feedback or assistance you seek, we're
              here to listen and assist.
            </h3>
          </div>
          <Buttons className="flex-1 w-[24.75rem]">
            <TfiHeadphoneAlt className="h-6 w-4" />
            Give us a call
          </Buttons>
        </section>
      )}
    </main>
  );
}

export default Faq;
