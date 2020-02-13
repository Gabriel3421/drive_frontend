 import axios from 'axios';

 const api = axios.create({
     baseURL: 'https://omnibackend01.herokuapp.com'
 });

 export default api;