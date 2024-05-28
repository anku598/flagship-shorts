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

const UserDetails = () => {
  const [open, setIsOpen] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  return (
    <>
      <div>
        <div className="flex items-center gap-7 mb-[2.5rem]">
          <img
            className="inline-block h-[162px]] w-[162px] rounded-full"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="flex flex-col items-start ">
            <h4 className="text-[1.5rem] mb-[12px] text-[#181A1E] font-[500] capitalize">
              Stephan Louis
            </h4>
            <p className="text-[#181A1E] mb-[16px] font-[400] text-[1rem]">
              stephan@grameenphone.com
            </p>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button
                  className="text-[#181A1E] focus-visible:ring ring-0 bg-transparent border-[1px]"
                  asChild
                >
                  <div className="text-[#181A1E]">
                    Channel User <ChevronDown size={"20px"} className="" />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="lg:w-[220px] cursor-pointer bg-white p-0  text-[#181A1E] font-medium capitalize"
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
        </div>

        <div className="user-details-card px-[1.75rem] py-[2rem] rounded-[1.5rem] ">
          <div className="flex justify-between items-center mb-[2rem]">
            <div className="text-[1.25rem] font-[500]">
              Manage Stephen Louis roles
            </div>
            <Button className="rounded-full  font-[1.25rem]">
              <div className="mr-2">
                <AddIcon />
              </div>
              New Channel
            </Button>
          </div>

          {/* Channel Lists here  */}

          <div className="flex justify-between mt-7 pb-4 border-b-[1px]">
            <div className="flex items-center gap-[10rem]">
              <div className="flex gap-5 items-center">
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <h4 className="text-[1.5rem] text-[#181A1E] capitalize">
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

          <div className="flex justify-between mt-7 pb-4 border-b-[0px]">
            <div className="flex items-center gap-[10rem]">
              <div className="flex gap-5 items-center">
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <h4 className="text-[1.5rem] text-[#181A1E] capitalize">
                  Stephan Louis
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="ml-[1.5rem]">
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
                      Revoke Access
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
