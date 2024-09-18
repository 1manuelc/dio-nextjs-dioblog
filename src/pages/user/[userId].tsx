import SmallPost from '@/components/small-post';
import type { NextPage } from 'next';

const UserPage: NextPage = () => {
	return (
		<div className="p-8 pt-16 flex justify-center items-start flex-col gap-6">
			<h1 className="font-bold text-4xl">DioBlog</h1>

			<div className="flex gap-6">
				<img
					className="bg-zinc-600 rounded-full w-24 h-24"
					src="https://avatars.githubusercontent.com/u/110443154?v=4"
					alt=""
				/>
				<span className="flex flex-col gap-1">
					<h2 className="font-bold text-2xl mt-6">@username</h2>
					<p className="text-zinc-400">Profile description</p>
				</span>
			</div>
			<h2 className="text-xl mt-6">Últimos posts:</h2>
			<ul className="w-full space-y-4">
				<SmallPost title="Post title" description="" />
				<SmallPost title="Post title" description="I'm a description" />
				<SmallPost title="Post title" description="I'm a description" />
				<SmallPost title="Post title" description="" />
			</ul>
		</div>
	);
};

export default UserPage;
