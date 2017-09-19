'use strict';

module.exports = function(app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type, Accept");
        next();
    });
	// Modulo de Personas
    app.use('/api/persons', require('./persons/index.js'));
	app.use('/api/heroes', require('./heroes/index.js'));

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./index.html'); // Carga única de la vista
	});
};