import Hooks from "./Hooks";
import { Card } from "./Cards";
import Hello from "./Hello";
import "./Components.css";

export default function Components() {
	return (
		<>
			<div className="componentsContainer">
				<Hooks />
				<Card logo="/vite.svg" title="Vitejs" link="https://vitejs.dev/" />
				<Card logo="/vite.svg" title="Vitejs" link="https://vitejs.dev/" />
				<Hello name="earth" frage="how are you?" />
			</div>
		</>
	);
}
