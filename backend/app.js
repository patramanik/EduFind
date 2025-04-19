const express = require("express");
const cors = require("cors");

const { logReqRes } = require("./middleware/logReqRes"); // Assuming this is the correct path to your middleware

const { authRoute,homeRoute } = require("./routes/index"); // Assuming this is the correct path to your routes

// Assuming this is the correct path to your routes
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));

// Middleware to log requests and responses
app.use(logReqRes("log.txt"));

// define your routes here
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/api/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.use("/api/v1/auth",authRoute);

app.use("/home",homeRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
