"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";

const TableLists = ({ data, listType = "channel" }) => {
  return (
    <ScrollArea className="xl:h-[350px] 3xl:h-[700px]">
      <Table>
        <TableHeader className="bg-transparent">
          <TableRow>
            <TableHead className="w-[30px]"></TableHead>
            <TableHead className="w-[60%] text-[#181A1E] font-[500] capitalize font-20px">
              Titles
            </TableHead>
            <TableHead className="text-center text-[#181A1E] font-[500] capitalize font-20px">
              Views
            </TableHead>
            <TableHead className="text-center text-[#181A1E] font-[500] capitalize font-20px">
              Likes
            </TableHead>
            <TableHead className="text-center text-[#181A1E] font-[500] capitalize font-20px">
              Comments
            </TableHead>
            <TableHead className="text-center text-[#181A1E] font-[500] capitalize font-20px">
              Share
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index} className="border-b-[1px] border-b-[#EAEBEC]">
              <TableCell className="border-b-[1px] border-b-[#EAEBEC]">
                {index + 1}
              </TableCell>

              {listType === "channel" && (
                <TableCell className="w-[60%] border-b-[1px] border-b-[#EAEBEC]">
                  <Link
                    href={`/stats/top-channels/${item.id}`}
                    className="flex gap-[10px] items-center"
                  >
                    <img
                      className="inline-block w-[48px] h-[48px] rounded-full"
                      src={item.image}
                      alt={item.title}
                    />
                    <h4 className="font-18px text-[#181A1E] capitalize">
                      {item.title}
                    </h4>
                  </Link>
                </TableCell>
              )}

              {listType === "shorts" && (
                <TableCell className="w-[60%] border-b-[1px] border-b-[#EAEBEC]">
                  <Link href={`/stats/top-shorts/${item.id}`}>
                    <div className="flex items-center gap-[20px]">
                      <img
                        className="w-[45px] h-[80px] rounded-[4px]"
                        src="https://images.unsplash.com/photo-1558383745-6274e5c505c5?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="thumb Image"
                      />

                      <div className="">
                        <div className="font-18px mb-[12px]">lorem ipsum</div>
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
                  </Link>
                </TableCell>
              )}
              <TableCell className="text-center border-b-[1px] border-b-[#EAEBEC]">
                {item.views}
              </TableCell>
              <TableCell className="text-center border-b-[1px] border-b-[#EAEBEC]">
                {item.likes}
              </TableCell>
              <TableCell className="text-center border-b-[1px] border-b-[#EAEBEC]">
                {item.comments}
              </TableCell>
              <TableCell className="text-center border-b-[1px] border-b-[#EAEBEC]">
                {item.share}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
};

export default TableLists;
