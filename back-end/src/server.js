//Imports
const dotenv = require('dotenv');
const app = require('./app');
const Connection = require('./database/Connection');

//Get envoriment variable from .env
dotenv.config();

//Connect to Database
Connection.connect();

//Work port
app.listen(process.env.PORT, () => {
    console.info(`Server is running in port: ${process.env.PORT}.`)
});