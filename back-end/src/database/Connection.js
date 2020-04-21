//Imports
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Getting the ENV variables
dotenv.config();


/**
 * Function to connect database with mongoose.
 * 
 * @param {*} uri 
 */
async function connectMongooseToDatabase(uri) {

    try {

        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

    } catch (error) {

        /**
         * This process is critical if you do not connect the application, it will be closed!
         */
        console.error(`An error unexpected occurred : ${error}`);
        console.error('Closing the application...');
        process.exit(0)
    }
}

module.exports = {

    /**
     * Function for connecting in the Database.
     * 
     * --- 
     *      This process is critical, if an error occurs or an 
     *      invalid parameter is being sent, the application is 
     *      forced to close.
     * ---
     */
    async connect() {

        try {
        
            await connectMongooseToDatabase(process.env.URI_DATABASE);

        } catch (error) {

            /**
             * This process is critical if you do not connect the application, it will be closed!
             */
            console.error(`An error occurred when the api tried to connect to the database. Error : ${error}`);
            console.error('Closing the application...');
            process.exit(0)            
        }
    },    
}