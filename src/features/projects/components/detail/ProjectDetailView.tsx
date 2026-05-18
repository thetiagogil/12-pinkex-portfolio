import { ProjectDetailHero } from "@/features/projects/components/detail/ProjectDetailHero";
import { ProjectImageCarousel } from "@/features/projects/components/detail/ProjectImageCarousel";
import { ProjectNavigationLinks } from "@/features/projects/components/detail/ProjectNavigationLinks";
import { ProjectStoryList } from "@/features/projects/components/detail/ProjectStoryList";
import { ProjectSummaryGrid } from "@/features/projects/components/detail/ProjectSummaryGrid";
import type { ProjectNavigation } from "@/features/projects/lib/project-navigation";
import type { Project } from "@/features/projects/types";

type ProjectDetailViewProps = ProjectNavigation & {
  project: Project;
  focus: string;
  returnTo: string;
};

export function ProjectDetailView({
  project,
  focus,
  returnTo,
  previousProject,
  nextProject,
}: ProjectDetailViewProps) {
  return (
    <>
      <ProjectDetailHero project={project} returnTo={returnTo} />
      <ProjectImageCarousel key={project.id} images={project.images} />
      <ProjectSummaryGrid project={project} focus={focus} />
      <ProjectStoryList project={project} />

      <ProjectNavigationLinks
        previousProject={previousProject}
        nextProject={nextProject}
        returnTo={returnTo}
      />
    </>
  );
}
