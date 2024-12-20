require("dotenv").config();
const express = require("express");
const { join } = require("path");

const server = express();

server.use(express.json());

// Routes
// Home Route
server.get("/", (_, res) => {
  const file = join(__dirname, "index.html");
  res.status(200);
  res.header("Content-Type", "text/html");
  res.sendFile(file);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, async () => {
  try {
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
