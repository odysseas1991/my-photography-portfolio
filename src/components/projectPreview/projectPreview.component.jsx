import React from 'react';

import './projectPreview.styles.scss';

import ProjectDetails from '../projectDetails/projectDetails.component';

const ProjectPreview = ({ title, images }) => {
  console.log(title);
  console.log(images);
  return (
    <div className='content'>
      <div className='title'>{title}</div>
      <div className='projects-content'>
        <ProjectDetails images={images} />
      </div>
    </div>
  );
};

export default ProjectPreview;
