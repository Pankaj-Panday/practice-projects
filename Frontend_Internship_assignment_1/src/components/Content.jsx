import React from "react";
import { TbDots } from "react-icons/tb";
import { MdArrowForwardIos } from "react-icons/md";
import avatar from "../assets/avatar.jpg";
import Card from "./Card";
import Chart from "./Chart/Chart";
import { cards } from "../data";

const Content = () => {
	return (
		<article className="content">
			<header>
				<div>
					<h3>Welcome back Isabella!</h3>
					<p>Check out today's weather information</p>
				</div>
				<div>
					<TbDots className="dots-menu" />
					<figure className="avatar">
						<img src={avatar} alt="User avatar" />
					</figure>
				</div>
			</header>
			<section className="chart-container">
				<header>
					<p>Upcoming hours</p>
					<div>
						<select disabled>
							<option value="rain precipitation">Rain precipitation</option>
						</select>
						<button className="btn">
							Next days <MdArrowForwardIos />
						</button>
					</div>
				</header>
				<article className="chart">
					<Chart />
				</article>
			</section>
			<footer>
				<p>More details of today's weather</p>
				<section className="grid">
					{cards.map((card) => (
						<Card key={card.id} {...card} />
					))}
				</section>
			</footer>
		</article>
	);
};

export default Content;
