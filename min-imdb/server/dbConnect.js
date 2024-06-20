import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const connectionParams = {
			dbName: process.env.DB_NAME,
		};

		mongoose.connection.on("connected", () => {
			console.log("Database connected successfully");
		});
		mongoose.connection.on("error", (err) => {
			console.log("Database connection error: ", err);
		});
		mongoose.connection.on("disconnected", () => {
			console.log("Mongodb disconnectd");
		});

		const mongooseInstance = await mongoose.connect(
			process.env.DB_URL,
			connectionParams
		);
		console.log(`Connected to ${mongooseInstance.connection.name} database`);
	} catch (error) {
		console.log("Database initial connection failed: ", error);
		process.exit(1);
	}
};

export default connectDB;
