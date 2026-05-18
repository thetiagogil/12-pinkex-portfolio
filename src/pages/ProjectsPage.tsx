import { projectsPageContent } from "@/content/site";
import { ProjectsGrid } from "@/features/projects/components/ProjectsGrid";
import { projects } from "@/features/projects/lib/project-queries";
import { FormattedTitle } from "@/shared/components/common/FormattedTitle";
import { PageIntro } from "@/shared/components/common/PageIntro";
import { SiteLayout } from "@/shared/components/layout/SiteLayout";

export function ProjectsPage() {
  const { intro } = projectsPageContent;

  return (
    <SiteLayout>
      <PageIntro
        eyebrow={intro.eyebrow}
        title={<FormattedTitle segments={intro.title} />}
        description={intro.description}
      />

      <ProjectsGrid projects={projects} />
    </SiteLayout>
  );
}
