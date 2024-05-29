import CloseIcon from "@/components/SvgIcons/CloseIcon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const TopHeader = () => {
  return (
    <div className="top-header h-[80px] flex justify-between px-10 items-center  border-b-[1px] border-[#EBEFF7] mb-10">
      <Button variant="link">
        {" "}
        <Link href={"/"} className="flex gap-2 items-center">
          {/* <MoveLeft />
          <p className="text-[1.125rem] font-medium">Back</p> */}
          <div className="bg-[#EEF6FF] w-[40px] h-[40px] 3xl:w-[56px] 3xl:h-[56px] rounded-full flex items-center justify-center">
            <div className=" w-[13px] h-[13px] 3xl:w-[16px] 3xl:h-[16px]">
              <CloseIcon />
            </div>
          </div>
        </Link>
      </Button>

      <Button className="">
        <Link href={"/"}>Create</Link>
      </Button>
    </div>
  );
};
