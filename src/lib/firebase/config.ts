import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyADbyJrjODjOJbUfMtUlckCHePMgPFvFpA',
	authDomain: 'dio-nextjs-blog.firebaseapp.com',
	databaseURL: 'https://dio-nextjs-blog-default-rtdb.firebaseio.com',
	projectId: 'dio-nextjs-blog',
	storageBucket: 'dio-nextjs-blog.firebasestorage.app',
	messagingSenderId: '1088754059185',
	appId: '1:1088754059185:web:7ca93cf34a439f38d61f90',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
