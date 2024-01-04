import axios from 'axios';

export const url = 'http://54.147.151.79:443';

export const api = axios.create({
  baseURL: url
});

