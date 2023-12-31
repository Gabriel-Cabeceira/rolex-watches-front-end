import axios from 'axios';

export const url = 'http://34.226.212.202:443';

export const api = axios.create({
  baseURL: url
});

