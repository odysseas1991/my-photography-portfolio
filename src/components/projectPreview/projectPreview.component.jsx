import React from 'react';

import './projectPreview.styles.scss';

const ProjectPreview = ({ title, images }) => {
  return (
    <div className='content'>
      <div className='title'>{title}</div>
    </div>
  );
};

export default ProjectPreview;
