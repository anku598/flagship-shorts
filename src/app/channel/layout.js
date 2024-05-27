import { TopHeader } from "@/components/shorts-ui/Navigation/TopHeader";

import "../globals.css";

export default function ChannelLayout({ children }) {
  return (
    <section>
      <TopHeader />
      <main className="flex text-body-color">
        <div className="w-full">{children}</div>
      </main>
    </section>
  );
}
