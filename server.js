
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

// Configuracion
mongoose.connect('mongodb://localhost:27017/EjemploMEAN');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(__dirname + '/'));

// Cargamos los endpoints
require('./app/routes')(app);

app.listen(process.env.PORT || 7001, function() {
    console.log("Node server running on http://localhost:7001");
});
