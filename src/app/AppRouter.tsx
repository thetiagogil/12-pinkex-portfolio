import { Route, Routes } from "react-router-dom";
import { ScrollToTop } from "@/shared/components/common/ScrollToTop";
import {
  AboutPage,
  ContactPage,
  HomePage,
  NotFoundPage,
  ProjectDetailPage,
  ProjectsPage,
} from "./lazy-pages";
import { RouteSuspense } from "./RouteSuspense";

export const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <RouteSuspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </RouteSuspense>
    </>
  );
};
