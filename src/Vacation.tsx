import { useState } from "react";
import { Button } from "@mui/material";

import beach from "./assets/beach.jpg";
import winter from "./assets/trees.jpg";
import styles from "./Vacation.module.css";

export default function Vacation() {
	const [img, setImg] = useState("");

	return (
		<>
			<div className={styles.vacationContainer}>
				<div className={styles.btnsContainer}>
					<Button
						onClick={() => {
							setImg(winter);
						}}
						className={`${styles.btn} ${img === winter ? styles.active : ""}`}
						variant="contained"
					>
						Winter Wonderland
					</Button>
					<Button
						onClick={() => {
							setImg(beach);
						}}
						className={`${styles.btn} ${img === beach ? styles.active : ""}`}
						variant="contained"
					>
						Tropical Island
					</Button>
				</div>

				{(() => {
					if (img) {
						return <img className={styles.img} src={img} />;
					} else {
						return <div className={styles.loader}></div>;
					}
				})()}
			</div>
		</>
	);
}
