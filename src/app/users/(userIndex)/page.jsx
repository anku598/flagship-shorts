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
            <Button className="rounded-full text-[20px] px-[40px] font-[500] leading-[24.2px]">
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
