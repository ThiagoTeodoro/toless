//Imports
const UrlsService = require('../services/UrlsService');

module.exports = {

    /**
     * Constroller to Forward a URL
     * 
     * @param {*} request 
     * @param {*} response 
     */
    async forwardUrl(request, response){
        
        try {

            const { hash } = request.params;

            const url = await UrlsService.getUrlByHash(hash);
            
            return response.redirect(url.originalUrl);

        } catch(error) {

            console.error(error);
            return response.status(500).json({'msg' : 'Internal Server Error.'});
        }

    }


}