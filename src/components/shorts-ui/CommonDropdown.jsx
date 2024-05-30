"use client";
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
import CheckCircleBlueIcon from "../SvgIcons/CheckCircleBlueIcon";

export const CommonDropdown = ({
  triggerText,
  items,
  showIcon = true,
  align = "end",
}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant="dropdown"
          size="dropdown"
          className="xl:min-w-[140px]"
          asChild
        >
          <div>
            <div>{triggerText}</div> <ChevronDown size={"16px"} />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        className="cursor-pointer bg-white p-0 text-[#181A1E] capitalize"
      >
        {items.map((item, index) => (
          <div key={index}>
            <DropdownMenuItem
              className="cursor-pointer font-18px 3xl:text-[16px] flex justify-between 3xl:pl-[28px] 3xl:pr-[12px]"
              onClick={() => handleItemClick(item)}
            >
              {item}
              {showIcon && selectedItem === item && (
                <div className="w-[18px]">
                  <CheckCircleBlueIcon />
                </div>
              )}
            </DropdownMenuItem>
            {index < items.length - 1 && <DropdownMenuSeparator />}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
