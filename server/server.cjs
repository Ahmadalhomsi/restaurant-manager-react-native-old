require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/testhello", (req, res) => {
  res.send("Hello World! Local Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
