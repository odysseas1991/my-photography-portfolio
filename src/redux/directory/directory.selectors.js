import { createSelector } from 'reselect';

const selectDirectory = (state) => state.directory;

export const selectDirectoryProjects = createSelector(
  [selectDirectory],
  (directory) => directory.projects
);
