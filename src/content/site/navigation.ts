import type { NavigationLinks } from "@/shared/types/navigation";

export const navigationLinks: NavigationLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects", end: false },
  { to: "/about", label: "About", end: false },
  { to: "/contact", label: "Contact", end: false },
];
