import axios from 'axios';

const Audited = axios.create({
  //baseURL: 'http://35.243.152.156:3201/api/'
  baseURL: 'http://127.0.0.1:8000/api/'
});

export default Audited;

