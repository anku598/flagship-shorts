import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import CheckCircleIcon from "../SvgIcons/CheckCircleIcon";

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
        className="border border-[#C3C7CF] rounded-full h-[48px] p-2 px-4 cursor-pointer relative"
        onClick={toggleDropdown}
      >
        <div className="flex flex-wrap gap-2">
          {selectedOptions.map((option) => (
            <span
              key={option}
              className="bg-[#EDECEC] text-[#181A1E] px-2 py-1 rounded-full text-sm flex items-center "
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
          <input
            type="text"
            placeholder={selectedOptions.length === 0 ? "Select category" : ""}
            className="outline-none flex-grow"
            readOnly
          />
          <ChevronDown className="text-[#181A1E] text-[20px] transform transition-transform duration-200 ease-in-out" />
        </div>
      </div>
      <div
        className={`absolute z-10 mt-1 bg-white rounded-[8px] w-full max-h-[70vh] overflow-y-auto transform transition-transform  custom-box-shadow   px-[1.2rem]  py-[1rem] duration-200 ease-in-out ${
          dropdownOpen ? "scale-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {options.map((option) => (
          <div
            key={option}
            className={`flex justify-between items-center border-b-[1.5px] cursor-pointer pb-2  mb-2 border-[#EAEBEC]`}
            onClick={() => handleOptionClick(option)}
          >
            <div className={`p-2 cursor-pointer text-[16px] `}>{option}</div>
            <div
              className={`text-[14px] font-[500] border border-[#C3C7CF] rounded-full px-4 py-[5px] cursor-pointer ${
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
    </div>
  );
};

export default MultiselectDropdown;
