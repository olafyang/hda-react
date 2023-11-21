import { useState, useEffect } from "react";

import "./Hooks.css";

export default function Hooks() {
	const [selectedBtn, setSelectedBtn] = useState<number | null>(null);
	const [count, setCount] = useState(0);
	useEffect(() => {
		if (selectedBtn) {
			setCount((count) => count + 1);
		}
	}, [selectedBtn]);

	return (
		<div className="hooks">
			<div className="hooksBtns">
				<button
					onClick={() => {
						setSelectedBtn(1);
					}}
				>
					1
				</button>
				<button
					onClick={() => {
						setSelectedBtn(2);
					}}
				>
					2
				</button>
				<button
					onClick={() => {
						setSelectedBtn(3);
					}}
				>
					3
				</button>
			</div>

			<h1>Selected Button {selectedBtn}</h1>
			<h1>Count: {count}</h1>
		</div>
	);
}
