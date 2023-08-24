//utils/api.js
const axios = require("axios");
require('dotenv').config()
const queryString =  require("query-string");

const axiosClient = axios.create({
  baseURL: 'https://oauth.casso.vn/v2',
  headers: {
    "content-type": "application/json",
    "Authorization": `Apikey ${process.env.API_KEY}`,
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (error) => {
    throw error;
  }
);
module.exports =  axiosClient;