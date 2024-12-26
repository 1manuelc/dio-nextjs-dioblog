import type { NextPage } from 'next';
import SmallPost from '@/components/small-post';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getPost, getRelatedPosts } from '@/lib/firebase/posts';
import LoadingSpinner from '@/components/loading-spinner';

const PostPage: NextPage = () => {
	const router = useRouter();
	const { userId, postId } = router.query;

	const [post, setPost] = useState<any>(null);
	const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

	useEffect(() => {
		if (userId && postId) {
			const fetchPostData = async () => {
				const postData = await getPost(postId as string);
				setPost(postData);

				const relatedPostsData = await getRelatedPosts(
					userId as string,
					postId as string
				);
				setRelatedPosts(relatedPostsData);
			};

			fetchPostData();
		}
	}, [userId, postId]);

	return !post ? (
		<LoadingSpinner />
	) : (
		<div className='p-8 pt-16 flex justify-center items-start flex-col gap-6'>
			<a href='/' className='hover:opacity-60'>
				<h1 className='font-bold text-4xl'>DioBlog</h1>
			</a>

			<div className='flex gap-6 items-center'>
				<a href={`/user/${userId}`} className='hover:opacity-60'>
					<img
						className='bg-zinc-600 rounded-full h-16 w-16'
						src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
						alt=''
					/>
				</a>
				<span className='flex flex-col gap-1'>
					<h2 className='font-bold text-2xl'>{post.title}</h2>
					<p className='text-zinc-400'>{post.description}</p>
				</span>
			</div>
			<h2 className='text-xl mt-6'>Related posts:</h2>
			<ul className='w-full space-y-4'>
				{relatedPosts.map((relatedPost) => {
					return (
						<SmallPost
							key={relatedPost.id}
							title={relatedPost.title}
							description={relatedPost.description}
							userId={relatedPost.userId}
							postId={relatedPost.id}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default PostPage;
