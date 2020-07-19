import React from 'react';

import './projectDetails.styles.scss';

const ProjectDetails = ({ title, images }) => {
  console.log('Images: ', images);
  return (
    <div className='content'>
      <h3 className='title'>{title}</h3>
      <div className='images-details'>
        {images
          ? images.map((imageDetails) => (
              <div className='image' key={imageDetails.id}>
                <div
                  className='background-image'
                  style={{ backgroundImage: `url(${imageDetails.imageUrl})` }}
                />
                <div className='image-content'>
                  <h1 className='title'>{imageDetails.title}</h1>
                  <p className='description'>{imageDetails.description}</p>
                </div>
              </div>
            ))
          : []}
      </div>
    </div>
  );
};
export default ProjectDetails;
