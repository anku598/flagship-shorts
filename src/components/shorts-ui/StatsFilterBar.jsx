import { CommonDropdown } from "./CommonDropdown";

export const StatsFilterBar = () => {
  const dropdownItems = ["7 Days", "30 Days", "6 Months", "12 Months"];
  return (
    <div className="mt-[48px] flex items-center justify-between pb-[20px] border-b-[1px] border-[#EAEBEC] mb-[80px]">
      <div className=" flex items-center gap-[1.3rem] 3xl:gap-[0rem]">
        <p className="text-[20px] 3xl:text-[30px] flex items-center gap-[5px] bg-[#EEF6FF] text-[#424854] font-[500] xl:px-[25px] xl:py-[15px] 3xl:px-[32px] 3xl:py-[17px] rounded-[100px] cursor-pointer ">
          475{" "}
          <span className="text-[14px] 3xl:text-[16px] text-[#424854]">
            views
          </span>
        </p>
        <p className="text-[20px] 3xl:text-[30px] flex items-center gap-[5px]  text-[#424854] font-[500] xl:px-[25px] xl:py-[15px] 3xl:px-[32px] 3xl:py-[17px] rounded-[100px] cursor-pointer ">
          475{" "}
          <span className="text-[14px] 3xl:text-[16px] text-[#424854]">
            Likes
          </span>
        </p>
        <p className="text-[20px] 3xl:text-[30px] flex items-center gap-[5px]  text-[#424854] font-[500] xl:px-[25px] xl:py-[15px] 3xl:px-[32px] 3xl:py-[17px] rounded-[100px] cursor-pointer ">
          451{" "}
          <span className="text-[14px] 3xl:text-[16px] text-[#424854]">
            Comments
          </span>
        </p>
        <p className="text-[20px] 3xl:text-[30px] flex items-center gap-[5px]  text-[#424854] font-[500] xl:px-[25px] xl:py-[15px] 3xl:px-[32px] 3xl:py-[17px] rounded-[100px] cursor-pointer ">
          1.2k{" "}
          <span className="text-[14px] 3xl:text-[16px] text-[#424854]">
            Active User
          </span>
        </p>
        <p className="text-[20px] 3xl:text-[30px] flex items-center gap-[5px]  text-[#424854] font-[500] xl:px-[25px] xl:py-[15px] 3xl:px-[32px] 3xl:py-[17px] rounded-[100px] cursor-pointer ">
          475{" "}
          <span className="text-[14px] 3xl:text-[16px] text-[#424854]">
            Avg Watch Time
          </span>
        </p>
      </div>

      <div className="flex items-center gap-[20px]">
        {/* <ChannelDropdown /> */}

        <div>
          <CommonDropdown
            triggerText="7 days"
            items={dropdownItems}
            align="end"
          />
        </div>
      </div>
    </div>
  );
};
