import axios from 'axios';

export const url = 'https://ec2-54-221-54-121.compute-1.amazonaws.com:443';

export const api = axios.create({
  baseURL: url
});

