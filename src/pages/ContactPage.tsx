import { contactPageContent } from "@/content/site";
import { ContactLinksSection } from "@/features/profile/components/contact/ContactLinksSection";
import { FormattedTitle } from "@/shared/components/common/FormattedTitle";
import { PageIntro } from "@/shared/components/common/PageIntro";
import { SiteLayout } from "@/shared/components/layout/SiteLayout";

export function ContactPage() {
  const { intro } = contactPageContent;

  return (
    <SiteLayout>
      <PageIntro
        eyebrow={intro.eyebrow}
        title={<FormattedTitle segments={intro.title} />}
        description={intro.description}
      />

      <ContactLinksSection />
    </SiteLayout>
  );
}
