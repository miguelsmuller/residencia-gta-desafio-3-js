const { http } = require('../config/axios');

const getDataPosts = async () => {
  try {
    const { data } = await http.get(`/`)

    return data
  } catch (err) {
    throw err;
  }
};

module.exports = { getDataPosts };
