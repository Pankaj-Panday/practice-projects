import React from "react";
import { FaSquarePlus } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";
import { LuSunrise } from "react-icons/lu";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { AiOutlineSun } from "react-icons/ai";
import ToggleBtn from "./ToggleBtn/ToggleBtn";

const Sidebar = () => {
	function getDate() {
		const options = {
			day: "2-digit",
			month: "short",
			hour: "2-digit",
			hour12: true,
			minute: "2-digit",
		};
		const date = new Date().toLocaleDateString("en-IN", options);
		const [day, time] = date.split(",");
		return { day, time };
	}

	const { day, time } = getDate();

	return (
		<article className="sidebar">
			<header>
				<button>
					<FaSquarePlus color="white" size="1.5rem" />
				</button>
				<div className="dots">
					<span className="active"></span>
					<span></span>
					<span></span>
				</div>
				<div>
					<span>&deg;C</span>
					<ToggleBtn />
					<span>&deg;F</span>
				</div>
			</header>
			<section>
				<div className="location">
					<label>
						<CiLocationArrow1
							className="icon"
							style={{
								marginBottom: "-4px",
							}}
						/>
						&nbsp;New York,
						<span>USA</span>
					</label>
					<label>
						<LuSunrise className="icon" />
						&nbsp;7:19
					</label>
				</div>
				<div className="date">
					<label>Today, {day}</label>
					<label>
						<LuSunrise className="icon" />
						&nbsp;{time.slice(0, -3)}
					</label>
				</div>
			</section>
			<section>
				<MdArrowBackIos className="arrow" />
				<div>
					<h1>27&deg;</h1>
					<h2>
						<AiOutlineSun />
						&nbsp;Sunny
					</h2>
				</div>
				<MdArrowForwardIos className="arrow" />
			</section>
		</article>
	);
};

export default Sidebar;
