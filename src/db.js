import Firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyAzMpKT1qH02b_h4MH6yaCJPhSHf38e3zE',
  authDomain: 'spectre-chat.firebaseapp.com',
  databaseURL: 'https://spectre-chat.firebaseio.com',
  projectId: 'spectre-chat',
  storageBucket: 'spectre-chat.appspot.com',
  messagingSenderId: '196132737990'
}

var app = Firebase.initializeApp(config)
var db = app.database()

export default db
