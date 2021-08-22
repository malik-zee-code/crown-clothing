import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBWYYM81yspgQZX3yviQtlGobBECpmd3Fo",
  authDomain: "crown-db-d1de1.firebaseapp.com",
  projectId: "crown-db-d1de1",
  storageBucket: "crown-db-d1de1.appspot.com",
  messagingSenderId: "368323733091",
  appId: "1:368323733091:web:0abdf107134b3c137ffa56",
  measurementId: "G-5Z9EHHB70Q",
};
//-----------------------------------------------------------------------------------------------
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error craeting user", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

//------------------------------------------------------------------------------------------------------
export const addCollectionandDocuments = async (
  CollectionKey,
  objectstoAdd
) => {
  const collectionRef = firestore.collection(CollectionKey);
  console.log(collectionRef);
  const batch = firestore.batch();
  objectstoAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
    console.log(newDocRef);
  });
  return await batch.commit();
};

//-------------------------------------------------------------------------------------------------------
export const convertCollectionSnapshottoMap = (collections) => {
  console.log(collections);
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  console.log(transformedCollection);
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

//--------------------------------------------------------------------------------
export const auth = firebase.auth();

//--------------------------------------------------------------------------------
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
