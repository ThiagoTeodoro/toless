import api from '../../config/AxiosConfig';


export default class ShortenService {

    /**
     * Service to shorten a new URL.
     * 
     * @param {*} url 
     */
    shortenUrl = async (url) => {

        return await api.post('/shorten', { 'originalUrl': url });
    }
}
