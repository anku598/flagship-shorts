import { ChevronDown, X } from "lucide-react";

export const MultiSelect = () => {
  return (
    <div className="selected-tag-wrapper w-[100%] md:max-w-[80%] lg:max-w-[50%] custom-input-style flex justify-between items-center min-h-[3.5rem] px-[1.2rem] pl-[0.7rem]">
      <div className="flex flex-wrap gap-2">
        <div className="selected-tag rounded-full bg-[#EDECEC] flex justify-between items-center px-4 py-2 text-[0.8rem]">
          <div>lorem ipsum</div>
          <X className="cursor-pointer ml-5" size={"17px"} />
        </div>
        <div className="selected-tag rounded-full bg-[#EDECEC] flex justify-between items-center px-4 py-2 text-[0.8rem]">
          <div>lorem ipsum</div>
          <X className="cursor-pointer ml-5" size={"17px"} />
        </div>

        <div className="selected-tag rounded-full bg-[#EDECEC] flex justify-between items-center px-4 py-2 text-[0.8rem]">
          <div>lorem ipsum</div>
          <X className="cursor-pointer ml-5" size={"17px"} />
        </div>
      </div>
      <ChevronDown size={"17px"} />
    </div>
  );
};
