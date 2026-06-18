import { lazy } from "react";

export const AboutPage = lazy(() =>
  import("@/pages/AboutPage").then((module) => ({
    default: module.AboutPage,
  })),
);

export const ContactPage = lazy(() =>
  import("@/pages/ContactPage").then((module) => ({
    default: module.ContactPage,
  })),
);

export const HomePage = lazy(() =>
  import("@/pages/home/HomePage").then((module) => ({
    default: module.HomePage,
  })),
);

export const NotFoundPage = lazy(() =>
  import("@/pages/NotFoundPage").then((module) => ({
    default: module.NotFoundPage,
  })),
);

export const ProjectDetailPage = lazy(() =>
  import("@/pages/ProjectDetailPage").then((module) => ({
    default: module.ProjectDetailPage,
  })),
);

export const ProjectsPage = lazy(() =>
  import("@/pages/ProjectsPage").then((module) => ({
    default: module.ProjectsPage,
  })),
);
