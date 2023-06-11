const mongoose = require("mongoose");
const dotenv = require("dotenv");
const {Subscribers} = require("./src/model/subscribers");
const data = require("./data");

//read files from dotenv
dotenv.config();

// Connect to DATABASE
const DATABASE_URL = process.env.MONGODB_URL;
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Database created..."));

const refreshAll = async () => {
  await Subscribers.deleteMany({});
  await Subscribers.insertMany(data);
  await mongoose.disconnect();
};
refreshAll();
