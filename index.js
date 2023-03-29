const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { mongoose } = require("mongoose");
const app = require("./src/app.js");

//reading from the Env file
dotenv.config();
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//establishing mongo db connection
// const uri = "mongodb://127.0.0.1:27017/subscribers";
const uri = process.env.MONGODB_URL;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// Mongoose connection events
mongoose.connection.on("connected", () => {
  console.log("Connected to database");
});
mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from database");
});
mongoose.connection.on("error", (err) => {
  console.log("Error connecting to database", err);
});

// start the server
const server = app.listen(process.env.PORT, () =>
  console.log("Server listening on port " + process.env.PORT)
);

module.exports = server;
