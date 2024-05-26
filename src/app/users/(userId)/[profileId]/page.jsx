import { SettingsNav } from "@/components/shorts-ui/Navigation/SettingsNav";
import UserDetails from "@/components/shorts-ui/UserDetails";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

const ProfileIdPage = () => {
  return (
    <>
      <div className="top-header h-[70px] flex justify-between px-10 items-center  border-b-[1px] border-[#EBEFF7] mb-10">
        <div className="rounded-full bg-[#EEF6FF] p-3 text-[#181A1E] cursor-pointer">
          <X size={"17px"} />
        </div>

        <Button
          className="rounded-full px-10 text-[1.125rem] font-[400] "
          asChild
        >
          <Link href={"/users"}>Update</Link>
        </Button>
      </div>

      <div className="max-w-[78%] mx-auto">
        <SettingsNav />
        <UserDetails />
      </div>
    </>
  );
};

export default ProfileIdPage;
