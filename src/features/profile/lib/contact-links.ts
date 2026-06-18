import type { LucideIcon } from "lucide-react";
import { profileInfo } from "@/content/profile";
import type { SocialLink } from "@/features/profile/types";
import { getIcon } from "@/shared/lib/icons";

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
};

export const getSocialLink = (socialId: string) => {
  return profileInfo.socials.find((social) => social.id === socialId);
};

export const getContactLinks = (): ContactLink[] => {
  const socials: readonly SocialLink[] = profileInfo.socials;
  const socialLinks = socials.map((social) => ({
    label: social.label,
    value: social.value ?? getSocialValue(social.href),
    href: social.href,
    icon: getIcon(social.icon),
  }));

  return [
    ...socialLinks,
    {
      label: profileInfo.resume.label,
      value: profileInfo.resume.contactValue,
      href: profileInfo.resume.href,
      icon: getIcon("fileText"),
    },
  ];
};

const getSocialValue = (href: string) => {
  if (href.startsWith("mailto:")) {
    return href.replace("mailto:", "");
  }

  return href
    .replace("https://www.", "")
    .replace("https://", "")
    .replace(/\/$/, "");
};
