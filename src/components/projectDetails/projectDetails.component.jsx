import React from 'react';

import './projectDetails.styles.scss';

const ProjectDetails = ({ images }) => {
  console.log('Images: ', images);
  return (
    <div className='images-details'>
      {images
        ? images.map((imageDetails) => (
            <div className='image' key={imageDetails.id}>
              <div
                className='background-image'
                style={{ backgroundImage: `url(${imageDetails.imageUrl})` }}
              />
              <div className='image-content'>
                <p className='description'>{imageDetails.description}</p>
              </div>
            </div>
          ))
        : []}
    </div>
  );
};
export default ProjectDetails;
