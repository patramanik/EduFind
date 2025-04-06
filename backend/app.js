const express = require("express");
const cors = require("cors");

const { logReqRes } = require("./middleware/logReqRes"); // Assuming this is the correct path to your middleware

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

app.use(logReqRes("log.txt"));

app.get("/", (req, res) => {
  res.send("Welcome to the backend API!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
