import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
	const { id } = useParams();
	const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
	const history = useHistory();

	const handleClick = () => {
		fetch('http://localhost:8000/blogs/' + id, {
			method: 'DELETE'
		}).then(() => {
			history.push('/thoughts');
		})
	}

	// const selectedItem = blog.find(item => item.id === id);

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