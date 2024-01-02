const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => console.log(`chat server on port ${PORT}`));

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use(express.static(path.join(__dirname, "public")));
