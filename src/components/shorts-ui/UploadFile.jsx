"use client";
import { Upload } from "lucide-react";
import { useRef } from "react";

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
      className="flex items-center justify-center w-full"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleDivClick}
    >
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-125px)]  border-gray-300 border-0  cursor-pointer bg-[#F3F4F5] dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <p className="mb-3 text-[1.25rem]  capitalize">
            drag and drop all files here
          </p>
          <p className="mb-3 text-[1.25rem]">or</p>
          {/* <Button className="rounded-full">
            {" "}
            <Upload className="mr-2" size={"17px"} /> Upload
          </Button> */}
          <p className="bg-primary flex items-center text-white rounded-full h-10 px-4 py-2 ">
            {" "}
            <Upload className="mr-2" size={"17px"} /> Upload
          </p>
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
