import React from 'react';
import { connect } from 'react-redux';

import ProjectPreview from '../projectPreview/projectPreview.component';

import { selectProjectByUrl } from '../../redux/projects/projects.selectors';

const ProjectContainer = ({ project }) => {
  console.log('Project: ', project);
  const { title, images } = project || {};
  return (
    <div className='projects-overview'>
      <ProjectPreview title={title} images={images} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  project: selectProjectByUrl(ownProps.match.params.projectId)(state),
});

export default connect(mapStateToProps)(ProjectContainer);
