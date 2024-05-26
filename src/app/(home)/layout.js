import { MainNav } from "@/components/shorts-ui/Navigation/MainNav";
import { SideNav } from "@/components/shorts-ui/Navigation/SideNav.";
import "../globals.css";

export default function HomeLayout({ children }) {
  return (
    <section>
      <MainNav />
      <main className="flex text-body-color">
        <SideNav></SideNav>
        <div className=" w-full">{children}</div>
      </main>
    </section>
  );
}
