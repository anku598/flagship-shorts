"use client";

import { ChannelFollowerIcon } from "../SvgIcons/ChannelFollowerIcon";
import { ChannelUserIcon } from "../SvgIcons/ChannelUserIcon";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { useState } from "react";
import { EditIcon } from "../SvgIcons/EditIcon";
import { MoreVerticalEditIcon } from "../SvgIcons/MoreVerticalEditIcon";
import { TrashIcon } from "../SvgIcons/TrashIcon";
import { Button } from "../ui/button";

export const ChannelSingleList = () => {
  const [open, setIsOpen] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  return (
    <div className="flex justify-between py-2 xl:py-3 3xl:py-4 border-b-[1px]">
      <div className="flex items-center gap-3">
        <img
          className="inline-block xl:h-10 xl:w-10 3xl:h-12 h-10 w-10 3xl:w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <h4 className="font-24px">Grameenphone</h4>
      </div>

      <div className="flex items-center gap-4 font-20px">
        <div className="flex items-center gap-2 ">
          <div className="rounded-full bg-[#DAEAFF] p-2">
            <ChannelUserIcon />
          </div>
          <p className="">1 User</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="rounded-full bg-[#DAEAFF] p-2">
            <ChannelFollowerIcon />
          </div>
          <p>0 Followers</p>
        </div>

        <div className=" xl:ml-[35px] 2xl:ml-[57px] 3xl:ml-[72px]">
          <Dialog open={open} onOpenChange={setIsOpen}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="cursor-pointer">
                  <Button className="bg-transparent">
                    <MoreVerticalEditIcon />
                  </Button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="
              "
              >
                <DropdownMenuItem className="cursor-pointer">
                  <div className=" mr-3 3xl:mr-[4] w-3 3xl:w-[18px]">
                    <EditIcon />
                  </div>
                  Edit
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={() => setShowDeleteDialog(true)}>
                  <DialogTrigger className="flex items-center cursor-pointer">
                    <div className=" w-3 3xl:w-[18px] mr-3 3xl:mr-[4]">
                      <TrashIcon />
                    </div>
                    Delete
                  </DialogTrigger>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DialogContent className="flex flex-col justify-center  rounded-[36px] items-center">
              <DialogHeader>
                <DialogTitle className="text-[1.25rem] font-medium mb-[1rem]">
                  Are you sure you want to delete this video?
                </DialogTitle>
              </DialogHeader>
              <DialogFooter>
                <Button
                  size="lg"
                  className="rounded-full"
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  size="lg"
                  className="rounded-full"
                  variant="destructive"
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
  );
};
