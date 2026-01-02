import { useState } from "react";
import { ChevronDown } from "lucide-react";

const categories = [
  "All",
  "Design",
  "Development",
  "Research",
  "Presentation",
  "Marketing",
];

const sortOptions = ["Most recent", "Oldest", "Most Popular", "A–Z"];

export default function BlogFilter({ onCategoryChange, onSortChange }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sort, setSort] = useState("Most recent");
  const [open, setOpen] = useState(false);

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    onCategoryChange?.(cat);
  };

  const handleSortSelect = (option) => {
    setSort(option);
    setOpen(false);
    onSortChange?.(option);
  };

  return (
    <div className="flex md:flex-1 flex-wrap flex-col items-start self-stretch gap-2 justify-between">
      {/* Category Buttons */}
      <div className="w-full snap-x snap-mandatory overflow-x-scroll md:overflow-x-auto scrollbar-hide flex md:justify-between border-b-2 border-[#F0F0F0] gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-4 py-2 text-sm md:text-base font-medium transition
              ${
                activeCategory === cat
                  ? "border-b-2 border-[#123787] text-[#123787] font-semibold"
                  : " text-[#565656] font-medium"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sort Dropdown */}
      <div className="md:hidden block relative w-full md:w-40">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center gap-2 px-4 py-2 bg-white border border-[#E0E0E0] rounded-lg  hover:shadow-sm self-stretch"
        >
          <span className="flex justify-between gap-2 text-sm font-medium w-full self-stretch">
            {sort}
            <ChevronDown
              className={`${
                open ? "rotate-180 transform" : " "
              } h-5 w-5 lg:h-6 lg:w-6`}
            />
          </span>
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-[#E0E0E0] rounded-lg shadow-lg z-50">
            {sortOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleSortSelect(option)}
                className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#F5F5F5]
                  ${sort === option ? "font-semibold text-[#123787]" : ""}
                `}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
