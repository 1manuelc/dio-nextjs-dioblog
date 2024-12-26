import SmallUser from '@/components/small-user';
import { useEffect, useState } from 'react';
import { getAllUsers } from '@/lib/firebase/user';
import SmallPost from '@/components/small-post';
import LoadingSpinner from '@/components/loading-spinner';

export default function Home() {
	const [users, setUsers] = useState<any>(null);

	useEffect(() => {
		const fetchUsers = async () => {
			const usersData = await getAllUsers();
			if (usersData) {
				setUsers(usersData);
			} else {
				console.error('No users found');
			}
		};

		fetchUsers();
	}, []);

	return !users ? (
		<LoadingSpinner />
	) : (
		<div className='p-8 pt-16 flex justify-center items-start flex-col gap-6'>
			<h1 className='font-bold text-4xl'>DioBlog</h1>
			<p className='text-zinc-400'>
				Encontre aqui postagens dos seus influencers tech favoritos
			</p>

			<h2 className='text-xl mt-6'>Criadores de conteúdo:</h2>
			<ul className='w-full flex flex-wrap gap-4'>
				{users.map((user: any) => (
					<SmallUser
						key={user.id}
						userId={user.id}
						name={user.username}
						description={user.profileDescription}
						photoUrl='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
					/>
				))}
			</ul>

			<h2 className='text-xl mt-6'>Últimos posts:</h2>
			<ul className='w-full space-y-4'>
				{users.map((user: any) =>
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
}
