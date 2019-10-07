const express = require("express");
const path = require("path");
const fetch = require("node-fetch");
const kickboxApiKey =
  "test_a511dfec549e3d818548240452682dfd9df63cd9035d906de9897e1d6321042c";

const app = express();
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/verify-email/:email", async (req, res) => {
  const email = req.params.email;
  const api_url = `https://api.kickbox.com/v2/verify?email=${email}&apikey=${kickboxApiKey}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.json(json);
});

app.get("*", (req, res) => {
  res.json("Invalid request! Please try again.");
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port ", port);
