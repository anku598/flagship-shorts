"use client";
import BatchUploadContainer from "@/components/shorts-ui/BatchUploadContainer";
import { UploadFile } from "@/components/shorts-ui/UploadFile";
import { useState } from "react";

const UploadPage = () => {
  const [isBatchUpload, setIsBatchUpload] = useState(false);

  const handleFileDrop = (files) => {
    const filesArray = Array.from(files);
    setIsBatchUpload(true);
  };
  return (
    <div className="page-container-with-sidebar">
      {isBatchUpload ? (
        <div className="">
          <BatchUploadContainer />
        </div>
      ) : (
        <UploadFile onFileDrop={handleFileDrop} />
      )}
    </div>
  );
};

export default UploadPage;
