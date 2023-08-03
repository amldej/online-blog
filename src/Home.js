import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
	const { data: blogs, isPending, error } = useFetch('https://amldej.github.io/blog-data/db.json');

	return (
		<div className="home">
			{ error && <div>{ error }</div> }
			{ isPending && <div>Loading...</div> }
			{blogs && <BlogList blogs={ blogs } title="dear diary,"/>}
		</div>
	);
}

export default Home;