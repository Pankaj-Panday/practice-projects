import React from "react";
import css from "./progressbar.module.css";

const ProgressBar = ({ progress }) => {
	return (
		<article className={css.container}>
			<header>
				<label>0%</label>
				<label>100%</label>
			</header>
			<div className={css.bar}>
				<div
					className={css.progress}
					style={{
						translate: `${progress - 100}% 0`,
					}}
				></div>
			</div>
		</article>
	);
};

export default ProgressBar;
