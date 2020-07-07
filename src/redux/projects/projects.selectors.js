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

/*export const selectProjectItem = (project) =>
  createSelector(
    [selectProjects],
    (projectsCollection) => projectsCollection[project]
  );
*/

/*export const selectProjects = createSelector(
  [selectProject],
  (projectsCollection) =>
    projectsCollection
      ? Object.keys(projectsCollection).map((key) => projectsCollection[key])
      : []
);
*/
