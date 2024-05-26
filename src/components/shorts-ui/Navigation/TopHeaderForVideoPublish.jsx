"use client";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const TopHeaderForVideoPublish = () => {
  const [progress, setProgress] = useState(100);
  return (
    <div className="top-header h-[70px] flex justify-between px-10 items-center  border-b-[1px] border-[#C3C7CF] mb-10">
      <Button variant="link">
        {" "}
        <Link href={"/"} className="flex gap-2 items-center">
          <MoveLeft />
          <p className="text-[1.125rem] font-medium">Back To Upload</p>
        </Link>
      </Button>

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
      </Button>
    </div>
  );
};
