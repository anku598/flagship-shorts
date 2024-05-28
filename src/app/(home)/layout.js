import { ContainerLayoutWithSideNav } from "@/components/shorts-ui/ContainerLayoutWithSideNav";
import "../globals.css";

export default function HomeLayout({ children }) {
  return <ContainerLayoutWithSideNav>{children}</ContainerLayoutWithSideNav>;
}
