import { Settings } from "lucide-react";
import {
  FaClock,
  FaFire,
  FaHistory,
  FaHome,
  FaStream,
  FaVideo,
} from "react-icons/fa";

export const sidebarData = [
  {
    name: "Home",
    link: "/",
    Icon: FaHome,
  },
  {
    name: "Trending",
    link: "/trending",
    Icon: FaFire,
  },
  {
    name: "Streams",
    link: "/streams",
    Icon: FaStream,
  },
  {
    name: "Videos",
    link: "/videos",
    Icon: FaVideo,
  },

  {
    name: "History",
    link: "/history",
    Icon: FaHistory,
  },
  {
    name: "Watch Later",
    link: "/watch-later",
    Icon: FaClock,
  },
];
export const subSidebarData = [
  {
    name: "Settings",
    link: "/settings",
    Icon: Settings,
  },
];
