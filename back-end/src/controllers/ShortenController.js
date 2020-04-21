//Imports
const HashService = require('../services/HashService');
const UrlsService = require('../services/UrlsService');

module.exports = {

    /**
     * Constroller to Shorten a URL
     * 
     * @param {*} request 
     * @param {*} response 
     */
    async shortenUrl(request, response){
        
        try {

            const { originalUrl } = request.body;

            let hash = HashService(7);

            while( await UrlsService.hashExist(hash)){

                hash = HashService(7);
            }

            const urlInserted = await UrlsService.safeInsertUrl({
                'hashReference': hash,
                'originalUrl': originalUrl,
                'timestamp': Date.now(),
            });
            
            return response.json(urlInserted);

        } catch(error) {

            console.error(error);
            return response.status(500).json({'msg' : 'Internal Server Error.'});
        }

    }


}