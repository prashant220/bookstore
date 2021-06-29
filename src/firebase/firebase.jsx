import firebase from 'firebase';
import "firebase/storage";


var firebaseConfig={


  apiKey: "AIzaSyA4t8oz8EZ7f6TU5aFuOcoG1e0vPM-F648",
  authDomain: "bookmandu-e7c46.firebaseapp.com",
  projectId: "bookmandu-e7c46",
  storageBucket: "bookmandu-e7c46.appspot.com",
  messagingSenderId: "177203463564",
  appId: "1:177203463564:web:7f992fc685d1b40c5b02a9",
  measurementId: "G-WGF4HPY2DV"

  
  
 
}

 
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const storage = firebase.storage();
const auth=firebase.auth();
const google= new firebase.auth.GoogleAuthProvider();
const facebook= new firebase.auth.FacebookAuthProvider();

export{auth,google,facebook};
export {storage,db as default};
 

