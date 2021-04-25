import axios from 'axios';

const axiosOrdersInstance = axios.create({
    baseURL: 'https://burger-builder-13404-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default axiosOrdersInstance;
