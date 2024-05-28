import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";

const SearchBarComponent = () => {
  return (
    <>
      <div className="absolute left-[20px] xl:w-[18px] 3xl:w-[22px] top-[50%] xl:translate-y-[-62%]  3xl:translate-y-[-50%]">
        <SearchIcon className="w-full" />
      </div>

      <Input
        type="search"
        placeholder="Search"
        className="w-full rounded-full bg-background xl:py-[23px] 3xl:py-[28px] px-[55px] placeholder:text-[#9E9E9E] placeholder:text-[20px] placeholder:leading-[36px] text-[20px] text-[#181A1E] leading-[36px] tracking-[-1%]"
      />
    </>
  );
};

export default SearchBarComponent;
