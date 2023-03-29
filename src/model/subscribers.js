const mongoose = require("mongoose");

//defining the schema for the Subscribers collection
const susbcriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subscribedChannel: {
    type: String,
    required: true,
  },
  subscribedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

// defining the model for mongoose interaction
const Subscribers = mongoose.model(
  "Subscriber",
  susbcriberSchema,
  "subscribers"
);
exports.Subscribers = Subscribers;
