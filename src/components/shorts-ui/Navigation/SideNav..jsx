import Link from "next/link";

export const SideNav = () => {
  return (
    <div className="h-[calc(100vh-70px)] w-[15%] pl-10 pt-[3rem]">
      <div className="flex flex-col gap-[1.3rem] pl-5 border-l-4 tracking-[-0.15px]  text-[1.125rem]">
        <div className=" font-medium link-active-sidebar">Shorts</div>
        <div className="flex flex-col gap-[1.2rem] ">
          <Link href="#" className=" pl-3">
            Library
          </Link>
          <Link href="#" className="pl-3">
            Stats
          </Link>
          <Link href="#" className="pl-3">
            Upload
          </Link>
          <Link href="#" className="pl-3">
            Designer
          </Link>
          <Link href="#" className=" pl-3">
            Ads
          </Link>
        </div>
      </div>
    </div>
  );
};
