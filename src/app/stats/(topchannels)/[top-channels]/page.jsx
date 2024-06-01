import TableLists from "@/components/shorts-ui/TableLists";

const dummyData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    title: "Chorki",
    views: 12,
    likes: 120,
    comments: 20,
    share: 20,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    title: "Chorki",
    views: 12,
    likes: 120,
    comments: 20,
    share: 20,
  },
];

const TopChannels = () => {
  return (
    <div className="container-full">
      <h2 className="xl:text-[22px] 3xl:text-[32px] mb-[14px] leading-[38px] font-[500]">
        Shorts Billboard
      </h2>
      <div className="font-20px">Top 50 shorts</div>

      <div className="table-layout mt-[40px]">
        <TableLists data={dummyData} listType="channel" />
      </div>
    </div>
  );
};

export default TopChannels;
