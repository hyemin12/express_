const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// 몽구스 연결
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://hyemiiin:nctdream0825@cluster0.wifofb1.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB conected"))
  .catch((err) => {
    console.log(err);
  });
