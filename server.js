const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

app.post("/api/message", async (req, res) => {
  const text = req.body.text;

  // Call backend API here
  const response = await fetch("http://localhost:8080/api/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => {
  console.log("Frontend server listening on port 3000");
});