const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyB6YB6TS_esY1G-LVUdcwKuVtZTrn6FDOw",
  authDomain: "kiei-451-1c00b.firebaseapp.com",
  projectId: "kiei-451-1c00b",
  storageBucket: "kiei-451-1c00b.appspot.com",
  messagingSenderId: "774515538073",
  appId: "1:774515538073:web:a62f02dcce98bbfb942008"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase