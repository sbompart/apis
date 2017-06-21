/**
 * Created by Saul Bompart on 16-06-2017.
 */
'use strict';
var Person = require('./persons.model');


// Obtiene todos los objetos Persona de la base de datos
exports.all = function (req, res){
        Person.find(
            function(err, person) {
                if (err)
                    res.send(err);
                res.json(person); // devuelve todas las Personas en JSON
            }
        );
};

exports.get = function (req, res) {
        Person.findById(req.params.idPerson, function (err, person) {
            if(err)
                res.send(err);
            res.json(person);
        });
};

// Guarda un objeto Persona en base de datos
exports.create = function(req, res) {

    // Creo el objeto Persona
    Person.create(
        {nombre : req.body.nombre,	apellido: req.body.apellido, edad: req.body.edad},
        function(err, person) {
            if (err)
                res.send(err);

            // Obtine y devuelve todas las personas tras crear una de ellas
            Person.find(function(err, person) {
                if (err)
                    res.send(err)
                res.json(person);
            });
        });

};




/*

// Guarda un objeto Persona en base de datos
exports.setPersona = function(req, res) {

    // Creo el objeto Persona
    Persona.create(
        {nombre : req.body.nombre,	apellido: req.body.apellido, edad: req.body.edad},
        function(err, persona) {
            if (err)
                res.send(err);

            // Obtine y devuelve todas las personas tras crear una de ellas
            Persona.find(function(err, persona) {
                if (err)
                    res.send(err)
                res.json(persona);
            });
        });

}

// Modificamos un objeto Persona de la base de datos
exports.updatePersona = function(req, res){
    Persona.update( {_id : req.params.persona_id},
        {$set:{nombre : req.body.nombre,	apellido: req.body.apellido, edad: req.body.edad}},
        function(err, persona) {
            if (err)
                res.send(err);

            // Obtine y devuelve todas las personas tras crear una de ellas
            Persona.find(function(err, persona) {
                if (err)
                    res.send(err)
                res.json(persona);
            });
        });
}

// Elimino un objeto Persona de la base de Datos
exports.removePersona = function(req, res) {
    Persona.remove({_id : req.params.persona_id}, function(err, persona) {
        if (err)
            res.send(err);

        // Obtine y devuelve todas las personas tras borrar una de ellas
        Persona.find(function(err, persona) {
            if (err)
                res.send(err)
            res.json(persona);
        });
    });
}*/
