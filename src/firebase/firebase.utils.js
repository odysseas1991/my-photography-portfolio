import firebase from 'firebase/app';
import 'firebase/firestore'; //database access

const config = {
  apiKey: 'AIzaSyC-EjcLvsTVr4SD0c9xOOvtj4P8L9t2P3Y',
  authDomain: 'my-photography-portfolio.firebaseapp.com',
  databaseURL: 'https://my-photography-portfolio.firebaseio.com',
  projectId: 'my-photography-portfolio',
  storageBucket: 'my-photography-portfolio.appspot.com',
  messagingSenderId: '1044284296624',
  appId: '1:1044284296624:web:3b04b0906746a1e851da75',
  measurementId: 'G-0WNDB9LSDL',
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

//convert the data into an object
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, projectName, routeName, imageUrl, images } = doc.data();

    return {
      id: doc.id,
      projectName,
      title,
      routeName,
      imageUrl,
      images,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.projectName.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export default firebase;
