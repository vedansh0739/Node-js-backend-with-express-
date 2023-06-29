const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const BodyParser = require("body-parser");

app.use(BodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello Wdfdsfsorld!");
});

let list = [{ Val: "FirstOne" }];

app.get("/a", (req, res) => {
  res.send(list);
});

app.post("/a", (req, res) => {
  let NewElement = req.body.Val;
  console.log(NewElement);
  const NewArrayVal = { Val: NewElement };
  list.push(NewArrayVal);
  res.send(list);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
