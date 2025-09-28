import React, { useState } from "react";
import { Buttons } from "../Components/Buttons";
import Faq from "../Components/Faq";
import { faq } from "../Data/Data";
import ContactPreview from "../Components/ContactPreview";

function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", ...new Set(faq.map((item) => item.title))];

  let filteredFaqs = [];

  if (selectedCategory === "All" && searchTerm.trim() === "") {
    // Group FAQs by category
    const grouped = faq.reduce((acc, item) => {
      if (!acc[item.title]) acc[item.title] = [];
      acc[item.title].push(item);
      return acc;
    }, {});

    // Pick 1 random FAQ from each category
    filteredFaqs = Object.values(grouped).map(
      (group) => group[Math.floor(Math.random() * group.length)]
    );
  } else {
    // Filter normally by category + search
    filteredFaqs = faq.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.title === selectedCategory;

      const matchesSearch =
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
  };

  return (
    <main>
      <section className="flex flex-col items-center self-stretch gap-10 mt-24 md:mt-[4.5rem] lg:mt-24 pt-[7.5rem] pb-6 px-4 md:py-16 md:px-10 lt:py-16 lt:px-10 lg:py-[100px] lg:px-[300px] bg-[#EFEFF3]">
        <h2 className="font-inter self-stretch text-center text-2xl md:text-4xl lg:text-[40px] font-semibold text-[#3A3A3A] ">
          How can we help you today?
        </h2>
        <div className="flex flex-col items-center self-stretch gap-8 md:gap-3 lg:gap-6">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row justify-center items-start md:items-center self-stretch py-1 px-1 md:pr-1 md:pl-3 lg:pl-4 rounded-[4px] border-[0.5px] border-[#9A9A9A] bg-[#FFF]"
          >
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Ask a question..."
              className="font-inter text-center md:text-start p-2 md:p-0 self-stretch w-full outline-none placeholder:text-[#a7a3a3] placeholder:text-base focus:placeholder-transparent"
            />
            <Buttons type="submit">Search</Buttons>
          </form>
          <span className="font-inter text-center text-sm md:text-base text-[#4D4D4D]">
            Or choose a category to quickly find the help you need.
          </span>
        </div>
      </section>

      <section className="w-full flex flex-col items-center py-6 px-4 md:py-10 md:px-[7.5rem] lt:py-10 lt:px-[7.5rem] lg:py-16 lg:px-60 gap-4 md:gap-6 lg:gap-8">
        <div className="w-full snap-x snap-mandatory overflow-x-scroll md:overflow-x-auto scrollbar-hide flex md:justify-between border-b-2 border-[#F0F0F0]">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedCategory(cat);
                setSearchTerm(""); // reset search when switching category
              }}
              className={`flex md:flex-1 p-2 whitespace-nowrap justify-center items-center md:text-sm lg:text-base ${
                selectedCategory === cat
                  ? "border-b-2 border-[#123787] font-semibold text-[#123787]"
                  : "bg-white text-[#242424] hover:text-[#242424]/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Passing filtered faqs directly */}
        <Faq faqs={filteredFaqs} />
      </section>

      <ContactPreview />
    </main>
  );
}

export default FaqPage;
