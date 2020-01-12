var express = require("express");
var bodyparser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");

var url = "mongodb://localhost:27017/users";

var app = express();

app.use(bodyparser.json());
app.use(cors());
var db;

// database connection
MongoClient.connect(
  url,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err, client) => {
    if (err) return console.log(err);
    db = client.db("users");
    app.listen(8000);
    console.log("Listening on port 8000");
  }
);

app.get("/incidents", (req, res) => {
  db.collection("incidents")
    .find()
    .toArray((err, result) => {
      if (err) return console.log(err);
      res.json(result);
    });
});

app.get("/count_incidents", (req, res) => {
  res = db
    .collection("incidents")
    .find({ Date: { $regex: "/15$" } })
    .count();
});
