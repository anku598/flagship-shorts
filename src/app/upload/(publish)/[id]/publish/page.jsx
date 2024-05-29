import CloseIcon from "@/components/SvgIcons/CloseIcon";
import VideoForm from "@/components/shorts-ui/VideoForm";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

const PublishPage = () => {
  return (
    // Top navigation for this part only
    <>
      <div className="top-header h-[80px] flex justify-between px-10 items-center  border-b-[1px] border-[#EBEFF7] mb-10">
        <Button variant="link">
          {" "}
          <Link href={"/"} className="flex gap-2 items-center">
            {/* <MoveLeft />
          <p className="text-[1.125rem] font-medium">Back</p> */}
            <div className="bg-[#EEF6FF] w-[40px] h-[40px] 3xl:w-[56px] 3xl:h-[56px] rounded-full flex items-center justify-center">
              <div className=" w-[13px] h-[13px] 3xl:w-[16px] 3xl:h-[16px]">
                <CloseIcon />
              </div>
            </div>
          </Link>
        </Button>

        <div className="flex gap-4 items-center">
          <div>Skip to next</div>

          <Button>
            <div className="">Publish</div>
          </Button>
        </div>
      </div>

      <div className="container-full">
        <div className="relative justify-between  border-[#EAEBEC] items-center">
          <div className="items-center flex-1 gap-2">
            <p className="font-medium mb-2">video #73192398309480-34-0</p>
            <Progress className=" h-[2px] bg-[#CBD5E8]" value={86} />
            <div className="flex mt-2 mb-8 text-[#424854] text-[15px] justify-between items-center px-1">
              <p className="">102 out of 103 uploaded</p>
              <p className="">86%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-full">
        <VideoForm />
      </div>
    </>
  );
};

export default PublishPage;
