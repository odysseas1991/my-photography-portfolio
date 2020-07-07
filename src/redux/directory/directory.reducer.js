const INITIAL_STATE = {
  projects: {
    streetStories: {
      id: 1,
      title: 'Street Stories',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/crwn-db-52fb3.appspot.com/o/IMG_5499.jpg?alt=media&token=2004d274-5b36-497d-9fc1-d9564e591e2c',
      routeName: 'projects/street-stories',
      images: [
        {
          id: 1,
          title: 'Image1',
          imageUrl:
            'https://firebasestorage.googleapis.com/v0/b/crwn-db-52fb3.appspot.com/o/IMG_5499.jpg?alt=media&token=2004d274-5b36-497d-9fc1-d9564e591e2c',
          description: 'Street story description 1',
        },
        {
          id: 2,
          title: 'Image2',
          imageUrl:
            'https://firebasestorage.googleapis.com/v0/b/crwn-db-52fb3.appspot.com/o/IMG_5499.jpg?alt=media&token=2004d274-5b36-497d-9fc1-d9564e591e2c',
          description: 'Street story description 2',
        },
        {
          id: 3,
          title: 'Image3',
          imageUrl:
            'https://firebasestorage.googleapis.com/v0/b/crwn-db-52fb3.appspot.com/o/IMG_5499.jpg?alt=media&token=2004d274-5b36-497d-9fc1-d9564e591e2c',
          description: 'Street story description 3',
        },
      ],
    },
    coronavirusEra: {
      id: 2,
      title: 'Coronavirus Era',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/crwn-db-52fb3.appspot.com/o/IMG_8165.jpg?alt=media&token=68e1ccaf-2e46-409f-8470-4713975024b2',
      routeName: 'projects/coronavirus-era',
      images: [
        {
          id: 1,
          title: 'Image1',
          imageUrl:
            'https://firebasestorage.googleapis.com/v0/b/crwn-db-52fb3.appspot.com/o/IMG_8165.jpg?alt=media&token=68e1ccaf-2e46-409f-8470-4713975024b2',
          description: 'coronavirus-era story description 1',
        },
        {
          id: 2,
          title: 'Image2',
          imageUrl:
            'https://firebasestorage.googleapis.com/v0/b/crwn-db-52fb3.appspot.com/o/IMG_8165.jpg?alt=media&token=68e1ccaf-2e46-409f-8470-4713975024b2',
          description: 'coronavirus-era story description 2',
        },
      ],
    },
    lavrioRefugesStory: {
      id: 3,
      title: 'Lavrio refuges story',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/crwn-db-52fb3.appspot.com/o/IMG_6572.jpg?alt=media&token=de70f653-7ddd-4e76-bf13-1122e233d2a2',
      routeName: 'projects/lavrio-refuges-story',
      images: [
        {
          id: 1,
          title: 'Image1',
          imageUrl:
            'https://firebasestorage.googleapis.com/v0/b/crwn-db-52fb3.appspot.com/o/IMG_6572.jpg?alt=media&token=de70f653-7ddd-4e76-bf13-1122e233d2a2',
          description: 'lavrio-refuges-story description 1',
        },
        {
          id: 2,
          title: 'Image2',
          imageUrl:
            'https://firebasestorage.googleapis.com/v0/b/crwn-db-52fb3.appspot.com/o/IMG_6572.jpg?alt=media&token=de70f653-7ddd-4e76-bf13-1122e233d2a2',
          description: 'lavrio-refuges-story description 2',
        },
      ],
    },
  },
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
