const { fetchData } = require("../services/dataService");

const getData = async (req, res) => {
  try {
    const data = await fetchData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

module.exports = { getData };
