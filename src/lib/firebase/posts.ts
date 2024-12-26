import { ref, get } from 'firebase/database';
import { database } from './config';

export const getUserPosts = async (userId: string) => {
	const userPostsRef = ref(database, `users/${userId}/posts`);
	const snapshot = await get(userPostsRef);
	if (snapshot.exists()) {
		const posts = snapshot.val();
		const postIds = Object.keys(posts);
		const postPromises = postIds.map((postId) => getPost(postId));
		return Promise.all(postPromises);
	} else {
		return [];
	}
};

export const getPost = async (postId: string) => {
	const postRef = ref(database, `posts/${postId}`);
	const snapshot = await get(postRef);
	if (snapshot.exists()) {
		return { id: postId, ...snapshot.val() };
	} else {
		return null;
	}
};

export const getRelatedPosts = async (userId: string, postId: string) => {
	const allPosts = await getUserPosts(userId);
	return allPosts.filter((post) => post.id !== postId);
};
