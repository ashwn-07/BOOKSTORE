import axios from'axios';


const BASE_URL = '/'

//deault public apis
export default axios.create({
    baseURL: BASE_URL
});


//for protected APIs
export const axiosPrivate =  axios.create({
    baseURL:BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true

});


//private 