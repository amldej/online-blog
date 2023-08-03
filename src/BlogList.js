import { Link } from "react-router-dom";
import Scroll from './Scroll';

const BlogList = ({ blogs, title }) => {
	const sortedDate = blogs.sort((a, b) => {
					return new Date(b.id) - new Date(a.id);
				})

	return (
		<div className="blog-list">
			<h2 className='blog-list-title'> { title }</h2><Scroll>
			{sortedDate.map((blog) => (
				<div className="blog-preview" key={ blog.id }>
					<div className="link">
						<Link to={`/blogs/${blog.id}`}>
							<h2>{ blog.title }</h2>
							<p>{ blog.body }</p>
						</Link>
					</div>
					<div className='divider'></div>
				</div>
			))}</Scroll>
		</div>
	);
};

export default BlogList