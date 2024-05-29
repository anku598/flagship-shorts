"use client";
import { Upload } from "lucide-react";
import { useRef } from "react";
import { Button } from "../ui/button";

export const UploadFile = ({ onFileDrop }) => {
  const fileInputRef = useRef(null);
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      onFileDrop(files);
    }
  };

  const handleDivClick = () => {
    // Trigger the file input click event programmatically
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      onFileDrop(files);
    }
  };

  return (
    <div
      className="flex items-center min-h-full pt-[48px] justify-center w-full"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleDivClick}
    >
      <label
        htmlFor="dropzone-file"
        className="flex flex-col  items-center justify-center w-full  border-gray-300 border-0 min-h-[100%]  cursor-pointer bg-[#F3F4F5] dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pt-5 ">
          <p className="mb-2 3xl:mb-3 font-20px capitalize">
            drag and drop all files here
          </p>
          <p className="mb-2 3xl:mb-3 font-20px">or</p>

          <Button>
            <Upload className="mr-2" size={"17px"} /> Upload
          </Button>
        </div>
        <input
          ref={fileInputRef}
          onChange={handleFileChange}
          id="dropzone-file"
          type="file"
          className="hidden"
        />
      </label>
    </div>
  );
};
