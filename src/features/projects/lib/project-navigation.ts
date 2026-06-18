import type { Project } from "@/features/projects/types";

export type ProjectNavigation = {
  previousProject?: Project;
  nextProject?: Project;
};

export const getProjectNavigation = (
  currentProject: Project,
  allProjects: readonly Project[],
): ProjectNavigation => {
  return {
    previousProject: getPreviousProject(currentProject, allProjects),
    nextProject: getNextProject(currentProject, allProjects),
  };
};

export const getNextProject = (
  currentProject: Project,
  allProjects: readonly Project[],
) => {
  const currentProjectIndex = getProjectIndex(currentProject, allProjects);

  if (currentProjectIndex < 0 || allProjects.length <= 1) {
    return undefined;
  }

  return allProjects[(currentProjectIndex + 1) % allProjects.length];
};

export const getPreviousProject = (
  currentProject: Project,
  allProjects: readonly Project[],
) => {
  const currentProjectIndex = getProjectIndex(currentProject, allProjects);

  if (currentProjectIndex < 0 || allProjects.length <= 1) {
    return undefined;
  }

  return allProjects[
    (currentProjectIndex - 1 + allProjects.length) % allProjects.length
  ];
};

const getProjectIndex = (
  currentProject: Project,
  allProjects: readonly Project[],
) => {
  return allProjects.findIndex((project) => project.id === currentProject.id);
};
