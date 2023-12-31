import axios from 'axios';

export const url = 'https://107.22.2.30:443';

export const api = axios.create({
  baseURL: url
});

