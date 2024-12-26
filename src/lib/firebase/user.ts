import { get, ref } from 'firebase/database';
import { database } from './config';
import { getPost } from './posts';

export const getUser = async (userId: string) => {
	const userRef = ref(database, `users/${userId}`);
	const snapshot = await get(userRef);
	if (snapshot.exists()) {
		const user = snapshot.val();
		const postIds = Object.keys(user.posts || {});
		const postPromises = postIds.map((postId) => getPost(postId));
		const posts = await Promise.all(postPromises);
		return { id: userId, ...user, posts };
	} else {
		return null;
	}
};

export const getAllUsers = async () => {
	const usersRef = ref(database, 'users');
	const snapshot = await get(usersRef);
	if (snapshot.exists()) {
		const users = snapshot.val();
		const userIds = Object.keys(users);
		const userPromises = userIds.map((userId) => getUser(userId));
		const usersData = await Promise.all(userPromises);
		return usersData;
	} else {
		return [];
	}
};
