module.exports = {

    /**
     * Constroller for delivery index.html with a front-end ReactJS.
     * 
     * @param {*} request 
     * @param {*} response 
     */
    deliverIndexPage(request, response){

        response.sendFile(path.join('./src/views/', 'index.html'));
    },
}