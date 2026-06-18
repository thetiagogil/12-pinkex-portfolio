import { projectEntries } from "@/content/projects";
import type { Project, Projects } from "@/features/projects/types";

export const projects: Projects = [...projectEntries].sort(
  (firstProject, secondProject) =>
    Date.parse(secondProject.date.start) - Date.parse(firstProject.date.start),
);

export const getProjectById = (projectId: string) => {
  return projects.find((project) => project.id === projectId);
};

export const getFeaturedProjects = (limit: number): readonly Project[] => {
  return projects.slice(0, Math.max(0, limit));
};
