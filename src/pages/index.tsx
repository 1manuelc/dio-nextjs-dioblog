import SmallUser from "@/components/small-user";
import SmallPost from "@/components/small-post";

export default function Home() {
	return (
		<div className="p-8 pt-16 flex justify-center items-start flex-col gap-6">
			<h1 className="font-bold text-4xl">DioBlog</h1>
			<p className="text-zinc-400">
				Encontre aqui postagens dos seus influencers tech favoritos
			</p>

			<h2 className="text-xl mt-6">Criadores de conteúdo:</h2>
			<ul className="w-full space-y-6">
				<SmallUser
					name="Nome"
					description="descrição"
					userId="1"
					photoUrl="https://avatars.githubusercontent.com/u/110443154?v=4"
				/>
				<SmallUser
					name="Nome"
					description="descrição"
					userId="2"
					photoUrl="https://avatars.githubusercontent.com/u/110443154?v=4"
				/>
				<SmallUser
					name="Nome"
					description="descrição"
					userId="3"
					photoUrl="https://avatars.githubusercontent.com/u/110443154?v=4"
				/>
				<SmallUser
					name="Nome"
					description="descrição"
					userId="4"
					photoUrl="https://avatars.githubusercontent.com/u/110443154?v=4"
				/>
			</ul>

			<h2 className="text-xl mt-6">Últimos posts:</h2>
			<ul className="w-full space-y-4">
				<SmallPost title="Post title" description="" />
				<SmallPost title="Post title" description="I'm a description" />
				<SmallPost title="Post title" description="I'm a description" />
				<SmallPost title="Post title" description="" />
			</ul>
		</div>
	);
}
