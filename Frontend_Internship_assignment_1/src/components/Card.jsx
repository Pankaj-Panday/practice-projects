import React from "react";
import ProgressBar from "./ProgressBar/ProgressBar";

const Card = ({ heading, icon: Icon, title, description, progress = 0 }) => {
	return (
		<article className="card">
			<header>
				<h4>{heading}</h4>
				<div className="icon">
					<Icon />
				</div>
			</header>
			<section>
				{title && <span>{title}</span>}
				{description && <span>{description}</span>}
			</section>
			<footer>
				<ProgressBar progress={progress} />
			</footer>
		</article>
	);
};

export default Card;
