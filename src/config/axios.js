const axios = require('axios');

const http = axios.create({
  baseURL: 'http://g1.com.br'
});

module.exports = { http };
