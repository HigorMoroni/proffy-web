import axios from 'axios';

const api = axios.create({
  baseURL: 'https://proffyserver.herokuapp.com/',
});

export default api;