/**
 * @swagger
 * /subscribers:
 *  get:
 *      tags: 
 *              - Available Endpoints
 *      description: <b>Route to get every detail of subscribers from the Database.</b>
 *      responses:
 *        '200':
 *            description: Array of Objects containing every subscriber with their id, name, subscribed channel, subscribed date.
 *        '404':
 *            description: In case no data in DB - returns a error message stating No data found
 *        '500':
 *            description: In case of server error - returns a error message stating server error with error data
 * 
 * /subscribers/names:
 *  get:
 *      tags: 
 *              - Available Endpoints
 *      description: <b>Route to get the name and subscribed channel details of every subscriber from the Database.</b>
 *      responses:
 *        '200':
 *            description: Array of Objects containing every subscriber with their name and subscribed channel.
 *        '404':
 *            description: In case no data in DB - returns a error message stating No data found
 *        '500':
 *            description: In case of server error - returns a error message stating server error with error data
 * 
 * /subscribers/{id}:
 *  get:
 *      tags: 
 *              - Available Endpoints
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              example: 6488997173079fb19c7d4f0b
 *      description: <b>Route to get all the details of a specific subscriber from the Database.</b> <br/><br/> <b>Example Existing ID </b> - <u>6488997173079fb19c7d4f0b</u>- This is an existing ID in the DB which returns a Object with the following data of a Specific User - the ID, Name, subscribed channel, subscribed date. <br/><br/> <b>Example Non Existing ID </b> - <u> 1483e88f0ae0a8b8d6fda066</u> - This returns an 404 error stating no document was found for the ID. <br/><br/> <b>Example Invalid ID </b> - <u> 1234567890asddfghk</u> - This is an invalid ObjectID and this returns a 400 error stating Not a Valid ID
 *      responses:
 *        '200':
 *            description: Object containing every detail of the specific subscriber from the database.
 *        '400':
 *            description: In case of invalid ObjectId - returns an error stating Not a valid ID
 *        '404':
 *            description: In case no data in DB - returns a error message stating No data found
 *        '500':
 *            description: In case of server error - returns a error message stating server error with error data
 */