import React from "react";
import css from "./toggleBtn.module.css";

const ToggleBtn = () => {
	return (
		<div className={css.toggleBtn}>
			<input type="checkbox" id="toggle" />
			<label htmlFor="toggle" className={css.switch}></label>
		</div>
	);
};

export default ToggleBtn;
