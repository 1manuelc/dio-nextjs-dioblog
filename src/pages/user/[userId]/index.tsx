import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getUser } from '@/lib/firebase/user';
import type { NextPage } from 'next';
import SmallPost from '@/components/small-post';
import LoadingSpinner from '@/components/loading-spinner';

const UserPage: NextPage = () => {
	const router = useRouter();
	const { userId } = router.query;

	const [user, setUser] = useState<any>(null);

	useEffect(() => {
		if (userId) {
			const fetchUserData = async () => {
				const userData = await getUser(userId as string);
				if (userData) {
					setUser(userData);
				} else {
					console.error('User not found');
				}
			};

			fetchUserData();
		}
	}, [userId]);

	return !user ? (
		<LoadingSpinner />
	) : (
		<div className='p-8 pt-16 flex justify-center items-start flex-col gap-6'>
			<a href='/' className='hover:opacity-60'>
				<h1 className='font-bold text-4xl'>DioBlog</h1>
			</a>
			<div className='flex gap-6 items-center'>
				<img
					className='bg-zinc-600 rounded-full w-24 h-24'
					src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
					alt=''
				/>
				<span className='flex flex-col gap-1'>
					<h2 className='font-bold text-2xl mt-6'>{user.username}</h2>
					<p className='text-zinc-400'>{user.profileDescription}</p>
				</span>
			</div>
			<h2 className='text-xl mt-6'>Posts:</h2>
			<ul className='w-full space-y-4'>
				{user.posts.length === 0 ? (
					<p className='text-zinc-400'>Nenhum post encontrado</p>
				) : (
					user.posts.map((post: any) => (
						<SmallPost
							key={post.id}
							postId={post.id}
							title={post.title}
							userId={post.userId}
							description={post.description}
						/>
					))
				)}
			</ul>
		</div>
	);
};

export default UserPage;
