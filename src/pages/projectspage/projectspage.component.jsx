import React from 'react';
import { Route } from 'react-router-dom';

import ProjectContainer from '../../components/projectContainer/projectContainer.component';

const ProjectsPage = ({ match }) => {
  return (
    <Route path={`${match.path}/:projectId`} component={ProjectContainer} />
  );
};

export default ProjectsPage;
