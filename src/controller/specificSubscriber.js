const { Subscribers } = require("../model/subscribers");

exports.getSpecificSubscriber = async (request, response) => {
  //gets the subscriber details by matching the Id with the database _id
  const id = request.params.id;
  //checks if the ID passed in the params is a valid ObjectID string
  if (id.match(/^[0-9a-fA-F]{24}$/) || id.match(/^[0-9a-fA-F]{12}$/)) {
    //search the DB for the Object Id
    try{

      const subscribers = await Subscribers.findById(id).exec();
      //if the data exists - send data
      if (subscribers !== null) {
      response.status(200).send(subscribers);
    }
    //if the data does not exist - send error message
    else {
      response.status(400).send({ message: "No data was found for the ID" });
    }
  }catch (err){
    console.log(err)
    response.status(500).send({message:"server error", data: err})
  }
  } // if the Id in the params is not a valid ObjectID string, send error
  else {
    response.status(400).send({ message: "Not a valid ID" });
  }
};
