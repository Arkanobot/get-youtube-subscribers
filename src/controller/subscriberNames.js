const { Subscribers } = require("../model/subscribers");

exports.getSpecificFields = async (request, response) => {
  //get the name and SubscribedChannel for every subscribers in the DB
  const subscribers = await Subscribers.find(
    {},
    { _id: 0, name: 1, subscribedChannel: 1 }
  );
  //if there is values in subscribers - send the array
  if (subscribers[0] !== undefined) {
    response.status(200).send(subscribers);
  } // if there is no values in the DB - sends the error
  else {
    response.status(400).send({ message: "No data was found" });
  }
};
