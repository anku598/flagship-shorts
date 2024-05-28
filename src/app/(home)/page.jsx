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
          className="rounded-full lg:max-3xl:text-[16px] 3xl:text-[20px] font-[500] 3xl:leading-[24.2px] xl:px-[30px] px-[40px] lg:h-[47px] 3xl:h-[56px] 3xl:py-[8px]"
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

      <p className="xl:text-[16px] 2xl:text-[1.1rem] text-[1.25rem] font-[500] leading-[24.2px] xl:mb-2 mb-3 capitalize text-body-color">
        All Channels
      </p>
      <ChannelSingleList />
      <ChannelSingleList />
    </div>
  );
}
