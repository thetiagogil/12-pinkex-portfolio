export const PROJECTS_INDEX_PATH = "/projects";

export function getProjectPath(projectId: string) {
  return `${PROJECTS_INDEX_PATH}/${projectId}`;
}

export function getSafeReturnPath(value: unknown) {
  return value === "/" || value === PROJECTS_INDEX_PATH
    ? value
    : PROJECTS_INDEX_PATH;
}
