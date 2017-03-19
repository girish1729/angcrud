
var express = require('express');
var bodyParser = require('body-parser')
var fs = require('fs');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', express.static(__dirname + '/public'));
app.all('/*', function(req, res, next){
  console.log("URL:: " + req.path);
  console.log("Method:: " + req.method);
    next();
});

var dbobj = {};

app.post('/api/create', function (req, res, next) {
    n = req.body.name;
    console.log(n);
    dbobj.name = n;
    res.status(200).json({status: "Created"});
    next();
});

app.get('/api/read/:name', function (req, res, next) {
    n = req.params.name;
    outname = dbobj.name;
    console.log(dbobj);
    console.log(dbobj.name);
    reply = { name : outname};
    res.status(200).json(reply);
});

app.put('/api/update', function (req, res, next) {
    n = req.body.name;
    dbobj.name = n;
    reply = { name : dbobj.name };
    res.status(200).json(reply);
    next();
});

app.delete('/api/delete/:name', function (req, res, next) {
    n = req.params.name;
    delete dbobj[n]; 
    console.log(dbobj);
    res.status(200).json({status: "Deleted"});
    next();
});

app.get('/*', function(req, res, next){
  res.sendFile(__dirname + '/public/index.html');
});

var port = 2333;
app.listen(port, function() {
  console.log('server listening on port ' + port);
});


