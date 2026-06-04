import { HouseIcon, LibraryBigIcon, BrainIcon } from "lucide-react";
import { ROUTES } from "../../utils/consts/routes";

export const TABS_CONFIG = [
  {
    id: "home",
    title: "Home",
    href: ROUTES.HOME,
    icon: HouseIcon,
  },
  {
    id: "library",
    title: "Library",
    href: ROUTES.LIBRARY,
    icon: LibraryBigIcon,
  },
  {
    id: "practice",
    title: "Practice",
    href: ROUTES.PRACTICE,
    icon: BrainIcon,
  },
];
