import "../../app/globals.css";
import { MainNav } from "./Navigation/MainNav";
import { SideNav } from "./Navigation/SideNav.";

export const ContainerFullLayoutWithSideNav = ({ children }) => {
  return (
    <section>
      <MainNav />

      <main className="flex text-body-color   justify-between  3xl:gap-[179px] lg:gap-[143px]">
        <div className=" pl-[48px]">
          <SideNav></SideNav>
        </div>
        <div className="w-full">{children}</div>
      </main>
    </section>
  );
};
