const { fetchData } = require("../services/dataService");

const getSummary = async (req, res) => {
  try {
    const data = await fetchData();
    // Example summary calculation
    const summary = {
      count: data.length,
      // Add more fields as needed
    };
    res.json(summary);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch summary" });
  }
};

module.exports = { getSummary };
