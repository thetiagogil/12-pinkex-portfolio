import { AboutActions } from "@/features/profile/components/about/AboutActions";
import { AboutHero } from "@/features/profile/components/about/AboutHero";
import { AboutSummary } from "@/features/profile/components/about/AboutSummary";
import { CurrentStatusBanner } from "@/features/profile/components/about/CurrentStatusBanner";
import { EducationSection } from "@/features/profile/components/about/EducationSection";
import { SkillsSection } from "@/features/profile/components/about/SkillsSection";
import { SiteLayout } from "@/shared/components/layout/SiteLayout";

export const AboutPage = () => {
  return (
    <SiteLayout>
      <AboutHero />
      <CurrentStatusBanner />
      <AboutSummary />
      <SkillsSection />
      <EducationSection />
      <AboutActions />
    </SiteLayout>
  );
};
