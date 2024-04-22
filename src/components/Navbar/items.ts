import CustomIcon from "../icons/logo";
import { GiGearHammer } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineContactPhone } from "react-icons/md";


export const NavbarItems: { name: string; icon: React.ElementType; link: string }[] = [
  { name: "Home", icon: CustomIcon, link: "/"},
  { name: "Projekte", icon: GiGearHammer, link: "/projekte" },
  { name: "Über Uns", icon: FaPeopleGroup, link: "/ueberuns"},
  { name: "Kontakt", icon: MdOutlineContactPhone, link: "/kontakt"},
];

