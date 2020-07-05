import { createSelectorCreator, createSelector } from 'reselect';
import { createStore } from 'redux';

const selectProject = state.projects;

export const selectProjects = createSelector(
  [selectProject],
  (projectsCollection) => projectsCollection.projects
);
