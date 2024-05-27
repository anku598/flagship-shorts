import "../../app/globals.css";
import { MainNav } from "./Navigation/MainNav";
import { SideNav } from "./Navigation/SideNav.";

export const ContainerLayoutWithSideNav = ({ children }) => {
  return (
    <section>
      <MainNav />
      <main className="flex  text-body-color justify-between  3xl:gap-[179px] xl:gap-[143px] pr-[100px]">
        <div className=" pl-[48px]">
          <SideNav></SideNav>
        </div>
        <div className="w-full container-full">{children}</div>
      </main>
    </section>
  );
};
