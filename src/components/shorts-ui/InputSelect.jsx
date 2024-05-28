import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

import { ChevronDown } from "lucide-react";

const InputSelect = ({ role = "admin" }) => {
  return (
    <div className="relative mb-[0.5rem]">
      <Input
        placeholder="User 1 Email"
        className=" focus-visible:right-0 h-[3rem]"
      />
      {role === "admin" ? (
        <div className="absolute top-[50%] right-[1.2rem] translate-y-[-50%] cursor-pointer text-[0.9rem]">
          Make Admin
        </div>
      ) : (
        <div className="absolute top-[50%] right-[1.2rem] translate-y-[-50%]">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="cursor-pointer flex items-center gap-2">
                <p className="text-[0.9rem]">Pick a role</p>
                <div className="dropdown-icon">
                  <ChevronDown size={"17px"} />
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="">
              <DropdownMenuItem className="cursor-pointer pr-20">
                Publisher
              </DropdownMenuItem>
              <DropdownMenuItem>Moderator</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
};

export default InputSelect;
