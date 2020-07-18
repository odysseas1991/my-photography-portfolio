import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectProjectFetching } from '../../redux/projects/projects.selectors';
import ProjectContainer from '../../components/projectContainer/projectContainer.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const ProjectContainerWithSpinner = WithSpinner(ProjectContainer);

const ProjectsPage = ({ match, isProjectsFetching }) => {
  return (
    <Route
      path={`${match.path}/:projectId`}
      render={(props) => (
        <ProjectContainerWithSpinner
          isLoading={isProjectsFetching}
          {...props}
        />
      )}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  isProjectsFetching: selectProjectFetching,
});

export default connect(mapStateToProps)(ProjectsPage);
