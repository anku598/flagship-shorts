"use client";
import { ChevronDown, SearchIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";

const SelectDropDownContent = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null); // Single selection state
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Update selected option
    setDropdownOpen(false); // Close dropdown
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className="border border-[#C3C7CF] rounded-full min-h-[48px] p-2 px-4 cursor-pointer relative"
        onClick={toggleDropdown}
      >
        <div className="flex flex-wrap items-center justify-between gap-2 cursor-pointer">
          <div className="flex items-center flex-wrap gap-1">
            {selectedOption && (
              <div className="flex gap-2 items-center ">
                <img
                  className="inline-block xl:h-[20px] xl:w-[20px] 3xl:h-[24px] h-[20px] w-10 3xl:w-[24px] rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <h4 className="cursor-pointer text-13px xl:text-[14px] 3xl:text-[16px] text-[#181A1E]">
                  {selectedOption}
                </h4>
              </div>
            )}
          </div>
          <input
            type="text"
            placeholder={selectedOption ? "" : "Select Channel"}
            className="outline-none flex-grow cursor-pointer text-[16px]"
            style={{ display: selectedOption ? "none" : "block" }}
            readOnly
          />
          <div className="w-[14px]">
            <ChevronDown className="w-full transform transition-transform duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div
        className={`absolute z-10 mt-1 bg-white rounded-[8px] w-full transform transition-transform custom-box-shadow duration-200 ease-in-out ${
          dropdownOpen ? "scale-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-[1rem] 3xl:px-[2rem] pt-4">
          <div className="relative">
            <div className="absolute left-[12px] lg:w-[13px] 3xl:w-[16px] top-[50%] lg:translate-y-[-44%] 3xl:translate-y-[-50%]">
              <SearchIcon className="w-full" />
            </div>
            <Input
              type="search"
              placeholder="Search"
              className="w-full rounded-full bg-background lg:py-[23px] 3xl:py-[20px] px-[30px] placeholder:text-[#9E9E9E] xl:placeholder:text-[13px] placeholder:text-[16px] xl:text-[16px] text-[20px] text-[#181A1E] tracking-[-1%]"
            />
          </div>
        </div>
        <ScrollArea className="xl:h-[250px] 2xl:h-[300px] 3x:h-[473px] px-[1rem] 3xl:px-[2rem]">
          <div>
            {options.map((option) => (
              <div
                className="flex gap-3 items-center border-b-[1.5px] cursor-pointer py-4 border-[#EAEBEC]"
                key={option}
                onClick={() => handleOptionClick(option)}
              >
                <img
                  className="inline-block xl:h-[20px] xl:w-[20px] 3xl:h-[24px] h-[20px] w-10 3xl:w-[24px] rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <h4 className="cursor-pointer text-13px xl:text-[14px] 3xl:text-[16px] text-[#181A1E]">
                  {option}
                </h4>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default SelectDropDownContent;
