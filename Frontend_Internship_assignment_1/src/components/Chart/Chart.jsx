import React from "react";
import { weatherData } from "../../data";
// import css from "./chart.module.css";
import {
	AreaChart,
	XAxis,
	YAxis,
	Area,
	ResponsiveContainer,
	Tooltip,
	CartesianGrid,
} from "recharts";

const Chart = () => {
	const data = weatherData.map((weather) => {
		return { time: weather.time, temperature: parseInt(weather.temperature) };
	});
	return (
		<ResponsiveContainer width="100%" height={200}>
			<AreaChart
				data={data}
				margin={{ top: 0, right: 50, bottom: 10, left: 0 }}
			>
				<XAxis dataKey="time" />
				<YAxis />
				<Area dataKey="temperature" fill="#5c9ce5" />
				<Tooltip />
				<CartesianGrid strokeDasharray="4" />
			</AreaChart>
		</ResponsiveContainer>
	);
};

export default Chart;
