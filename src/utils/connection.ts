//IMPORT MONGOOSE
import mongoose, { Model } from "mongoose";

const DATABASE_URL = process.env.MONGODB_URL;

// connection function
export const eventConnect = async () => {
	// Event SCHEMA
	const EventSchema = new mongoose.Schema({
		_id: String,
		title: String,
		description: String,
		price: Number,
		date: String,
		time: String,
		location: String,
		hosts: Array<String>,
		capacity: Number,
		attendees: Array<String>,
		tags: Array<String>,
		preview: String,
		images: Array<String>,
	});

	const EventsSchema = new mongoose.Schema({});

	const conn = await mongoose.connect(DATABASE_URL as string).catch((err) => console.log(err));
	const dbName = "CCDatabase";
	const db = conn.connection.db;

	console.log("Database Name: ", dbName);

	const collection = db.collection("Events");

	console.log("Collection Name: ", collection.collectionName);

	// Event MODEL
	const Events = mongoose.models.Events || mongoose.model("Events", EventsSchema, "Events");

	console.log("Events Model: ", Events);

	return { conn, Events };
};
