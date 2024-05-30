import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";

export const StatsCard = ({ headerTitle, listItems, itemType }) => {
  const showSeeMore = listItems.length > 2;
  return (
    <Card className="w-full">
      <CardHeader className="">
        <div className="flex justify-between items-center font-20px font-[500] mb-[20px]">
          <div className="">{headerTitle}</div>
          <div>Views</div>
        </div>
      </CardHeader>
      <CardContent>
        {listItems.map((item, index) => (
          <div key={index}>
            {itemType === "shorts" && (
              <div
                className={`flex justify-between items-center ${
                  index !== listItems.length - 1 &&
                  "border-b-[1px] border-b-[#EAEBEC] py-[12px]"
                }`}
              >
                <div className="flex items-center  gap-[20px]">
                  <img
                    className="xl:h-[65px] w-[45px] h-[80px] rounded-[4px]"
                    src="https://images.unsplash.com/photo-1558383745-6274e5c505c5?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="thumb Image"
                  />

                  <div className="">
                    <div className="font-18px xl:mb-[8px] 3xl:mb-[12px]">
                      lorem ipsum
                    </div>
                    <div className="flex gap-[10px] items-center">
                      <img
                        className="inline-block w-[20px] h-[20px] rounded-full "
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <h4 className="text-[14px] text-[#181A1E] capitalize">
                        Chorki
                      </h4>
                    </div>
                  </div>
                </div>

                <div>321</div>
              </div>
            )}

            {itemType === "channel" && (
              <div
                className={`flex justify-between items-center ${
                  index !== listItems.length - 1 &&
                  "border-b-[1px] border-b-[#EAEBEC] py-[12px]"
                }`}
              >
                <div className="flex gap-[10px] items-center">
                  <img
                    className="inline-block w-[48px] h-[48px] rounded-full "
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <h4 className="font-18px text-[#181A1E] capitalize">
                    chorki
                  </h4>
                </div>

                <div>332</div>
              </div>
            )}
          </div>
        ))}
      </CardContent>
      {showSeeMore && (
        <CardFooter className="justify-end">
          {itemType === "shorts" && (
            <Link
              href="/stats/top-shorts"
              className="text-primary mt-[32px] cursor-pointer"
            >
              See More
            </Link>
          )}
          {itemType === "channel" && (
            <Link
              href="/stats/top-channels"
              className="text-primary mt-[32px] cursor-pointer"
            >
              See More
            </Link>
          )}
        </CardFooter>
      )}
    </Card>
  );
};
