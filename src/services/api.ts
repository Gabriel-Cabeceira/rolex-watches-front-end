import axios from 'axios';

export const url = 'http://54.173.21.248:443';

export const api = axios.create({
  baseURL: url
});

