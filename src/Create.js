import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase-config";

const Create = () => {
	const [ title, setTitle ] = useState('');
	const [ date, setDate ] = useState('');
	const [ body, setBody ] = useState('');
	const history = useHistory();

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	const blog = { title, date, body };

	// 	fetch('http://localhost:8000/blogs', {
	// 		method: 'POST',
	// 		headers: { "Content-Type": "application/json" },
	// 		body: JSON.stringify(blog)
	// 	}).then(() => {
	// 		history.push('/thoughts');
	// 	});
	// }

	const createPost = async () => {
		await addDoc(collection(db, "posts"), {title, date, body, timestamp: serverTimestamp()});
		history.push('/thoughts');
	};


	return (
		<div className="create">
			<h2>what's on your mind?</h2>
			<div className='form' >
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
				<label>write:</label>
				<textarea 
					required
					value={ body }
					onChange={(e) => setBody(e.target.value)}
				></textarea>
				<button onClick={createPost}>publish</button>
			</div>
		</div>
	);
}

export default Create;