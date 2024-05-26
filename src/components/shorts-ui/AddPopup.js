import Handshake from "@/components/SvgIcons/Handshake";
import InputSelect from "@/components/shorts-ui/InputSelect";
import { Button } from "@/components/ui/button";
import { DialogContent } from "@/components/ui/dialog";
import { PlusIcon, X } from "lucide-react";

const AddPopup = ({ isDefaultHeader }) => {
  return (
    <DialogContent className="sm:max-w-[900px] px-[4rem] py-[2.2rem]">
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-4">
          <img
            className="inline-block h-[40px] w-[40px] rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="channel-name text-[1.813rem]">Chorki</div>
        </div>
        <div className="cursor-pointer">
          {" "}
          <X />
        </div>
      </div>

      <InputSelect />
      <InputSelect />
      <InputSelect />
      <Button
        variant="link"
        className="text-primary items-start justify-start px-0"
      >
        <PlusIcon size={"17px"} />
        Add User
      </Button>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Handshake />
          <p className="font-light">
            Lorem ipsum dolor sit amet consectetur. Mauris sapien mattis{" "}
          </p>
        </div>

        <Button className="rounded-full" size="lg">
          Send Invite
        </Button>
      </div>
    </DialogContent>
  );
};

export default AddPopup;
