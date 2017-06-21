'use strict';

module.exports = function(app) {
	// Modulo de Personas
	app.use('/api/persons', require('./persons/index.js'));

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./angular/index.html'); // Carga única de la vista
	});
};