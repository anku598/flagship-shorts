import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TopChannels = () => {
  return (
    <div className="container-full">
      <h2 className="xl:text-[22px] 3xl:text-[32px] mb-[14px] leading-[38px] font-[500]">
        Shorts Billboard
      </h2>
      <div className="font-20px">Top 50 shorts</div>

      <div className="table-layout mt-[40px]">
        <ScrollArea className=" xl: h-[350px] 3xl:h-[700px]">
          <Table>
            <TableHeader className="bg-transparent ">
              <TableRow>
                <TableHead className="w-[30px]"></TableHead>
                <TableHead className=" w-[60%] text-[#181A1E] font-[500] capitalize font-20px">
                  Titles
                </TableHead>
                <TableHead className="text-center text-[#181A1E] font-[500] capitalize font-20px">
                  Views
                </TableHead>
                <TableHead className="text-center text-[#181A1E] font-[500] capitalize font-20px">
                  Likes
                </TableHead>
                <TableHead className="text-[#181A1E] text-center font-[500] capitalize font-20px">
                  Comments
                </TableHead>
                <TableHead className="text-[#181A1E] text-center font-[500] capitalize font-20px ">
                  Share
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b-[1px] border-b-[#EAEBEC]">
                <TableCell className="border-b-[1px] border-b-[#EAEBEC]">
                  1
                </TableCell>
                <TableCell className="w-[60%] border-b-[1px] border-b-[#EAEBEC]">
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
                </TableCell>

                <TableCell className="text-center border-b-[1px] border-b-[#EAEBEC]">
                  12
                </TableCell>
                <TableCell className="text-center border-b-[1px] border-b-[#EAEBEC]">
                  120
                </TableCell>
                <TableCell className="text-center border-b-[1px] border-b-[#EAEBEC]">
                  20
                </TableCell>
                <TableCell className="text-center border-b-[1px] border-b-[#EAEBEC]">
                  20
                </TableCell>
              </TableRow>
              <TableRow className="border-b-[1px] border-b-[#EAEBEC]">
                <TableCell className="border-b-[1px] border-b-[#EAEBEC]">
                  1
                </TableCell>
                <TableCell className="w-[60%] border-b-[1px] border-b-[#EAEBEC]">
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
                </TableCell>

                <TableCell className="text-center border-b-[1px] border-b-[#EAEBEC]">
                  12
                </TableCell>
                <TableCell className="text-center border-b-[1px] border-b-[#EAEBEC]">
                  120
                </TableCell>
                <TableCell className="text-center border-b-[1px] border-b-[#EAEBEC]">
                  20
                </TableCell>
                <TableCell className="text-center border-b-[1px] border-b-[#EAEBEC]">
                  20
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </div>
  );
};

export default TopChannels;
