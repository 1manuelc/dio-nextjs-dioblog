interface SmallUserProps {
	name: string;
	description: string;
	photoUrl?: string;
	userId: string;
}

const SmallUser: React.FC<SmallUserProps> = ({
	name,
	description,
	photoUrl,
	userId,
}) => {
	return (
		<li className="hover:opacity-60 transition-opacity">
			<a href={`/user/${userId}`} className="flex items-center gap-4">
				<img
					className="bg-zinc-600 rounded-full w-12 h-12"
					src={photoUrl}
					alt=""
				/>
				<div>
					<h3>{name}</h3>
					<p className="text-zinc-400">{description}</p>
				</div>
			</a>
		</li>
	);
};

export default SmallUser;
