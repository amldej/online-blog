import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
		<nav className="navbar">
		<div style={{paddingLeft: 20}}><Link to="/online-blog">home</Link></div>
		<div className="logo">yours truly</div>
			<div style={{paddingRight: 20}} className="links">
				<Link to="/thoughts">thoughts</Link>
				<Link to="/create">new</Link>
			</div>
		</nav>
		</div>
	);
}

export default Navbar;
