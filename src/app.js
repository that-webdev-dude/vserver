const express = require("express");
const dataRoutes = require("./routes/dataRoutes");
const summaryRoutes = require("./routes/summaryRoutes");

const app = express();

app.use(express.json());

// Routes
app.use("/data", dataRoutes);
app.use("/summary", summaryRoutes);

// Test endpoint to check the server is running
app.get("/", (req, res) => {
  res.send("Server is running");
});

module.exports = app;
