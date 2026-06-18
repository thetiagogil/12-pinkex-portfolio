export const PROJECTS_INDEX_PATH = "/projects";

export const getProjectPath = (projectId: string) => {
  return `${PROJECTS_INDEX_PATH}/${projectId}`;
};

export const getSafeReturnPath = (value: unknown) => {
  return value === "/" || value === PROJECTS_INDEX_PATH
    ? value
    : PROJECTS_INDEX_PATH;
};
