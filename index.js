const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/api/getList", (req, res) => {
  const list = ["item1", "item2", "item3"];
  res.json(list);
  console.log("Sent list of items");
});

app.get("*", (req, res) => {
  res.json("Invalid request! Please try again.");
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port ", port);
