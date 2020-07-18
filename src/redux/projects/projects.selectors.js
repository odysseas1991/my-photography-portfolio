import { createSelector } from 'reselect';

const selectProject = (state) => state.projectsCollection;

export const selectProjects = createSelector(
  [selectProject],
  (projectsCollection) => projectsCollection.projects
);

export const selectProjectsForPreview = createSelector(
  [selectProjects],
  (projectsCollection) =>
    projectsCollection
      ? Object.keys(projectsCollection).map((key) => projectsCollection[key])
      : []
);

export const selectProjectByUrl = (projectUrlParam) =>
  createSelector([selectProjects], (projects) =>
    projects ? projects[projectUrlParam] : null
  );

export const selectProjectFetching = createSelector(
  [selectProject],
  (project) => project.isFetching
);
