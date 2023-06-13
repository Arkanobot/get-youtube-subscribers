Project Work - Get Youtube Subscribers

This is a simple Node Express.js App having 3 routes.

1. /subscribers - This route returns all the subscribers data in the Database as a json object with their id, name, subscribedChannel, subscribedDate. In case no data in the Database, returns the message stating no Data
2. /subscribers/names - This route returns the name and subscribedChannel details of the subscribers in the Database - In case no data in the Database, returns the message stating no Data
3. /subscribers/:id - This route returns all the details of the specific subscriber bearing the id mentioned in the param. In case no user is found for the specific ID - displays the error message (the user IDs can be taken from the /subscribers endpoint).
4. /docs (default route) - To view the documentation for the server

Tech Used - Node.Js, Express.Js, Nodemon, Mongoose, MongoDB, Mocha and Chai for testing, Swagger for documentation

Live Link - https://get-youtube-subscribers-r8k8.onrender.com

if running on local machine please follow the following steps - 
1. Please make sure Node Js & mongoDB is installed
2. Make sure mongoDB server is running in local machine
3. Please do run the following command "npm run createDB" inside the get-youtube-subscribers folder to create database entries for subscribers.
4. Start the server with the command "npm start"
5. Use any browser to access the link "localhost:3000"
   
Available Commands
1. npm start - to start the server
2. npm test - to test using mocha and chai
3. npm run createDB - to create database entries in local/ server mongoDB - Link must be specified in .env file
