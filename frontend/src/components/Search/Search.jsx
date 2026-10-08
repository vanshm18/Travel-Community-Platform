import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

import { useState } from "react";

import FilterButton from "../Filters/FilterButton";
import filterData from "../Filters/FilterData";

const Search = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);

  const openSearch = () => {
    setSearchOpen(true);
    setSelectedFilter(filterData[0]);
  };

  return (
    <div className="px-4 sm:px-8 md:px-12 py-4">
      <div className="flex flex-col items-center gap-12 w-full rounded-lg">
        {/* HEADING - WHERE TO? */}
        <h1 className="pt-8 font-bold text-5xl sm:text-6xl md:text-7xl">Where to?</h1>
        {/* Input area */}
        <div className={`w-11/12 sm:w-3/4 rounded-xl bg-white border-2 overflow-hidden
          ${searchOpen ? "h-72" : "h-12"} transition-all duration-300 `}>
          <div className={`flex h-11 w-full justify-center items-center
          ${searchOpen ? "border-b-2" : "border-b-0"} transition-all duration-100`}>

              <div className={`h-full aspect-square flex justify-center items-center border-r-2 bg-red-500 hover:bg-red-600 transition-all duration-200
              ${searchOpen ? "opacity-100" : "w-0 opacity-0 border-r-0"}`}
                onClick={() => setSearchOpen(false)}>
                <RxCross2 className="scale-110 md:scale-130"/>
              </div>

            <input 
              type="text" 
              placeholder="Explore Journeys" 
              className="w-full h-full px-4 box-border outline-0"
              onClick={() => {
                openSearch();                        {/* to set the destination filter as default open */}
                }
              }>
            </input>

            <div className="h-full aspect-square flex justify-center items-center border-l-2 bg-green-400 hover:bg-emerald-400">
              <IoIosSearch className="scale-110 md:scale-130"/>
            </div>
          </div>

          {searchOpen && (
            <div className="flex flex-1 min-h-0 w-full">
              
              {/* Categories */}
              <div className="flex flex-col w-1/4 border-r overflow-y-auto">
                {filterData.map((filter) => (
                  <FilterButton
                    key={filter.category}
                    name={filter.category}
                    selected={selectedFilter?.category === filter.category}
                    onClick={() => setSelectedFilter(filter)}
                  />
                ))}
              </div>

              {/* Options */}
              <div className="flex-1 p-4 w-3/4">
                {selectedFilter && (
                  <div className="flex gap-5 flex-wrap">
                    {selectedFilter.options.map((option) => (
                      <button key={option} className="h-8 md:h-10 flex items-center text-xs sm:text-sm px-4 py-2 font-medium rounded-lg border bg-green-300 hover:bg-green-400 cursor-pointer">
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

            </div>
          )}
          
        </div>

      </div>
    </div>
  )
}

export default Search
