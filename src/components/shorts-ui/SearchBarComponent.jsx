import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";

const SearchBarComponent = () => {
  return (
    <>
      <div className="relative w-full">
        <div className="absolute left-[20px] lg:w-[18px] 3xl:w-[22px] top-[50%] lg:translate-y-[-44%]  3xl:translate-y-[-50%]">
          <SearchIcon className="w-full" />
        </div>

        <Input
          type="search"
          placeholder="Search"
          className="w-full rounded-full bg-background lg:py-[23px] 3xl:py-[28px] px-[55px] placeholder:text-[#9E9E9E] xl:placeholder:text-[16px] placeholder:text-[20px] placeholder:leading-[36px] xl:text-[16px] text-[20px] text-[#181A1E] leading-[36px] tracking-[-1%]"
        />
      </div>
    </>
  );
};

export default SearchBarComponent;
