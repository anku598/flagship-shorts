"use client";
import InputSelect from "@/components/shorts-ui/InputSelect";
import { Button } from "@/components/ui/button";
import { DialogContent } from "@/components/ui/dialog";
import { PlusIcon, X } from "lucide-react";
import { useState } from "react";
import { Info } from "../SvgIcons/Info";

const AddPopup = ({ isDefaultHeader }) => {
  const [selectedRole, setSelectedRole] = useState("admin");

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
    console.log("Selected role:", event.target.value); // Debugging log
  };

  return (
    <DialogContent className="sm:max-w-[900px] px-[4rem] py-[2.2rem]">
      {isDefaultHeader ? (
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-4">
            <img
              className="inline-block h-[40px] w-[40px] rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User"
            />
            <div className="channel-name text-[1.813rem]">Chorki</div>
          </div>
          <div className="cursor-pointer">
            <X />
          </div>
        </div>
      ) : (
        <div className="flex justify-between mb-[2.5rem]">
          <div className="flex gap-4">
            <div className="flex gap-2">
              <label
                htmlFor="hs-default-radio1"
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="user-role"
                  value="admin"
                  className="mt-0.5 w-[23px] h-[23px] border-0 border-[#347DFD] rounded-full"
                  id="hs-default-radio1"
                  style={{ borderColor: "#347DFD" }}
                  checked={selectedRole === "admin"}
                  onChange={handleRoleChange}
                />
                <div className="text-[#181A1E] text-[1.3rem] font-[500] capitalize">
                  New Admin
                </div>
              </label>
            </div>

            <div className="flex gap-2">
              <label
                htmlFor="hs-default-radio2"
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="user-role"
                  value="channel-user"
                  className="w-[23px] h-[23px] border-0 border-[#347DFD] rounded-full"
                  id="hs-default-radio2"
                  style={{ borderColor: "#347DFD" }}
                  checked={selectedRole === "channel-user"}
                  onChange={handleRoleChange}
                />
                <div className="text-[#181A1E] text-[1.3rem] capitalize font-[500]">
                  New Channel User
                </div>
              </label>
            </div>
          </div>

          <div className="cursor-pointer">
            <X />
          </div>
        </div>
      )}

      <InputSelect role={selectedRole} />
      <InputSelect role={selectedRole} />
      <InputSelect role={selectedRole} />
      <div className="text-primary text-[16px] font-[500] flex items-center gap-1 px-0 cursor-pointer">
        <PlusIcon size={"16px"} />
        Add User
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Info />
          <p className="font-light">You can add new admin users from here</p>
        </div>

        <Button className="rounded-full" size="lg">
          Send Invite
        </Button>
      </div>
    </DialogContent>
  );
};

export default AddPopup;
