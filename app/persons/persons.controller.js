//import { delete } from '../heroes/heroes.controller';

/**
 * Created by Saul Bompart on 16-06-2017.
 */
'use strict';
var Person = require('./persons.model');
var _ = require("lodash");


// Obtiene todos los objetos Persona de la base de datos
var all = function (req, res) {
    Person.find(
        function (err, person) {
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

var get = function (req, res) {
    Person.findById(req.params.idPerson, function (err, person) {
        if (err)
            res.send(err);
        else if (person == null)
            res.json("No existe la persona");
        else
            res.json(person);
    });
};

// Guarda un objeto Persona en base de datos
var create = function (req, res) {
    // Creo el objeto Persona
    Person.create(
        { name: req.body.name, edad: req.body.edad },
        function (err, person) {
            if (err)
                res.send(err);

            // Obtine y devuelve todas las personas tras crear una de ellas
            Person.find(function (err, person) {
                if (err)
                    res.send(err);
                all(req, res);
            });
        });

};

var update = function (req, res) {
    Person.update({ _id: req.params.idPerson },
        { $set: { name: req.body.name, edad: req.body.edad } },
        function (err, person) {
            if (err)
                res.send(err);

            // Obtine y devuelve todas las personas tras crear una de ellas
            Person.find(function (err, person) {
                if (err)
                    res.send(err);
                res.json(person);
            });
        });
};

var borrar = function (req, res) {
    Person.remove({ _id: req.params.idPerson }, function (err, person) {
        if (err)
            res.send(err);
        else if (!person.result.n)
            res.json("No existe esta persona");
        else {
            Person.find(function (err, person) {
                if (err)
                    res.send(err);
                all(req, res);
            });
        }
    });
};

module.exports = {
    all: all,
    create: create,
    get: get,
    delete: borrar,
    update: update
}