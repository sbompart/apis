/**
 * Created by Saul Bompart on 16-06-2017.
 */
'use strict';
var Person = require('./persons.model');
var _ = require("lodash");


// Obtiene todos los objetos Persona de la base de datos
exports.all = function (req, res){
        Person.find(
            function(err, person) {
                if (err)
                    res.send(err);
                var hero = [];
                _.forEach(person, function (value) {
                    var obj = {
                        id: value._id,
                        name: value.name,
                        edad: value.edad
                    };
                    hero.push(obj);
                });
                res.json(hero); // devuelve todas las Personas en JSON
            }
        );
};

exports.get = function (req, res) {
        Person.findById(req.params.idPerson, function (err, person) {
            if(err)
                res.send(err);
            var obj = {
                id: person._id,
                name: person.name,
                edad: person.edad
            };
            res.json(obj);
        });
};

// Guarda un objeto Persona en base de datos
exports.create = function(req, res) {
    // Creo el objeto Persona
    Person.create(
        {name : req.body.name, edad: req.body.edad},
        function(err, person) {
            if (err)
                res.send(err);

            // Obtine y devuelve todas las personas tras crear una de ellas
            Person.find(function(err, person) {
                if (err)
                    res.send(err);
                var hero = [];
                _.forEach(person, function (value) {
                    var obj = {
                        id: value._id,
                        name: value.name,
                        edad: value.edad
                    };
                    hero.push(obj);
                });
                res.json(hero); // devuelve todas las Personas en JSON
            });
        });

};

exports.update = function(req, res){
    Person.update( {_id : req.params.idPerson},
        {$set:{name : req.body.name, edad: req.body.edad}},
        function(err, person) {
            if (err)
                res.send(err);

            // Obtine y devuelve todas las personas tras crear una de ellas
            Person.find(function(err, person) {
                if (err)
                    res.send(err);
                res.json(person);
            });
        });
};

exports.delete = function(req, res) {
    Person.remove({_id : req.params.idPerson}, function(err, person) {
        if (err)
            res.send(err);

        // Obtine y devuelve todas las personas tras borrar una de ellas
        Person.find(function(err, person) {
            if (err)
                res.send(err);
            res.json(person);
        });
    });
};