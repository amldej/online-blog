import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
		<nav className="navbar">
		<div><Link to="/">home</Link></div>
		<div className="logo">yours truly</div>
			<div className="links">
				<Link to="/thoughts">thoughts</Link>
				<Link to="/create">new</Link>
			</div>
		</nav>
		</div>
	);
}

export default Navbar;
