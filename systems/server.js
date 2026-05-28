const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("👑 RTG LEGEND DASHBOARD ONLINE");
});

app.listen(3000, () => {
  console.log("Dashboard running");
});
