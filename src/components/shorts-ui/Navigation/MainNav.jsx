"use client";
import { NotificationIcon } from "@/components/SvgIcons/NotificationIcon";
import { SettingIcon } from "@/components/SvgIcons/SettingIcon";
import { UserIcons } from "@/components/SvgIcons/UserIcons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MainNav = () => {
  const pathname = usePathname();
  console.log(pathname);
  const isSettingsActive = pathname === "/" || "/users";

  return (
    <div className="h-[70px] flex justify-between px-10 items-center  border-b-[1px] border-[#EBEFF7]">
      <Link href={"/"} className="text-[1.25rem] text-body-color">
        Flagship Innovation
      </Link>

      <div className="flex items-center gap-[1.25rem]">
        <Link href={"/"} className=" cursor-pointer">
          <NotificationIcon />
        </Link>
        <Link href={"/"} className=" cursor-pointer">
          <SettingIcon stroke={isSettingsActive ? "#347DFD" : "#181A1E"} />
        </Link>
        <div className=" cursor-pointer">
          <UserIcons />
        </div>
      </div>
    </div>
  );
};
