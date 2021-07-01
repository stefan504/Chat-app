import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyDjOdQ5hJGZJjXVucPdLb8Euozgc3TmKo8',
	authDomain: 'chat-app-5aba9.firebaseapp.com',
	projectId: 'chat-app-5aba9',
	storageBucket: 'chat-app-5aba9.appspot.com',
	messagingSenderId: '234946368889',
	appId: '1:234946368889:web:31dff797b8257177ca8ba8',
	measurementId: 'G-97XDN738J6',
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
