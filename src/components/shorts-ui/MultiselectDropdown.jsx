"use client";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import CheckCircleIcon from "../SvgIcons/CheckCircleIcon";
import { ScrollArea } from "../ui/scroll-area";

const MultiselectDropdown = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
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
          <div
            className={`flex items-center flex-wrap gap-1 ${
              selectedOptions.length > 1 ? "flex-1" : ""
            }`}
          >
            {selectedOptions.map((option) => (
              <span
                key={option}
                className="bg-[#EDECEC] text-[#181A1E] px-2 py-1 rounded-full text-[14px] flex items-center justify-between "
              >
                {option}
                <button
                  type="button"
                  className="ml-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOptionClick(option);
                  }}
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
          <input
            type="text"
            placeholder={selectedOptions.length === 0 ? "Select category" : ""}
            className="outline-none flex-grow cursor-pointer"
            style={{ display: selectedOptions.length > 1 ? "none" : "block" }}
            readOnly
          />
          <div className="w-[16px]">
            <ChevronDown className=" w-full transform transition-transform duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div
        className={` absolute z-10 mt-1 bg-white rounded-[8px] w-full  transform transition-transform custom-box-shadow   duration-200 ease-in-out ${
          dropdownOpen ? "scale-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <ScrollArea className="xl:h-[250px] 2xl:h-[300px] 3x:h-[473px] px-[1rem] 3xl:px-[2rem]">
          <div>
            {options.map((option) => (
              <div
                key={option}
                className={`flex justify-between items-center border-b-[1.5px] cursor-pointer py-4 border-[#EAEBEC]`}
                onClick={() => handleOptionClick(option)}
              >
                <div
                  className={` cursor-pointer text-13px xl:text-[14px] 3xl:text-[16px]  `}
                >
                  {option}
                </div>
                <div
                  className={`text-[12px] 3xl:text-[14px] font-[500] border border-[#C3C7CF] rounded-full py-[3px] px-4 3xl:py-[5px] cursor-pointer ${
                    selectedOptions.includes(option)
                      ? "bg-primary text-white border-[0]"
                      : ""
                  }`}
                >
                  {selectedOptions.includes(option) ? (
                    <div className="flex gap-1 items-center">
                      <CheckCircleIcon />
                      <div>Selected</div>
                    </div>
                  ) : (
                    "select"
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default MultiselectDropdown;
