import AddIcon from "@/components/SvgIcons/AddIcon";
import { ChannelSingleList } from "@/components/shorts-ui/ChannelSingleList";
import { SettingsNav } from "@/components/shorts-ui/Navigation/SettingsNav";
import SearchBarComponent from "@/components/shorts-ui/SearchBarComponent";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <SettingsNav />

      <div className="relative flex gap-4 mb-[2.25rem] ">
        <SearchBarComponent />
        <Button
          className="rounded-full xl:max-3xl:text-[18px] 3xl:text-[20px] font-[500] leading-[24.2px] px-[40px]"
          asChild
        >
          <Link href="/channel/create">
            <div className="mr-[14px]">
              <AddIcon />
            </div>
            New Channel
          </Link>
        </Button>
      </div>

      <p className="text-[1.25rem] font-[500] leading-[24.2px] mb-3 capitalize text-body-color">
        All Channels
      </p>
      <ChannelSingleList />
      <ChannelSingleList />
    </div>
  );
}
