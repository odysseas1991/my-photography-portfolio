import ProjectsActionTypes from './projects.types';

const INITIAL_STATE = {
  projects: null,
  isFetching: false,
  errorMessage: undefined,
};

const projectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProjectsActionTypes.FETCH_PROJECTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ProjectsActionTypes.FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        projects: action.payload,
      };
    case ProjectsActionTypes.FETCH_PROJECTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default projectsReducer;
