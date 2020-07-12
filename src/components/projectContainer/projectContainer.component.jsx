import React from 'react';
import { connect } from 'react-redux';

import { selectProjectByUrl } from '../../redux/projects/projects.selectors';

const ProjectContainer = ({ match, project }) => {
  //const { routeNane } = project;
  //console.log(routeNane);
  console.log(match.params.projectId);
  console.log(project);
  return <div className='projetcs-overview'>Specific project page</div>;
};

const mapStateToProps = (state, ownProps) => ({
  project: selectProjectByUrl(ownProps.match.params.projectId)(state),
});

export default connect(mapStateToProps)(ProjectContainer);
