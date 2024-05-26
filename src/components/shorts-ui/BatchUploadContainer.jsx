import { Upload } from "lucide-react";
import { Button } from "../ui/button";
import BatchUploadCard from "./BatchUploadCard";

const BatchUploadContainer = () => {
  return (
    <div className="pt-[3rem]">
      <div className="text-right">
        <Button className="mb-7">
          {" "}
          <Upload size={"17px"} className="mr-2" /> Upload{" "}
        </Button>
      </div>
      <div className="mb-2 ml-1 font-semibold">Uploads</div>
      <BatchUploadCard />
      <BatchUploadCard />
      <BatchUploadCard />
      <BatchUploadCard />
    </div>
  );
};

export default BatchUploadContainer;
