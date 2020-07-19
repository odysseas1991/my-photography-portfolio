import React from 'react';

import './projectPreview.styles.scss';

import ProjectDetails from '../projectDetails/projectDetails.component';

const ProjectPreview = ({ title, images }) => {
  return (
    <div className='project-page'>
      <div className='title'>{title}</div>
      <div className='projects-content'>
        <ProjectDetails images={images} />
      </div>
    </div>
  );
};

export default ProjectPreview;
