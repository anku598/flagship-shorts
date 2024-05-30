"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SideNav = () => {
  const pathname = usePathname();
  console.log("sidenav", pathname);
  return (
    <div className="h-[calc(100vh-80px)] pt-[48px]">
      <div className="flex flex-col xl:gap-[16px] 3xl:gap-[24px] border-l-[2px]  font-18px text-[#181a1e]">
        <Link
          href={"/"}
          className="border-l-[3px] border-[]font border-[#181a1e] font-medium  pl-[16px] "
        >
          Shorts
        </Link>
        <div className="flex flex-col xl:gap-[16px] 3xl:gap-[24px] pl-[24px] font-18px">
          <Link href="#" className="">
            Library
          </Link>
          <Link
            href={{
              pathname: "/stats",
            }}
            className={`${
              pathname === "/stats"
                ? "text-primary font-[500]"
                : "text-[#181a1e]"
            }`}
          >
            Stats
          </Link>
          <Link
            href={{
              pathname: "/upload",
            }}
            className={`${
              pathname === "/upload"
                ? "text-primary font-[500]"
                : "text-[#181a1e]"
            }`}
          >
            Upload
          </Link>
          <Link href="#" className="">
            Designer
          </Link>
          <Link href="#" className="">
            Ads
          </Link>
        </div>
      </div>
    </div>
  );
};
