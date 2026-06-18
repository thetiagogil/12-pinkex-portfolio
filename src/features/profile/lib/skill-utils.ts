import { skillGroups } from "@/content/profile";
import type { SkillGroup } from "@/features/profile/types";

type SkillGroupId = (typeof skillGroups)[number]["id"];

export const getSkillItems = (groupId: SkillGroupId) => {
  return skillGroups.find((group) => group.id === groupId)?.items ?? [];
};

export const getPreviewSkillGroups = () => {
  return skillGroups.filter((group) => getPreviewSkillItems(group).length > 0);
};

export function getPreviewSkillItems(group: SkillGroup) {
  return group.previewLimit ? group.items.slice(0, group.previewLimit) : [];
}
