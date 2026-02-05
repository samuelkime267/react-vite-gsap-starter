import rivoIconImg from "@/assets/imgs/rivo-logo.png";
import { sidebarData, subSidebarData } from "@/data/sidebar.data";
import { cn } from "@/lib/utils";
import { NavLink, useLocation } from "react-router";
import Button from "./Button";
import { FiLogOut } from "react-icons/fi";

export default function Sidebar() {
  const { pathname } = useLocation();
  return (
    <div className="bg-surface w-[18rem] h-screen p-4 flex items-start justify-start flex-col gap-6">
      <div className="w-full flex items-center justify-start">
        <img src={rivoIconImg} alt="Rivo logo" className="w-14" />
      </div>

      <div className="w-full space-y-1">
        {sidebarData.map(({ name, link, Icon }, i) => {
          const isActive = pathname === link;

          return (
            <NavLink
              key={i}
              to={link}
              className={cn(
                "w-full flex items-center justify-start gap-2 border border-transparent p-2.5 text-white rounded-lg text-sm group hover:border-pri hover:text-pri  transition-colors duration-300",
                {
                  "border-pri text-pri": isActive,
                },
              )}
            >
              <Icon
                className={cn("size-4 text-white group-hover:text-pri", {
                  "border-pri text-pri": isActive,
                })}
              />
              {name}
            </NavLink>
          );
        })}
      </div>

      <div className="w-full space-y-1 mt-auto">
        {subSidebarData.map(({ name, link, Icon }, i) => {
          const isActive = pathname === link;

          return (
            <NavLink
              key={i}
              to={link}
              className={cn(
                "w-full flex items-center justify-start gap-2 border border-transparent p-2.5 text-white rounded-lg text-sm group hover:border-pri hover:text-pri  transition-colors duration-300",
                {
                  "border-pri text-pri": isActive,
                },
              )}
            >
              <Icon
                className={cn("size-4 text-white group-hover:text-pri", {
                  "border-pri text-pri": isActive,
                })}
              />
              {name}
            </NavLink>
          );
        })}
        <Button className="flex items-center justify-start gap-2 text-red-600 p-2.5 w-full text-sm">
          <FiLogOut />
          Logout
        </Button>
      </div>
    </div>
  );
}
