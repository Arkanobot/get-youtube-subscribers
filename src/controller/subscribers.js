const { Subscribers } = require("../model/subscribers");

exports.getSubscribersList = async (request, response) => {
  //get every record in the Subscribers collection in DB
  const subscribers = await Subscribers.find({});
  //if data exists in DB - send the array of objects
  if (subscribers[0] !== undefined) {
    response.status(200).send(subscribers);
  } // if data does not exist in DB - send error
  else {
    response.status(400).send({ message: "No data found" });
  }
};
