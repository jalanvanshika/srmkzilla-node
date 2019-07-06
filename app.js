const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.use(bodyParser.json());

app.post("/hello", function(req, res) {
    console.log(req.body.age);
    res.send("post-request success");
});
   
// app.use(function(req, res, next) {});

app.listen(8000);

