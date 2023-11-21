export default function Hello({
	name,
	frage,
}: {
	name: string;
	frage: string;
}) {
	return (
		<div>
			Hello {name}, {frage}
		</div>
	);
}
