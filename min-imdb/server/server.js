import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./dbConnect.js";
import movieRouter from "./routes/movie.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 3000;

connectDB()
	.then(() => {
		app.listen(port, () => console.log(`Listening on port ${port}`));
	})
	.catch((e) => {
		console.log("Mongodb connection failed: ", e);
	});

app.use("/api", movieRouter);
