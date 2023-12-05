import { useState } from "react";
import "./CurrencyConverter.css";

export default function CurrencyConverter() {
	const eurExchangeRate = {
		USD: 1.08,
	};
	const [fromEUR, setFromEUR] = useState(true);

	const [input, setInput] = useState(1);
	const [result, setResult] = useState(input * eurExchangeRate.USD);

	return (
		<>
			<h1>Currency Converter</h1>
			<div className="converterWrapper">
				<div className="currencyField">
					<h3>{fromEUR ? "EUR" : "USD"}</h3>
					<input
						value={input.toFixed(2)}
						onChange={(e) => {
							const newVal = Number(e.target.value);
							if (newVal < 0) {
								return;
							}
							setInput(newVal);
							setResult(newVal * eurExchangeRate.USD);
						}}
						type="number"
					/>
				</div>
				<button
					onClick={() => {
						setInput(result);
						setResult(input / eurExchangeRate.USD);
						setFromEUR(!fromEUR);
					}}
				>
					&lt; - &gt;
				</button>
				<div className="currencyField">
					<h3>{fromEUR ? "USD" : "EUR"}</h3>
					<input value={result.toFixed(2)} readOnly type="number" />
				</div>
			</div>
		</>
	);
}
