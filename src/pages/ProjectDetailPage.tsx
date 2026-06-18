import { useLocation, useParams } from "react-router-dom";
import { notFoundContent } from "@/content/site";
import { ProjectDetailView } from "@/features/projects/components/detail/ProjectDetailView";
import { useProjectNavigation } from "@/features/projects/hooks/useProjectNavigation";
import { getProjectFocus } from "@/features/projects/lib/project-formatters";
import { getProjectById } from "@/features/projects/lib/project-queries";
import { getSafeReturnPath } from "@/features/projects/lib/project-routing";
import { SiteLayout } from "@/shared/components/layout/SiteLayout";
import { NotFoundPage } from "@/pages/NotFoundPage";

type ProjectDetailLocationState = {
  returnTo?: string;
};

export const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const location = useLocation();
  const locationState = location.state as ProjectDetailLocationState | null;
  const returnTo = getSafeReturnPath(locationState?.returnTo);
  const project = projectId ? getProjectById(projectId) : undefined;
  const projectNavigation = useProjectNavigation(project);

  if (!project) {
    return (
      <NotFoundPage
        title={notFoundContent.project.title}
        description={notFoundContent.project.description}
      />
    );
  }

  const projectFocus = getProjectFocus(project);

  return (
    <SiteLayout>
      <ProjectDetailView
        project={project}
        focus={projectFocus}
        returnTo={returnTo}
        {...projectNavigation}
      />
    </SiteLayout>
  );
};
