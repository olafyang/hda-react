import "./Card.css";

export function Card({
	logo,
	title,
	link,
}: {
	logo: string;
	title: string;
	link: string;
}) {
	return (
		<div className="card-container">
			<img className="card-image" src={logo} />
			<div>
				<h1 className="card-title">{title}</h1>
				<a className="card-link" href={link}>
					Link to: {title}
				</a>
			</div>
		</div>
	);
}
