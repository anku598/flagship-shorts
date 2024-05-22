import Link from "next/link";

export const SettingsNav = () => {
  return (
    <div className=" mt-[3rem] mb-[1.75rem] w-[245px]">
      <div className="flex pb-4 gap-[1.25rem] border-b-[1px] text-[#424854] tracking-[-0.15px]">
        <Link href="#" className="active-bottom">
          Channels
        </Link>
        <Link href="#" className="">
          Users
        </Link>
        <Link href="#" className="">
          Preferences
        </Link>
      </div>
    </div>
  );
};
