import AddIcon from "@/components/SvgIcons/AddIcon";
import AddPopup from "@/components/shorts-ui/AddPopup";
import { SettingsNav } from "@/components/shorts-ui/Navigation/SettingsNav";
import SearchBarComponent from "@/components/shorts-ui/SearchBarComponent";
import { UserListItem } from "@/components/shorts-ui/UserListItem";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

const UsersPage = () => {
  return (
    <div className="page-container-with-sidebar">
      <SettingsNav />

      <div className="relative flex gap-4 mb-[2rem]">
        <SearchBarComponent />

        <Dialog>
          <DialogTrigger asChild>
            <Button className="rounded-full lg:max-3xl:text-[16px] 3xl:text-[20px] font-[500] 3xl:leading-[24.2px] xl:px-[30px] px-[40px] lg:h-[47px] 3xl:h-[56px] ">
              <div className="mr-[14px]">
                <AddIcon />
              </div>
              New User
            </Button>
          </DialogTrigger>
          <AddPopup isDefaultHeader={false} />
        </Dialog>
      </div>

      <p className="text-[1.25rem] font-medium mb-[16px]">All Users</p>
      <UserListItem />
      <UserListItem />
    </div>
  );
};

export default UsersPage;
