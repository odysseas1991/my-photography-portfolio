import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory-menu.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      projects: [
        {
          title: 'Street Stories',
          imageUrl:
            'https://firebasestorage.googleapis.com/v0/b/crwn-db-52fb3.appspot.com/o/IMG_5499.jpg?alt=media&token=3bad03b7-aee8-44fd-a4cc-15af6e35a38e',
          id: 1,
        },
        {
          title: 'Coronavirus Era',
          imageUrl:
            'https://firebasestorage.googleapis.com/v0/b/crwn-db-52fb3.appspot.com/o/IMG_8166.JPG?alt=media&token=132a6247-dfc0-41ef-b769-991d4b5b0ca8',
          id: 2,
        },
        {
          title: 'Lavrio refuges story',
          imageUrl:
            'https://firebasestorage.googleapis.com/v0/b/crwn-db-52fb3.appspot.com/o/IMG_6572.jpg?alt=media&token=c0221ad7-6d3c-4a78-8d6f-3ef5caf8a9f2',
          id: 3,
        },
      ],
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.projects.map(({ title, imageUrl, id }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} />
        ))}
      </div>
    );
  }
}

export default Directory;
