import axios from 'axios';

/**
 * Configurando Axios para realizar as integrações com a API.
 */
const api = axios.create({baseURL: "https://toless.herokuapp.com/"})
//const api = axios.create({baseURL: "http://localhost:3030/"})


export default api;