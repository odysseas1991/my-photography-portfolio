import ProjectsActionTypes from './projects.types';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

export const fetchProjectsStart = () => ({
  type: ProjectsActionTypes.FETCH_PROJECTS_START,
});

export const fetchProjectsSuccess = (projectsMap) => ({
  type: ProjectsActionTypes.FETCH_PROJECTS_SUCCESS,
  payload: projectsMap,
});

export const fetchProjectsFailure = (errorMessage) => ({
  type: ProjectsActionTypes.FETCH_PROJECTS_FAILURE,
  payload: errorMessage,
});

export const fetchProjectsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('projects');
    dispatch(fetchProjectsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const projectsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchProjectsSuccess(projectsMap));
      })
      .catch((error) => dispatch(fetchProjectsFailure(error.message)));
  };
};
