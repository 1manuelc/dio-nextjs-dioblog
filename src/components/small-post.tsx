interface SmallPostProps {
	title: string;
	description?: string;
	userId: string;
	postId: string;
}

const SmallPost: React.FC<SmallPostProps> = ({
	title,
	description,
	userId,
	postId,
}) => {
	return (
		<li className='w-full border border-zinc-800 hover:border-zinc-600 rounded-lg py-2 px-3 transition-all'>
			<a href={`/user/${userId}/post/${postId}`}>
				<h4 className='font-bold text-lg'>{title}</h4>
				<p
					className={
						description?.length !== 0 ? 'text-zinc-400' : 'text-zinc-600'
					}
				>
					{(description?.length === 0 && 'Empty description') || description}
				</p>
			</a>
		</li>
	);
};

export default SmallPost;
