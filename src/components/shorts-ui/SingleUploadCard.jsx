"use client";
import clsx from "clsx";
import { PlaySquare } from "lucide-react";
import Link from "next/link";
import CircleClose from "../SvgIcons/CircleClose";
import { ReloadIcon } from "../SvgIcons/ReloadIcon";
import { Progress } from "../ui/progress";

const SingleUploadCard = ({ progress, cancel }) => {
  return (
    <>
      <Link
        href={"/upload/123/publish"}
        className="flex relative mb-4 justify-between px-[27.5px] xl:py-[22px] 3xl:py-[30px] border-[1px] rounded-[24px] border-[#EAEBEC] items-center overflow-hidden"
      >
        <div className="flex items-center flex-1 w-56 gap-2">
          <PlaySquare />
          <div className="font-medium">
            <p className="text-[15px] 3xl:text-[16px]">
              video #73192398309480-34-0
            </p>
          </div>
        </div>
        <div className="text-[15px] flex-none w-48 3xl:text-[16px] ">
          33.4MB
        </div>
        <div
          className={clsx(" flex-none w-48 text-[15px] 3xl:text-[16px]", {
            "text-[#DF1b27]": cancel,
            "text-[#181A1E]": !cancel,
          })}
        >
          {cancel ? "Upload Error" : "Uploaded"}
        </div>

        <div className="cursor-pointer">
          {cancel ? <ReloadIcon /> : <CircleClose />}
        </div>
        {progress !== 100 ? (
          <Progress
            className="absolute bottom-0 left-0 h-[2px] bg-[#CBD5E8]"
            value={progress}
          />
        ) : null}
      </Link>

      {/* {progress !== 100 ? (
        <div className="flex mt-2 mb-8 text-[#424854] text-[14px] 3xl:text-[16px] justify-between items-center px-1">
          <p className="">0 / 1 uploaded</p>
          <p className="">6GB/25GB - 19Gb remaining</p>
        </div>
      ) : null} */}
    </>
  );
};

export default SingleUploadCard;
