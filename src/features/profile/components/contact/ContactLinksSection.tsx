import { ContactLinkCard } from "./ContactLinkCard";
import { getContactLinks } from "@/features/profile/lib/contact-links";

const contactLinks = getContactLinks();

export const ContactLinksSection = () => {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {contactLinks.map((link, index) => (
            <ContactLinkCard key={link.label} link={link} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
