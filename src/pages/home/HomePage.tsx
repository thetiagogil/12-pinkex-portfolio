import { homePageContent } from "@/content/site";
import { getFeaturedProjects } from "@/features/projects/lib/project-queries";
import { SiteLayout } from "@/shared/components/layout/SiteLayout";
import { AvailabilityCta } from "./_components/AvailabilityCta";
import { FeaturedProjectsSection } from "./_components/FeaturedProjectsSection";
import { HomeHero } from "./_components/HomeHero";
import { ToolboxPreviewSection } from "./_components/ToolboxPreviewSection";

export const HomePage = () => {
  const featuredProjects = getFeaturedProjects(
    homePageContent.featuredProjects.limit,
  );

  return (
    <SiteLayout>
      <HomeHero />
      <FeaturedProjectsSection projects={featuredProjects} />
      <ToolboxPreviewSection />
      <AvailabilityCta />
    </SiteLayout>
  );
};
