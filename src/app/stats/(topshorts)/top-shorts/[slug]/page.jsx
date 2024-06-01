import { Chart } from "@/components/shorts-ui/Chart";
import { StatsFilterBar } from "@/components/shorts-ui/StatsFilterBar";

const ShortsDetails = () => {
  return (
    <div className="container-full pb-[100px]">
      <h2 className="xl:text-[22px] 3xl:text-[32px] mb-[48px] leading-[38px] font-[500]">
        Video Overview
      </h2>

      <div className="flex items-center gap-[20px]">
        <img
          className="w-[90px] h-[160px] rounded-[4px]"
          src="https://images.unsplash.com/photo-1558383745-6274e5c505c5?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="thumb Image"
        />

        <div className="">
          <div className="xl:text-[22px] 3xl:text-[32px] mb-[12px]">
            lorem ipsum
          </div>
          <div className="flex gap-[10px] items-center">
            <img
              className="inline-block w-[32px] h-[32px] rounded-full "
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <h4 className="font-20px text-[#181A1E] capitalize">Chorki</h4>
          </div>
        </div>
      </div>

      <StatsFilterBar />
      <Chart />
    </div>
  );
};

export default ShortsDetails;
