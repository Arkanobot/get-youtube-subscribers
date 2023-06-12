const express = require("express");
const app = express();
//importing all the route functions
const {redirectToDocs } = require("./controller/redirectToDocs");
const { getSubscribersList } = require("./controller/subscribers");
const { getSpecificFields } = require("./controller/subscriberNames");
const { getSpecificSubscriber } = require("./controller/specificSubscriber");

// Your code goes here

//routs for the App.
app.get("/", redirectToDocs)
app.get("/subscribers", getSubscribersList);
app.get("/subscribers/names", getSpecificFields);
app.get("/subscribers/:id", getSpecificSubscriber);

module.exports = app;
