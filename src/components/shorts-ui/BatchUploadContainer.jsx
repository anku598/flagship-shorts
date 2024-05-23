import { Upload } from "lucide-react";
import { Button } from "../ui/button";
import BatchUploadCard from "./BatchUploadCard";
import SingleUploadCard from "./SingleUploadCard";

const BatchUploadContainer = () => {
  return (
    <div className="">
      <div className="text-right">
        <Button className="mb-7">
          {" "}
          <Upload size={"17px"} className="mr-2" /> Upload{" "}
        </Button>
      </div>
      <div className="mb-2 ml-1 font-semibold">Uploads</div>
      <BatchUploadCard />
      <div className="flex mt-3 text-[#424854] text-[15px] justify-between items-center px-1">
        <p className="">0 out 1 uploaded</p>
        <p className="">30MB/100MB - 100Mb remaining</p>
      </div>

      <SingleUploadCard />
      {/* <SingleUploadCard />
      <SingleUploadCard />
      <SingleUploadCard /> */}
    </div>
  );
};

export default BatchUploadContainer;
