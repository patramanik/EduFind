const express = require("express");
const cors = require("cors");

const { logReqRes } = require("./middleware/logReqRes"); // Assuming this is the correct path to your middleware

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

app.get("/home", (req, res) => {
   const id = req.query.id;
//   req.params;
//   console.log(req.params); // { id: 1 }
//   console.log(req.body); // { name: "John" }
//   req.headers;
  console.log(req.query); // { id: 1 }
  // req.query = { name: "John" };
  // req.body = { age: 30 };
  const name = "John Doe"; // Example variable
  res.json({ message: "Welcome to the home page!", name, id });
});

// app.use("/api/home", );

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
