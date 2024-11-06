const axios = require("axios");
const { API_BASE_URL } = process.env;

const fetchData = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

module.exports = { fetchData };
