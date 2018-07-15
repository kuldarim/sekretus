const express = require("express");

const app = express();
app.listen(process.env.PORT || 5000);

// Server index page
app.get("/", (req, res) => {
  res.send("Deployed!");
});
