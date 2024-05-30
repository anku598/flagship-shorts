import "../../../globals.css";

import { TopHeader } from "@/components/shorts-ui/Navigation/TopHeader";

export default function TopShortsLayout({ children }) {
  return (
    <section>
      <TopHeader onlyCloseButton="true" />
      <main className="flex text-body-color">
        <div className="w-full">{children}</div>
      </main>
    </section>
  );
}
