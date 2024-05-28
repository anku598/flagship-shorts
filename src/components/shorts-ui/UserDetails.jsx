"use client";
import AddIcon from "@/components/SvgIcons/AddIcon";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

const UserDetails = () => {
  const [open, setIsOpen] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  return (
    <>
      <div>
        <div className="flex items-center gap-7 mb-[2.5rem]">
          <img
            className="inline-block h-[130px] w-[130px] 2xl:h-[145px] 2xl:h-[145px] 3xl:h-[162px] 3xl:w-[162px] rounded-full"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="flex flex-col items-start ">
            <h4 className="font-24px mb-[7px] 3xl:mb-[10px] text-[#181A1E] font-[500] capitalize">
              Stephan Louis
            </h4>
            <p className="text-[#181A1E] mb-[16px] font-[400] text-[1rem]">
              stephan@grameenphone.com
            </p>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  className="text-[#181A1E] xl:py-[14px] 2xl:py-[16px] 3xl:py-[20px] 3xl:h-0 focus-visible:ring ring-0 px-[15px] min-w-[165px] 3xl:min-w-[165px] bg-transparent border-[1px] "
                  asChild
                >
                  <div className="text-[#181A1E] text-[16px] flex justify-between items-center">
                    <div>Channel User</div>{" "}
                    <ChevronDown size={"20px"} className="" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className=" cursor-pointer bg-white p-0 text-[#181A1E] capitalize"
              >
                <DropdownMenuItem className="cursor-pointer font-18px 3xl:text-[16px] ">
                  All
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="font-18px 3xl:text-[16px]">
                  Completed
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="font-18px 3xl:text-[16px]">
                  In progress
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="font-18px 3xl:text-[16px]">
                  Error
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="user-details-card px-[1.75rem] py-[2rem] rounded-[1.5rem] ">
          <div className="flex justify-between items-center mb-[16px] 3xl:mb-[20px]">
            <div className="font-20px font-[500]">
              Manage Stephen Louis roles
            </div>
            <Button className="rounded-full font-20px font-[500] 3xl:leading-[24.2px] xl:px-[30px] px-[40px] font-20px 3xl:py-[3px] ">
              <div className="mr-[14px]">
                <AddIcon />
              </div>
              New Role
            </Button>
          </div>

          {/* Channel Lists here  */}

          <div className="flex justify-between py-3  3xl:py-5 border-b-[1px]">
            <div className="flex items-center gap-[10rem]">
              <div className="flex gap-5 items-center">
                <img
                  className="inline-block  h-10 xl:h-10 xl:w-10 3xl:h-12 3xl:w-12 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <h4 className="font-24px text-[#181A1E] capitalize">
                  Stephan Louis
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="ml-[1.5rem]">
                <Dialog open={open} onOpenChange={setIsOpen}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="cursor-pointer">
                        <Button className="bg-transparent text-[#181A1E] border-[1px] border-[#EAEBEC]">
                          Publisher
                          <ChevronDown className="ml-2" />
                        </Button>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="rounded-[8px]">
                      <DropdownMenuItem className="cursor-pointer flex items-center justify-between">
                        <div>Publisher</div>
                        <div className="w-[18px]">
                          <CheckCircleBlueIcon />
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer ">
                        Moderator
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer text-[#DF1B41]">
                        <DialogTrigger className=" flex items-center cursor-pointer ">
                          Revoke Access
                        </DialogTrigger>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DialogContent className="flex flex-col justify-center  rounded-[36px] items-center">
                    <DialogHeader>
                      <DialogTitle className="text-[1.25rem] font-medium mb-[1rem]">
                        Are you sure you want to revoke access?
                      </DialogTitle>
                    </DialogHeader>
                    <DialogFooter>
                      <Button
                        className="rounded-full px-10"
                        variant="outline"
                        onClick={() => setIsOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        className="rounded-full px-10"
                        onClick={() => setIsOpen(false)}
                      >
                        Confirm
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          <div className="flex justify-between  py-3 3xl:py-5 border-b-[1px]">
            <div className="flex items-center gap-[10rem]">
              <div className="flex gap-5 items-center">
                <img
                  className="inline-block  h-10 xl:h-10 xl:w-10 3xl:h-12 3xl:w-12 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <h4 className="font-24px text-[#181A1E] capitalize">
                  Stephan Louis
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="ml-[1.5rem]">
                <Dialog open={open} onOpenChange={setIsOpen}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="cursor-pointer">
                        <Button className="bg-transparent text-[#181A1E] border-[1px] border-[#EAEBEC]">
                          Publisher
                          <ChevronDown className="ml-2" />
                        </Button>
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="
              "
                    >
                      <DropdownMenuItem className="cursor-pointer pr-20">
                        Moderator
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer pr-20 text-[#DF1B41]">
                        <DialogTrigger className=" flex items-center cursor-pointer ">
                          Revoke Access
                        </DialogTrigger>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DialogContent className="flex flex-col justify-center  rounded-[36px] items-center">
                    <DialogHeader>
                      <DialogTitle className="text-[1.25rem] font-medium mb-[1rem]">
                        Are you sure you want to revoke access?
                      </DialogTitle>
                    </DialogHeader>
                    <DialogFooter>
                      <Button
                        className="rounded-full px-10"
                        variant="outline"
                        onClick={() => setIsOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        className="rounded-full px-10"
                        onClick={() => setIsOpen(false)}
                      >
                        Confirm
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
