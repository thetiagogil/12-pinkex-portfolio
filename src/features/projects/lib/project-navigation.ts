import type { Project } from "@/features/projects/types";

export type ProjectNavigation = {
  previousProject?: Project;
  nextProject?: Project;
};

export function getProjectNavigation(
  currentProject: Project,
  allProjects: readonly Project[],
): ProjectNavigation {
  return {
    previousProject: getPreviousProject(currentProject, allProjects),
    nextProject: getNextProject(currentProject, allProjects),
  };
}

export function getNextProject(
  currentProject: Project,
  allProjects: readonly Project[],
) {
  const currentProjectIndex = getProjectIndex(currentProject, allProjects);

  if (currentProjectIndex < 0 || allProjects.length <= 1) {
    return undefined;
  }

  return allProjects[(currentProjectIndex + 1) % allProjects.length];
}

export function getPreviousProject(
  currentProject: Project,
  allProjects: readonly Project[],
) {
  const currentProjectIndex = getProjectIndex(currentProject, allProjects);

  if (currentProjectIndex < 0 || allProjects.length <= 1) {
    return undefined;
  }

  return allProjects[
    (currentProjectIndex - 1 + allProjects.length) % allProjects.length
  ];
}

function getProjectIndex(
  currentProject: Project,
  allProjects: readonly Project[],
) {
  return allProjects.findIndex((project) => project.id === currentProject.id);
}
