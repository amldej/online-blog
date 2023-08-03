import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
	const { id } = useParams();
	const { data: blog, error, isPending } = useFetch('https://amldej.github.io/blog-data/db.json/' + id);
	const history = useHistory();

	const handleClick = () => {
		fetch('https://amldej.github.io/blog-data/db.json/' + blog.id, {
			method: 'DELETE'
		}).then(() => {
			history.push('/thoughts');
		})
	}

	return (
		<div className="blog-details">
			{ isPending && <div>Loading...</div> }
			{ error && <div>{ error }</div>}
			{ blog && (
				<article>
					<h2>{ blog.title } <i>{ blog.date }</i></h2>
					<div>{ blog.body} </div>
					<h5 onClick={handleClick}>delete</h5>
				</article>
			)}
		</div>
	);
}

export default BlogDetails;