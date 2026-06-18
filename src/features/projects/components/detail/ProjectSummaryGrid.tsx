import { projectDetailContent } from "@/content/site";
import type { Project } from "@/features/projects/types";

type ProjectSummaryGridProps = {
  project: Project;
  focus: string;
};

export const ProjectSummaryGrid = ({
  project,
  focus,
}: ProjectSummaryGridProps) => {
  return (
    <section className="py-7 sm:py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="reveal grid gap-6 sm:grid-cols-3">
          <div className="soft-card p-5 sm:col-span-1 sm:p-6">
            <p className="eyebrow mb-2">{projectDetailContent.focusLabel}</p>
            <p className="text-charcoal">{focus}</p>
          </div>
          <div className="soft-card p-5 sm:col-span-2 sm:p-6">
            <p className="eyebrow mb-3">{projectDetailContent.stackLabel}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((skill) => (
                <span key={skill} className="chip chip-blush">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
