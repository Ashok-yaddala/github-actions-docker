const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello from Production Docker App!");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
