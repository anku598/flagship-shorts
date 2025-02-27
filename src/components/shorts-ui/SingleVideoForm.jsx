import { MoreVerticalEditIcon } from "@/components/SvgIcons/MoreVerticalEditIcon";
import { MoveRightIcon } from "@/components/SvgIcons/MoveRightIcon";
import { MultiSelect } from "@/components/shorts-ui/MultiSelect";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import AddPopup from "./AddPopup";
export const SingleVideoForm = () => {
  return (
    <div>
      <div className="w-[85%] mx-auto flex-col lg:flex-row flex lg:gap-[7.5rem] min-h-[calc(100vh-70px)] pb-[4rem]">
        <div className="file-upload flex flex-col items-center">
          <input type="file" name="file" id="file" className="inputfile" />
          <label htmlFor="file" className="cursor-pointer">
            <span className="mt-2 text-primary capitalize tracking-[-0.15px] text-[1rem]">
              Upload Picture
            </span>
          </label>
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
                        className="inline-block h-[20px] w-[20px] rounded-full"
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

                  <AddPopup />
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
