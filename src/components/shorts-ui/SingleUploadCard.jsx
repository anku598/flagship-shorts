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
        className="flex relative justify-between px-4 h-[76px] border-[1px]  border-[#EAEBEC] border-l-0 border-r-0 items-center"
      >
        <div className="flex items-center flex-1 gap-2">
          <PlaySquare />
          <div className="font-medium">
            <p>video #73192398309480-34-0</p>
          </div>
        </div>
        <div className="size-info mr-[5rem]">33.4MB</div>
        <div
          className={clsx("mr-[6rem] text-[16px]", {
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

      {progress !== 100 ? (
        <div className="flex mt-2 mb-8 text-[#424854] text-[15px] justify-between items-center px-1">
          <p className="">0 / 1 uploaded</p>
          <p className="">6GB/25GB - 19Gb remaining</p>
        </div>
      ) : null}
    </>
  );
};

export default SingleUploadCard;
