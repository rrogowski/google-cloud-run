const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.send("Hello from Express on Google Cloud! Updated!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
