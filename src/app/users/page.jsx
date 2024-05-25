import AddIcon from "@/components/SvgIcons/AddIcon";
import { SettingsNav } from "@/components/shorts-ui/Navigation/SettingsNav";
import { UserListItem } from "@/components/shorts-ui/UserListItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";

const UsersPage = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-70px)] w-[85%] mx-auto">
      <SettingsNav />

      <div className="relative flex gap-4 mb-[2rem]">
        <Search className="absolute left-2.5 top-[50%] translate-y-[-50%] h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search"
          className="w-full rounded-full bg-background pl-8"
        />

        <Button className="rounded-full  font-[1.25rem]" asChild>
          <Link href="/channel/create">
            <div className="mr-2">
              <AddIcon />
            </div>
            New User
          </Link>
        </Button>
      </div>

      <p className="text-[1.25rem] font-medium">All Users</p>
      <UserListItem />
      <UserListItem />
    </div>
  );
};

export default UsersPage;
