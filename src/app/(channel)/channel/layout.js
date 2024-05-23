import { TopHeader } from "@/components/shorts-ui/Navigation/TopHeader";
import { Inter } from "next/font/google";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Channel Create",
  description: "Generated by create next app",
};

export default function ChannelLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopHeader />
        <main className="flex text-body-color">
          <div className=" w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
