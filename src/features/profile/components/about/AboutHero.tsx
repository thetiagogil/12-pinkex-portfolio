import { aboutPageContent } from "@/content/site";
import { FormattedTitle } from "@/shared/components/common/FormattedTitle";
import { PageIntro } from "@/shared/components/common/PageIntro";

export const AboutHero = () => {
  const { hero } = aboutPageContent;

  return (
    <PageIntro
      eyebrow={hero.eyebrow}
      title={<FormattedTitle segments={hero.title} />}
    />
  );
};
