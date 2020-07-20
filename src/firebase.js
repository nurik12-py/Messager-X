import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC8KA021864ZRy72xcRoVTa7N9UKH75Xcc",
    authDomain: "messager-x.firebaseapp.com",
    databaseURL: "https://messager-x.firebaseio.com",
    projectId: "messager-x",
    storageBucket: "messager-x.appspot.com",
    messagingSenderId: "653437870776",
    appId: "1:653437870776:web:f38179e30d803e4a948a4d",
    measurementId: "G-WBK5E8VEEM"
  };

  firebase.initializeApp(config);

  export default firebase;