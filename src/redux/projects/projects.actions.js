import ProjectsActionTypes from './projects.types';

export const updateProjects = (projectsMap) => ({
  type: ProjectsActionTypes.UPDATE_PROJECTS,
  payload: projectsMap,
});
