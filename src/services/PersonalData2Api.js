import axios from 'axios';

const PersonalData2 = axios.create({
  //baseURL: 'http://35.243.152.156:3201/api/'
  baseURL: 'http://localhost:8000/api/'
});

export default PersonalData2;
