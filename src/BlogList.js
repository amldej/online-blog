import { useState, useEffect } from "react";
import Scroll from './Scroll';
import { getDocs } from 'firebase/firestore'
import { query, collection, deleteDoc, doc, orderBy } from "firebase/firestore";
import { db } from "./firebase-config";

const BlogList = () => {
	const [postLists, setPostList] = useState([]);
	const postsCollectionRef = collection(db, "posts");

	useEffect ( () => {
		const getPosts = async () => {
    	const data = await getDocs(query(postsCollectionRef, orderBy('timestamp', 'desc')));
    	const newData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    	}));
			setPostList(newData);
		};

		getPosts();
	});

	const deletePost = async (id) => {
		const postDoc = doc(db, "posts", id)
		await deleteDoc(postDoc)
	}

	return (
		<div className="blog-list">
			<h2 className='blog-list-title'> dear diary,</h2><Scroll>
			{postLists.map((post) => {
				return ( <div className="blog-preview" key={ post.id }>
					<div className="link">
						<h2>{ post.title }</h2>
						<p>{ post.body }</p>
						<div className="deletePost" 
							onClick={() => {(deletePost(post.id))}}>
							delete
						</div>
					</div>
					<div className='divider'></div>
				</div>
			)})}</Scroll>
		</div>
	);
};

export default BlogList