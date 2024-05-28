"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SettingsNav = () => {
  const pathname = usePathname();
  return (
    <div className="mt-[48px] mb-[1.75rem] lg:max-3xl:max-w-[254px] max-w-[318px]">
      <div className="flex lg:pb-3 3xl:pb-4 lg:max-3xl:text-[16px] text-[20px] lg:max-3xl:leading-[22.4px] leading-[28px] justify-between gap-5 border-b-[1px] text-[#424854] tracking-[-0.15px]">
        <Link href="/" className={pathname === "/" ? "active-bottom" : ""}>
          Channels
        </Link>
        <Link
          href="/users"
          className={pathname.startsWith("/users") ? "active-bottom" : ""}
        >
          Users
        </Link>
        <Link href="#" className="">
          Preferences
        </Link>
      </div>
    </div>
  );
};
