"use client";
import { PlaySquare } from "lucide-react";
import { useState } from "react";
import CircleClose from "../SvgIcons/CircleClose";
import { Progress } from "../ui/progress";

const SingleUploadCard = () => {
  const [progress, setProgress] = useState(30);
  return (
    <>
      <div
        href={"/upload/73192398309480-34-0"}
        className="flex relative justify-between px-4 py-3 border-[1px]  border-[#EAEBEC] border-l-0 border-r-0 items-center"
      >
        <div className="flex items-center flex-1 gap-2">
          <PlaySquare />
          <div className="font-medium">
            <p>video #73192398309480-34-0</p>
          </div>
        </div>
        <div className="size-info mr-[5rem]">33.4MB</div>
        <div className="mr-[6rem] text-[16px] text-[#181A1E]">Uploaded</div>
        <CircleClose />
        {progress !== 100 ? (
          <Progress
            className="absolute bottom-0 left-0 h-[2px] bg-[#CBD5E8]"
            value={progress}
          />
        ) : null}
      </div>

      {progress !== 100 ? (
        <div className="flex mt-3 mb-6 text-[#424854] text-[15px] justify-between items-center px-1">
          <p className="">0 1 uploaded</p>
          <p className="">6GB/25GB - 19Gb remaining</p>
        </div>
      ) : null}
    </>
  );
};

export default SingleUploadCard;
