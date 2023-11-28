import { Link } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
	return (
		<>
			<nav>
				<h1>
					<a>Name</a>
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
				</ul>
			</nav>
		</>
	);
}
