import express from "express";

const app = express();

// app.get("/", (req, res) => {
// 	res.send("Server is ready");
// });

app.get("/api/jokes", (req, res) => {
	const jokes = [
		{ id: 1, title: "First Joke", content: "This is first joke!" },
		{
			id: 2,
			title: "Second Joke",
			content:
				"Why did the scarecrow win an award? Because he was outstanding in his field!",
		},
		{
			id: 3,
			title: "Third Joke",
			content: "What do you call a fish with no eyes? Fsh!",
		},
		{
			id: 4,
			title: "Fourth Joke",
			content: "What do you call a lazy kangaroo? Pouch potato!",
		},
		{
			id: 5,
			title: "Fifth Joke",
			content: "What do you call a cow with no legs? Ground beef!",
		},
	];
	res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server is listening at http://localhost:${port}`);
});
