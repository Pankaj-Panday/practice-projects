import {
	FaSun,
	FaCloudSun,
	FaThermometerThreeQuarters,
	FaCloud,
	FaCloudMoon,
	FaMoon,
	FaWind,
	FaCloudRain,
	FaUmbrella,
} from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";

export const weatherData = [
	{
		id: 1,
		time: "6:00 AM",
		temperature: "22°C",
		icon: FaSun, // Storing as a component reference, not JSX
	},
	{
		id: 2,
		time: "9:00 AM",
		temperature: "26°C",
		icon: FaCloudSun,
	},
	{
		id: 3,
		time: "12:00 PM",
		temperature: "30°C",
		icon: FaThermometerThreeQuarters,
	},
	{
		id: 4,
		time: "3:00 PM",
		temperature: "32°C",
		icon: FaCloud,
	},
	{
		id: 5,
		time: "6:00 PM",
		temperature: "29°C",
		icon: FaCloudSun,
	},
	{
		id: 6,
		time: "9:00 PM",
		temperature: "25°C",
		icon: FaCloudMoon,
	},
	{
		id: 7,
		time: "12:00 AM",
		temperature: "23°C",
		icon: FaMoon,
	},
];

export const cards = [
	{
		id: 1,
		heading: "Humidity",
		title: "82%",
		description: "bad",
		icon: FaDroplet,
		progress: 50,
	},
	{
		id: 2,
		heading: "Wind",
		title: "8Km/h",
		icon: FaWind,
		progress: 30,
	},
	{
		id: 3,
		heading: "Precipitation",
		title: "1.4 cm",
		icon: FaCloudRain,
		progress: 70,
	},
	{
		id: 4,
		heading: "UV Index",
		title: "4",
		description: "medium",
		icon: FaSun,
		progress: 100,
	},
	{
		id: 5,
		heading: "Feels like",
		title: "30\u00B0", // \u00B0 is unicode for degree symbol
		icon: FaThermometerThreeQuarters,
		progress: 5,
	},
	{
		id: 6,
		heading: "Chances of rain",
		title: "42%",
		icon: FaUmbrella,
		progress: 30,
	},
];
