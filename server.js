var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');
mongoose = require('mongoose');

// Configuracion
mongoose.connect('mongodb://localhost:27017/EjemploMEAN');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(__dirname + '/angular'));

// Cargamos los endpoints
require('./app/routes.js')(app);

app.listen(2050, function() {
    console.log("Node server running on http://localhost:2050");
});
