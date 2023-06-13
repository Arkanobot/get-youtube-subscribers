//require dependencies - model
const { Subscribers } = require("../src/model/subscribers");

//require the dev-dependencies
const chai = require("chai");
const chaiHTTP = require("chai-http");
const server = require("../src/index");
const should = chai.should();

chai.use(chaiHTTP);

//subscribers.js  - for the route /subscribers
describe("get-subscribers", () => {
  it("should get all the subscribers list from the DB", (done) => {
    chai
      .request(server)
      .get("/subscribers")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        // res.body.length.should.be.eql(0);
        done();
      });
  });
});

//subscriberNames.js - for the route /subscribers/names
describe("get-subscriber-names", () => {
  it("should get all the subscribers list and return only name and subscribedChannel field for each subscriber from the db", (done) => {
    chai
      .request(server)
      .get("/subscribers/names")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        // res.body.length.should.be.eql(0);
        done();
      });
  });
});

//specificSubscriber.js - for the route /subscribers/:id

//testing if the ID is found in the DB - returns the object
describe("get-specific-subscriber-by-id", () => {
  it("should get the specific subscriber for the given id if found in DB", (done) => {
    let subscriber = new Subscribers({
      name: "Shreyas",
      subscribedChannel: "Shalis",
    });
    subscriber.save().then((sub) => {
      chai
        .request(server)
        .get("/subscribers/" + sub.id)
        .send(sub)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("name");
          res.body.should.have.property("subscribedChannel");
          res.body.should.have.property("subscribedDate");
          res.body.should.have.property("__v");
          res.body.should.have.property("_id").eql(sub.id);
          done();
        });
    });
  });
});

//testing if the id Does not exist in the DB - returns message - No data was found for the ID
describe("get-specific-subscriber-by-id", () => {
  it("should return No data was found message", (done) => {
    chai
      .request(server)
      .get("/subscribers/1223211f35206ce49d1f273f")
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("object");
        res.body.should.have.a
          .property("message")
          .eql("No data was found for the ID");
        done();
      });
  });
});

//testing if the id is invalid - returns message - Not a valid ID
describe("get-specific-subscriber-by-id", () => {
  it("should return Not a valid ID", (done) => {
    chai
      .request(server)
      .get("/subscribers/asdfg12789")
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a("object");
        res.body.should.have.a.property("message").eql("Not a valid ID");
        done();
      });
  });
});
