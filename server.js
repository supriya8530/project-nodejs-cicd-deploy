const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("nodejs project developed  by supriya rupnar this is cicd pipeline");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
