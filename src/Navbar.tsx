import { Link } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
	return (
		<>
			<nav>
				<h1>
					<a>React - Olaf Yang</a>
				</h1>
				<ul className="nav-items">
					<li>
						<Link to="/home">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/components">Components</Link>
					</li>
					<li>
						<Link to="/vacation">Vacation</Link>
					</li>
					<li>
						<Link to="/currency">Currency Converter</Link>
					</li>
					<li>
						<Link to="/search">Search</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
