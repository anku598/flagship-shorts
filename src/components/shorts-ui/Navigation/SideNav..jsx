import Link from "next/link";

export const SideNav = () => {
  return (
    <div className="h-[calc(100vh-80px)] pt-[48px]">
      <div className="flex flex-col gap-[24px] border-l-[2px] tracking-[-0.15px] leading-[20px]  text-[1.25rem] text-[#181a1e]">
        <Link
          href={"/"}
          className=" border-l-[3px] border-[] border-[#181a1e] font-medium  pl-[16px] "
        >
          Shorts
        </Link>
        <div className="flex flex-col gap-[24px] pl-[24px] text-[1.25rem]">
          <Link href="#" className="">
            Library
          </Link>
          <Link href="/upload" className="">
            Stats
          </Link>
          <Link
            href={{
              pathname: "/upload",
            }}
            className=""
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
