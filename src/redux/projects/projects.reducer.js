import ProjectsActionTypes from './projects.types';

const INITIAL_STATE = {
  projects: null,
};

const projectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProjectsActionTypes.UPDATE_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    default:
      return state;
  }
};

export default projectsReducer;
