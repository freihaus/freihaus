import CustomIcon from "../icons/logo";
import { GiGearHammer } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineContactPhone } from "react-icons/md";
import { IoImages } from "react-icons/io5";



export const NavbarItems: {
  name: string;
  icon: React.ElementType;
  link: string;
}[] = [
  { name: "Home", icon: CustomIcon, link: "/" },
  { name: "Projekte", icon: GiGearHammer, link: "/projekte" },
  { name: "Über Uns", icon: FaPeopleGroup, link: "/ueberuns" },
  {name: "Galerie", icon: IoImages, link: "/galerie"},
  { name: "Kontakt", icon: MdOutlineContactPhone, link: "/kontakt" },
];

export const ProjektItems: {
  name: string;
  link: string;
}[] = [
  { name: "Die Villa Felsenhöhe", link: "/villa-felsenhoehe" },
  { name: "Die Gerschwendi", link: "/gerschwendi" },
  { name: "Das Kollbrunner Haus", link: "/kollbrunner-haus" },
  { name: "Das Hüsli von der Felsenhöhe", link: "/huesli" },
  { name: "Ein kleines Dorf in St. Gallien", link: "/dorf-stgallien" },
  { name: "Der Sandkasten", link: "/sandkasten" },
]

export const FooterItems: {
  name: string;
  link: string;
}[] = [
  { name: "Kontakt", link: "/kontakt" },
  { name: "Datenschutz", link: "/datenschutz" },
  { name: "AGB", link: "/agb" },
]