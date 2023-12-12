import { useState, useEffect } from "react";

const months = [
	"January",
	"Febuary",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"Novmber",
	"December",
];

export default function Search() {
	const [query, setQuery] = useState("");
	const [res, setRes] = useState<Array<string>>(months);

	useEffect(() => {
		setRes(months.filter((month) => month.includes(query)));
	}, [query]);

	return (
		<>
			<input
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				type="text"
			/>
			<p>{res.join(", ")}</p>
			<p>CASE SENSITIVE!!</p>
		</>
	);
}
