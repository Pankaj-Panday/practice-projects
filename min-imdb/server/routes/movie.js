import { Router } from "express";
import { Movie } from "../models/Movie.js";
// import movies from "../config/movies.json" assert { type: "json" };

const router = Router();

router.get("/movies", async (req, res) => {
	try {
		const { name, genre, sort, select } = req.query;
		const rating = parseFloat(req.query?.rating);
		const startYear = parseInt(req.query?.startYear) || 0;
		const endYear = parseInt(req.query?.endYear) || 0;
		const page = parseInt(req.query.page) || 1;
		const limit = parseInt(req.query.limit) || 10;

		const customQueryObj = {};

		if (name) {
			customQueryObj.name = { $regex: name, $options: "i" };
		}
		if (genre) {
			customQueryObj.genre = { $in: genre.split(",") };
		}
		if (rating) {
			customQueryObj.rating = { $gte: rating };
		}

		if (startYear && !endYear) customQueryObj.year = { $gte: startYear };
		else if (!startYear && endYear) customQueryObj.year = { $lte: endYear };
		else if (startYear && endYear)
			customQueryObj.year = { $gte: startYear, $lte: endYear };

		console.log(customQueryObj);

		let findQuery = Movie.find(customQueryObj);

		if (sort) {
			const sortingData = sort.split(",");
			let property = sortingData[0];
			let order = sortingData[1] || "asc";
			const sortBy = {
				[property]: order,
			};
			findQuery = findQuery.sort(sortBy);
		}

		if (select) {
			const fields = select.split(",").join(" ");
			findQuery = findQuery.select(fields);
		}

		const itemsToSkip = (page - 1) * limit;
		findQuery = findQuery.skip(itemsToSkip).limit(limit);

		const data = await findQuery;
		const count = await Movie.countDocuments(customQueryObj);
		// const data = ["hello"];
		// const count = 10;

		const response = {
			error: false,
			data: data,
			total: count,
			current: data.length,
		};

		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: true, message: "Error occurred" });
	}
});

// const insertMovies = async () => {
//   try {
//     const docs = await Movie.insertMany(movies);
//     return Promise.resolve(docs);
//   } catch(err) {
//     return Promise.reject(err)
//   }
// }

// insertMovies().then((docs) => {
//   console.log(docs)
// }).catch((err) => console.log(err))

export default router;
