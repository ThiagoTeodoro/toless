//Importes
const Urls = require('../models/Urls');


module.exports = {

    /**
     * Service to insert a new url in the database, with the hash reference
     * dont already exist.
     * 
     * @param {*} urlData 
     * @returns {object} url inserted or null
     */
    async safeInsertUrl(urlData){

        try{

            if(urlData.hashReference, urlData.originalUrl, urlData.timestamp){

                const checkIfUrlAlreadyRegistred = await this.getUrlByHash(urlData.hashReference);

                if(!checkIfUrlAlreadyRegistred){

                    return await Urls.create({
                        'hashReference': urlData.hashReference,
                        'originalUrl': urlData.originalUrl,
                        'timestamp': urlData.timestamp,
                    });

                } else {

                    throw new Error('Url is already exist in the DataBase.');                }   

            } else {

                throw new Error('Mandatory fields not sented!')
            }

        } catch(error){

            throw new Error(`An error has ocurred when the api try to execute the service safeInsertUrl(). Error : ${error}`);
        }
    },

    /**
     * Service to get a URL from database. 
     * If the url dont exist will return null
     * 
     * @param {*} hashReference 
     * @returns {object}
     */
    async getUrlByHash(hashReference){

        try{

            return await Urls.findOne({'hashReference' : hashReference});         
        } catch(error){

            throw new Error(`An error has ocurred when the api try to execute the service getUrlByHash(). Error : ${error}`);
        }
    },

    /**
     * Service to check it a hash reference exist.
     * 
     * @param {*} hashReference 
     * @returns {boolean}
     */
    async hashExist(hashReference){

        try{

            const url = await this.getUrlByHash(hashReference);
            
            //If url exist, i mean, is not null
            if(url){
                
                console.info(`The Hash [${hashReference}] its already exist in the database!`);
                return true;
            } else {

                return false;
            }
        } catch(error){

            throw new Error(`An error has ocurred when the api try to execute the service hashExist(). Error : ${error}`);
        }
    }
    
}