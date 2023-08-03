import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
	const [ title, setTitle ] = useState('');
	const [ date, setDate ] = useState('');
	const [ body, setBody ] = useState('');
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, date, body };

		fetch('https://amldej.github.io/blog-data/db.json', {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog)
		}).then(() => {
			history.push('/thoughts');
		});
	}

	return (
		<div className="create">
			<h2>what's on your mind?</h2>
			<form onSubmit={handleSubmit}>
				<label>title:</label>
				<input 
					type="text"
					required
					value={ title }
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>date:</label>
				<input 
					type="date"
					required
					value={ date }
					onChange={(e) => setDate(e.target.value)}
				/>
				<label>type:</label>
				<textarea 
					required
					value={ body }
					onChange={(e) => setBody(e.target.value)}
				></textarea>
				<button>publish</button>
			</form>
		</div>
	);
}

export default Create;