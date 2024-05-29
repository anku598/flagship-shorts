"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import VideoPlayerIcon from "../SvgIcons/VideoPlayerIcon";
import MultiselectDropdown from "./MultiselectDropdown";

import { TrashIcon } from "../SvgIcons/TrashIcon";
import SelectDropDownContent from "./SelectDropDownContent";
import TagTextarea from "./TagTextarea";

const VideoForm = () => {
  const [showControls, setShowControls] = useState(true);
  const [showThumbnail, setShowThumbnail] = useState(true);

  const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
    "Option 6",
    "Option 7",
  ];

  const handlePlayClick = () => {
    setShowControls(false);
    setShowThumbnail(false);
    const video = document.getElementById("video-player");
    video.play();
  };
  return (
    <div className="video-form-container flex xl:gap-[4.5rem] 2xl:gap-[5rem] 3xl:gap-[7.5rem]">
      <div className="w-[240px]  relative">
        <p className="mb-2">Video 1.mp4</p>
        <AspectRatio ratio={9 / 16}>
          {showThumbnail && (
            <>
              <img
                src="https://images.unsplash.com/photo-1558383745-6274e5c505c5?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="placeholder"
                className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
              />
              <div
                className="absolute inset-0 flex top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] items-center justify-center cursor-pointer xl:w-[25px] xl:h-[25px] 3xl:w-[35px] 3xl:h-[50px]"
                onClick={handlePlayClick}
              >
                <VideoPlayerIcon />
              </div>
            </>
          )}
          <video
            id="video-player"
            src="https://videos.pexels.com/video-files/4536494/4536494-hd_1080_1920_30fps.mp4"
            className={`w-full h-full rounded-[8px] ${
              showThumbnail ? "hidden" : ""
            }`}
            controls={showControls}
            onPlay={() => {
              setShowThumbnail(false);
            }}
            onPause={() => {
              setShowThumbnail(true);
            }}
            onEnded={() => {
              setShowThumbnail(true);
            }}
          >
            <source
              src="https://videos.pexels.com/video-files/4536494/4536494-hd_1080_1920_30fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </AspectRatio>

        <div className="text-primary mt-4 mb-[0px] tracking-[-0.15px] text-[14px] cursor-pointer">
          Upload Thumbnail
        </div>
        <div>or</div>
        <div className=" font-[500] mt-2 mb-[8px] tracking-[-0.15px] text-[14px] capitalize">
          Pick a frame as Thumbnail
        </div>

        <Slider defaultValue={[33]} max={100} step={1} />
        <div className="text-[14px] mt-2 text-center">00:01:35</div>
        <div className="thumb mt-3">
          <img
            src="https://images.unsplash.com/photo-1558383745-6274e5c505c5?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-[48px] rounded-[3px]"
          />
        </div>
      </div>

      <form className=" w-full mb-4">
        <div className="flex gap-3 mb-[1.5rem]">
          <div className="w-full">
            <label htmlFor="category" className="mb-4 block font-medium  ">
              Category*
            </label>
            <MultiselectDropdown options={options} className="h-[48px]" />
          </div>
          <div className="w-full">
            <label htmlFor="channel" className="mb-4 block font-medium  ">
              Select Channel*
            </label>
            <SelectDropDownContent options={options} className="h-[48px]" />
          </div>
        </div>

        <div className="mb-[1.5rem]">
          <label htmlFor="title" className="mb-4 block font-medium">
            Title
          </label>
          <input type="text" name="title" className=" custom-input-style" />
        </div>

        <div className="mb-[1.5rem]">
          <label htmlFor="name" className="mb-4 block font-medium">
            Caption
          </label>
          <textarea
            rows="6"
            name="caption"
            className="resize-none h-auto rounded-[1.5rem] custom-input-style"
          />
        </div>

        <div className="mb-[1.5rem]">
          <label htmlFor="name" className="mb-4 block font-medium">
            Tags
          </label>
          <div className="border-[1px] border-[#C3C7CF] rounded-[1.25rem] py-3">
            <TagTextarea />
          </div>
        </div>

        <div>
          <p className="mb-[1.25rem] font-medium">CTA Button</p>
          <input
            type="text"
            name="name"
            className=" custom-input-style mb-[1.25rem]"
          />
          <input type="text" name="name" className=" custom-input-style" />
        </div>

        <div className="mt-[1.5rem] text-[#181A1E] font-[500] capitalize flex justify-between items-center">
          <div className="flex gap-3">
            <div className="flex items-center space-x-2">
              <Label htmlFor="comments">Allow Comments</Label>
              <Switch id="comments" />
            </div>

            <div className="flex items-center space-x-2">
              <Label htmlFor="comments">Allow Sharing</Label>
              <Switch id="comments" />
            </div>

            <div className="flex items-center space-x-2">
              <Label htmlFor="comments">Do not allow Ads</Label>
              <Switch id="comments" />
            </div>
          </div>

          <div className="border border-[#C3C7CF] w-[27px] h-[27px] 3xl:w-[40px] 3xl:h-[40px] rounded-full flex items-center justify-center">
            <div className=" w-[13px] h-[13px] 3xl:w-[16px] 3xl:h-[16px]">
              <TrashIcon />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VideoForm;
