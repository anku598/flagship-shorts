"use client";
import CloseIcon from "@/components/SvgIcons/CloseIcon";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const TopHeaderForVideoPublish = () => {
  const [progress, setProgress] = useState(100);
  return (
    <div className="top-header h-[80px] flex justify-between px-10 items-center border-b-[1px] mb-[40px] 2xl:mb-[64px] border-[#C3C7CF]">
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

      <div className="flex gap-3 items-center">
        <Button variant="dropdown" size="dropdown">
          {progress === 100 && (
            <div className="rounded-full mr-2 bg-primary w-6 h-6 flex items-center justify-center text-white text-[9px]">
              100
            </div>
          )}
          <div>Ready to publish</div>
        </Button>

        <div className=" text-[#424854] w-[46px] h-[46px] rounded-full border border-[#EAEBEC] flex items-center justify-center cursor-pointer">
          <Upload size={"20px"} />
        </div>
      </div>
    </div>
  );
};
