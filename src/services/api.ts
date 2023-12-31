import axios from 'axios';

export const url = 'https://54.221.54.121:443';

export const api = axios.create({
  baseURL: url
});

