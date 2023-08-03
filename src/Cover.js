

const Cover = () => {
	return (
		<div className="cover">
			<center><img className="photo" alt="journal" src={require(`./images/journal.jpg`)} />
			</center>
			<img className="writing" alt="note" src={require(`./images/handwriting.png`)} />
		</div>
	)
}

export default Cover;