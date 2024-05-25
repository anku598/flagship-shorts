import { TopHeaderForVideoPublish } from "@/components/shorts-ui/Navigation/TopHeaderForVideoPublish";
import "../../../globals.css";

export default function BatchIdLayout({ children }) {
  return (
    <section>
      <main className="flex flex-col text-body-color">
        <TopHeaderForVideoPublish />
        <div className=" pt-[3rem] w-full">{children}</div>
      </main>
    </section>
  );
}
