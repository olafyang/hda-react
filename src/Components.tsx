import Hooks from "./Hooks";
import { Card } from "./Cards";
import Hello from "./Hello";
import "./Components.css";

export default function Components() {
	return (
		<>
			<div className="componentsContainer">
				<Hooks />
				<div className="cardsContainer">
					<Card logo="/vite.svg" title="Vitejs" link="https://vitejs.dev/" />
					<Card
						logo="/hda.png"
						title="Hochschule Darmstadt"
						link="https://h-da.de/"
					/>
					<Hello name="earth" frage="how are you?" />
				</div>
			</div>
		</>
	);
}
