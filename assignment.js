const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.use(bodyParser.json());

app.get("/hw", function(req, res) {
    res.send("Success Get request to assignment server.");
});

app.post("/write", function(req, res) {
    const message = req.body.message;
    fs.writeFile("temp.txt", message, function(err) {
        if (err) {
            console.log(err);
            res.status(500).send({ error: 'Something failed!' });
  
        }
        console.log("Successfully written message in the file temp.");
    });
    res.send("Success post request.");
});

app.get("/read", function(req, res) {
    fs.readFile("tem.txt", "utf-8", function(err, data) {
        if (err) {
            console.log(err);
            res.status(500).send({ error: 'Something failed!' });
  
        }
        console.log(data);
    });
    res.send("Check console.");
});

app.listen(4000);