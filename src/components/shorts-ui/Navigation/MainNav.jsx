import { NotificationIcon } from "@/components/SvgIcons/NotificationIcon";
import { SettingIcon } from "@/components/SvgIcons/SettingIcon";
import { UserIcons } from "@/components/SvgIcons/UserIcons";

export const MainNav = () => {
  return (
    <div className="h-[70px] flex justify-between px-10 items-center  border-b-[1px] border-[#EBEFF7]">
      <h1 className="text-[1.25rem] text-body-color">Flagship Innovation</h1>

      <div className="flex items-center gap-[1.25rem]">
        <div className=" cursor-pointer">
          <NotificationIcon />
        </div>
        <div className=" cursor-pointer">
          <SettingIcon />
        </div>
        <div className=" cursor-pointer">
          <UserIcons />
        </div>
      </div>
    </div>
  );
};
