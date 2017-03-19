var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/read', function (req, res, next) {
    res.status(200).send(JSON.stringify({"status" : "success"}));
    next();
});

app.put('/api/update', function (req, res, next) {
    res.status(200).send(JSON.stringify({"status" : "success"}));
    next();
});

app.delete('/api/delete', function (req, res, next) {
    res.status(200).send(JSON.stringify({"status" : "success"}));
    next();
});

app.post('/api/create', function (req, res, next) {
    q = req.body.question;
    console.log(q);
    res.status(200).send(JSON.stringify({resp: "I am good"}));
    next();
});

app.listen(2333, function() {
	console.log("Listening at 2333");
});
