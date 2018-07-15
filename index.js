const express = require("express");
const passwordGenerator = require("password-generator");

const app = express();
app.listen(process.env.PORT || 5000);

// Server index page
app.get("/", (req, res) => {
  const password = passwordGenerator(16, false);
  res.send(password);
});
