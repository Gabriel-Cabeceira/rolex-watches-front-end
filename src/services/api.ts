import axios from 'axios';

export const url = 'http://107.22.2.30:5000';

export const api = axios.create({
  baseURL: url
});
