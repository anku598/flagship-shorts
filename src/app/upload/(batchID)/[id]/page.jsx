"use client";
import SingleUploadCard from "@/components/shorts-ui/SingleUploadCard";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const BatchVideoItem = () => {
  const [progress, setProgress] = useState(30);
  const [cancel, setCancel] = useState(false);
  return (
    <div className="container-full">
      <h2 className="text-[1.35rem] 2xl:text-[1.5rem] 3xl:text-[2rem] text-[#181A1E] font-medium capitalize tracking-[-0.15px] xl:mb-[25px] 3xl:mb-[40px] ">
        Batch #73192398309480-34-0
      </h2>
      <div className="mb-[1.5rem] text-right">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant="dropdown"
              size="dropdown"
              className="min-w-[100px] xl:min-w-[80px] 3xl:min-w-[75px] text-[14px] 3xl:text-[16px] py-[8px] bg-[#EEF6FF] border-0"
              asChild
            >
              <div className="">
                All <ChevronDown size={"18px"} className="ml-1" />{" "}
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="lg:w-[220px] cursor-pointer bg-white p-0  text-[#181A1E] font-medium font-[1rem] capitalize"
          >
            <DropdownMenuItem className="cursor-pointer px-[1.1rem] py-[1rem]">
              All
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="px-[1.1rem] py-[1rem]">
              Completed
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="px-[1.1rem] py-[1rem]">
              In progress
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="px-[1.1rem] py-[1rem]">
              Error
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <SingleUploadCard progress={30} cancel={cancel} />
      <SingleUploadCard progress={50} cancel={cancel} />
      <SingleUploadCard progress={100} cancel={true} />
      <SingleUploadCard progress={72} cancel={true} />
    </div>
  );
};

export default BatchVideoItem;
