import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export const TopHeader = () => {
  return (
    <div className="top-header h-[70px] flex justify-between px-10 items-center  border-b-[1px] border-[#C3C7CF] mb-10">
      <Button variant="link">
        {" "}
        <Link href={"/"} className="flex gap-2 items-center">
          <MoveLeft />
          <p className="text-[1.125rem] font-medium">Back</p>
        </Link>
      </Button>

      <Button>
        <Link size="lg" href={"/"}>
          Update
        </Link>
      </Button>
    </div>
  );
};
