var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;

console.log('connected to server');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(express.static('server/public'));


app.listen(port, function () {
    console.log('listening on port', port);
});

