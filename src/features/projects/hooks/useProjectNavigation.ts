import { useMemo } from "react";
import type { Project } from "@/features/projects/types";
import { getProjectNavigation } from "@/features/projects/lib/project-navigation";
import { projects } from "@/features/projects/lib/project-queries";

export const useProjectNavigation = (project?: Project) => {
  return useMemo(
    () => (project ? getProjectNavigation(project, projects) : {}),
    [project],
  );
};
