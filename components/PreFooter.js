import React from "react";
import { GoRocket } from "react-icons/go";
import { FaRegCaretSquareRight } from "react-icons/fa";
import styles from "../styles/PreFooter.module.css";

function PreFooter() {
	return (
		<div className={styles.preFooter}>
			<div className={styles.content}>
				<GoRocket className={styles.preFooterIcon} />
					<h4>
						Get Seen With Us and Take Your Project to the Next Level Now to See
						Results!
					</h4>
				<div>
					<a href="#" className={styles.preFooterCTA}>
						Arrange a Meeting
					</a>{" "}
					<FaRegCaretSquareRight />{" "}
				</div>
			</div>
		</div>
	);
}

export default PreFooter;
