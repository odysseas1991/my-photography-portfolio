import { createSelector, createSelectorCreator } from 'reselect';

const selectDirectory = (state) => state.directory;

export const selectDirectoryProjects = createSelector(
  [selectDirectory],
  (directory) => directory.projects
);

export const selectDirectoryProjectsForPreview = createSelector(
  [selectDirectoryProjects],
  (projects) => Object.keys(projects).map((key) => projects[key])
);

export const selectDirectoryProject = (directoyParam) =>
  createSelectorCreator(
    [selectDirectoryProjects],
    (projects) => projects[directoyParam]
  );
