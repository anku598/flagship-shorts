import Handshake from "@/components/SvgIcons/Handshake";
import { MoreVerticalEditIcon } from "@/components/SvgIcons/MoreVerticalEditIcon";
import { MoveRightIcon } from "@/components/SvgIcons/MoveRightIcon";
import InputSelect from "@/components/shorts-ui/InputSelect";
import { MultiSelect } from "@/components/shorts-ui/MultiSelect";
import { TopHeader } from "@/components/shorts-ui/Navigation/TopHeader";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Plus, PlusIcon, X } from "lucide-react";

const ChannelCreatePage = async () => {
  return (
    <div>
      <TopHeader />
      <div className="w-[85%] mx-auto flex-col lg:flex-row flex lg:gap-[7.5rem] min-h-[calc(100vh-70px)] pb-[4rem]">
        <div className="file-upload flex flex-col items-center lg:flex-1">
          <input type="file" name="file" id="file" className="inputfile" />
          <label
            for="file"
            className="flex items-center justify-center w-[100px] lg:w-[200px] h-[100px] lg:h-[200px] bg-[#EEF6FF] rounded-full cursor-pointer"
          >
            <Plus />
            <img
              id="imagePreview"
              className="hidden w-24 h-24 rounded-full object-cover"
            />
          </label>
          <span class="mt-2 text-primary capitalize tracking-[-0.15px] text-[1rem]">
            Upload Picture
          </span>
        </div>

        <div className="w-full">
          <form>
            <div className="mb-[1.5rem]">
              <label htmlFor="name" className="mb-4 block">
                Name*
              </label>
              <input type="text" name="name" className=" custom-input-style" />
            </div>

            <div className="mb-[1.5rem]">
              <label htmlFor="name" className="mb-4 block">
                Description*
              </label>
              <textarea
                rows="6"
                name="description"
                className="resize-none h-auto rounded-[1.5rem] custom-input-style"
              />
            </div>

            <div className="mb-[4rem]">
              <label htmlFor="Users" className="mb-3 block">
                Users*
              </label>
              <div className="w-full relative flex justify-between items-center custom-input-style h-[3.5rem] px-[1.2rem]">
                {/* <p>No User Yet</p> */}

                <div className="flex items-center gap-3">
                  <div className="selected-user rounded-full min-w-[300px] bg-[#EEF6FF] flex justify-between items-center px-4 py-2">
                    <div className="flex items-center gap-2">
                      <img
                        class="inline-block h-[20px] w-[20px] rounded-full"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <div className="user-name text-[1rem] font-bold capitalize">
                        Stephen Louis .
                      </div>
                      <div className="role-name"> Publisher</div>
                    </div>
                    <div className="cursor-pointer">
                      <MoreVerticalEditIcon />
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
                          class="inline-block h-[40px] w-[40px] rounded-full ring-2 ring-white"
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
                    <Button
                      variant="link"
                      className="text-primary items-start justify-start px-0"
                    >
                      <PlusIcon size={"17px"} />
                      Add User
                    </Button>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Handshake />
                        <p className="font-light">
                          Lorem ipsum dolor sit amet consectetur. Mauris sapien
                          mattis{" "}
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
              <p className=" font-medium text-[1.25rem] mb-5">
                Pre-defiined metadata for all shorts
              </p>
            </div>

            <div className="mb-[1.5rem]">
              <label htmlFor="category" className="mb-4 block">
                Category
              </label>
              <MultiSelect />
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

            <div>
              <p className="mb-[1.25rem] font-medium">CTA Button</p>
              <input
                type="text"
                name="name"
                className=" custom-input-style mb-[1.25rem]"
              />
              <input type="text" name="name" className=" custom-input-style" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChannelCreatePage;
