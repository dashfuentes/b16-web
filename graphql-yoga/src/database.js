import mongoose from "mongoose";

const uri =
	"mongodb+srv://dashfuentes:Test123@cluster0.3pioj25.mongodb.net/?retryWrites=true&w=majority";

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((db) => {
		return console.log("DB is connected!!");
	})
	.catch((err) => console.log(err));
