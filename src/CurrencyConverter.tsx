import { useState } from "react";
import "./CurrencyConverter.css";

import { Button, TextField } from "@mui/material";
import LoopIcon from "@mui/icons-material/loop";

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
					<TextField
						label={fromEUR ? "EUR" : "USD"}
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
				<Button
					variant="contained"
					onClick={() => {
						setInput(result);
						setResult(input / eurExchangeRate.USD);
						setFromEUR(!fromEUR);
					}}
				>
					<LoopIcon />
				</Button>
				<div className="currencyField">
					<TextField
						disabled
						value={result.toFixed(2)}
						label={!fromEUR ? "EUR" : "USD"}
						type="number"
					/>
				</div>
			</div>
		</>
	);
}
