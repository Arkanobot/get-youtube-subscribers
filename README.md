Project Work - Get Youtube Subscribers

This is a simple Node Express.js App having 3 routes.

1. /subscribers - This route returns all the subscribers data in the Database as a json object with their id, name, subscribedChannel, subscribedDate. In case no data in the Database, returns the message stating no Data
2. /subscribers/names - This route returns the name and subscribedChannel details of the subscribers in the Database - In case no data in the Database, returns the message stating no Data
3. /subscribers/:id - This route returns all the details of the specific subscriber bearing the id mentioned in the param. In case no user is found for the specific ID - displays the error message.

Tech Used - Node.Js, Express.Js, Nodemon, Mongoose, MongoDB

Live Link - https://get-youtube-subscribers-r8k8.onrender.com
