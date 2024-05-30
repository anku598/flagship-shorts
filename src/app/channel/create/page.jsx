import { Info } from "@/components/SvgIcons/Info";
import { MoveRightIcon } from "@/components/SvgIcons/MoveRightIcon";
import InputSelect from "@/components/shorts-ui/InputSelect";
import MultiselectDropdown from "@/components/shorts-ui/MultiselectDropdown";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { MoreVerticalIcon, Plus, PlusIcon, X } from "lucide-react";

const options = [
  "Option 1",
  "Option 2",
  "Option 3",
  "options 4",
  "Option 5",
  "Option 6",
  "Option 7",
  "Option 8",
  ,
];

const ChannelCreatePage = async () => {
  return (
    <div>
      <div className="container-full flex-col lg:flex-row flex lg:gap-[4rem] 3xl:gap-[5rem] min-h-[calc(100vh-80px)] pb-[4rem]">
        <div className="file-upload flex flex-col items-center lg:flex-1">
          <input type="file" name="file" id="file" className="inputfile" />
          <label
            htmlFor="file"
            className="flex items-center justify-center w-[150px]  3xl:w-[240px] h-[150px] 3xl:h-[240px] bg-[#EAEBEC] rounded-full cursor-pointer"
          >
            <Plus />
            <img
              id="imagePreview"
              className="hidden w-24 h-24 rounded-full object-cover"
            />
          </label>
          <span className="mt-2 text-primary capitalize tracking-[-0.15px] text-[1rem]">
            Upload Picture
          </span>
        </div>

        <div className="w-full">
          <form>
            <div className="mb-[1.5rem]">
              <label htmlFor="name" className="mb-3 block ">
                Name*
              </label>
              <input type="text" name="name" className=" custom-input-style" />
            </div>

            <div className="mb-[1.5rem]">
              <label htmlFor="name" className="mb-3 block ">
                Description*
              </label>
              <textarea
                rows="6"
                name="description"
                className="resize-none h-auto rounded-[1.5rem] custom-input-style"
              />
            </div>

            <div className="mb-[4rem]">
              <label htmlFor="Users" className="mb-3 block ">
                Users*
              </label>
              <div className="w-full relative flex justify-between items-center custom-input-style h-[3.5rem] px-[10px]">
                {/* <p>No User Yet</p> */}

                <div className="flex items-center gap-3">
                  <div className="selected-user rounded-full min-w-[270px] 2xl:min-w-[270px] 3xl:min-w-[300px] bg-[#EEF6FF] flex justify-between items-center px-[12px] py-2">
                    <div className="flex items-center gap-2">
                      <img
                        className="inline-block h-[20px] w-[20px] rounded-full"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <div className="user-name text-[14px] 2xl:text-[15px] 3xl:text-[1rem] font-bold capitalize">
                        Stephen Louis .
                      </div>
                      <div className="role-name text-[14px] 2xl:text-[15px] 3xl:text-[1rem]">
                        {" "}
                        Publisher
                      </div>
                    </div>
                    <div className="cursor-pointer">
                      {/* <MoreVerticalEditIcon className="w-full" /> */}
                      <MoreVerticalIcon size={"14px"} />
                    </div>
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="link"
                      size="xs"
                      className="border-[1px] border-[#C3C7CF] text-[#181A1E] font-medium"
                    >
                      <div>Add User</div>
                      <div className="ml-2">
                        <MoveRightIcon />
                      </div>
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-[900px] px-[4rem] py-[2.2rem]">
                    <div className="flex justify-between w-full">
                      <div className="flex items-center gap-4">
                        <img
                          className="inline-block h-[40px] w-[40px] rounded-full ring-2 ring-white"
                          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <div className="channel-name text-[1.813rem]">
                          Chorki
                        </div>
                      </div>
                      <div className="cursor-pointer">
                        {" "}
                        <X />
                      </div>
                    </div>

                    <InputSelect />
                    <InputSelect />
                    <InputSelect />
                    {/* <InputSelect />
                    <InputSelect /> */}
                    <div className="text-primary text-[16px] font-[500] flex items-center gap-1 px-0 cursor-pointer">
                      <PlusIcon size={"16px"} />
                      Add User
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Info />
                        <p className="font-light">
                          You can add new users to this channel from here
                        </p>
                      </div>

                      <Button className="rounded-full" size="lg">
                        Send Invite
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div>
              <p className=" font-medium font-20px xl:max-2xl:text-[1.125rem] mb-5">
                Pre-defiined metadata for all shorts
              </p>
            </div>

            <div className="mb-[1.5rem] xl:w-[65%] 3xl:w-[50%]">
              <label htmlFor="category" className="mb-4  block">
                Category
              </label>
              <MultiselectDropdown options={options} />
            </div>

            <div className="mb-[1.5rem]">
              <label htmlFor="title" className="mb-4 block  font-medium">
                Title
              </label>
              <input type="text" name="title" className=" custom-input-style" />
            </div>

            <div className="mb-[1.5rem]">
              <label htmlFor="name" className="mb-4 block  font-medium">
                Caption
              </label>
              <textarea
                rows="6"
                name="caption"
                className="resize-none h-auto rounded-[1.5rem] custom-input-style"
              />
            </div>

            <div>
              <p className="mb-[1.25rem] font-medium ">CTA Button</p>
              <input
                type="text"
                name="name"
                placeholder="Button Label"
                className="custom-input-style mb-[1.25rem]"
              />
              <input
                placeholder="Button URL"
                type="text"
                name="name"
                className=" custom-input-style"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChannelCreatePage;
