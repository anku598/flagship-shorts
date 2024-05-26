import { PlaySquare } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import CircleClose from "../SvgIcons/CircleClose";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";

const BatchUploadCard = () => {
  const [progress, setProgress] = useState(30);

  return (
    <div className="mb-4">
      <Link
        href={"/upload/73192398309480-34-0"}
        className="flex relative justify-between px-4 py-3 border-[1px] rounded-[24px] border-[#EAEBEC] overflow-hidden items-center"
      >
        <div className="flex items-center gap-2">
          <PlaySquare />
          <div className="font-medium">
            <p>video #73192398309480-34-0</p>
            <span className="text-[#424854] text-[14px]">
              Uploading - Not published
            </span>
          </div>
        </div>

        <Button
          className="rounded-full border-[1px] border-[#EAEBEC]"
          variant="link"
        >
          {progress === 100 && (
            <div className="rounded-full mr-2 bg-primary w-8 h-8 flex items-center justify-center text-white text-[10px]">
              100
            </div>
          )}
          <div className="mr-[1.25rem]">Ready to publish</div>
          <CircleClose className="" />
        </Button>
        <Progress
          className="absolute bottom-0 left-0 h-[5px] bg-[#CBD5E8]"
          value={progress}
        />
      </Link>

      <div className="flex mt-3 text-[#424854] text-[15px] justify-between items-center px-1">
        <p className="">0 out 1 uploaded</p>
        <p className="">30MB/100MB - 100Mb remaining</p>
      </div>
    </div>
  );
};

export default BatchUploadCard;
