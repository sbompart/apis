/**
 * Created by Saul Bompart on 21-11-2017.
 */
'use strict';
var Role = require('./roles.model');
var _ = require("lodash");


// Obtiene todos los objetos Roles de la base de datos
exports.all = function (req, res){
    Role.find(
        function(err, role) {
            if (err)
                res.send(err);
            var roles = [];
            _.forEach(role, function (value) {
                var obj = {
                    id: value._id,
                    role: value.role,
                    description: value.description,
                    status: value.status
                };
                roles.push(obj);
            });
            res.json(roles); // devuelve todas los Roles en JSON
        }
    );
};

exports.get = function (req, res) {
    Role.findById(req.params.id, function (err, role) {
        if(err)
            res.send(err);
        var obj = {
            id: role._id,
            role: role.role,
            description: role.description,
            status: role.status
        };
        res.json(obj);
    });
};

// Guarda un objeto Role en base de datos
exports.create = function(req, res) {
    // Creo el objeto Role
    Role.create(
        {
            role: req.body.role,
            description: req.body.description,
            status: req.body.status
        },
        function(err, role) {
            if (err)
                res.send(err);

            // Obtine y devuelve todas los Roles tras crear uno de ellos
            Role.find(function(err, role) {
                if (err)
                    res.send(err);
                /*var roles = [];
                _.forEach(role, function (value) {
                    var obj = {
                        id: value._id,
                        name: value.name,
                        edad: value.edad
                    };
                    hero.push(obj);
                });*/
                res.json(role); // devuelve todas los Roles en JSON
            });
        });

};

exports.update = function(req, res){
    Role.update( {_id : req.params.id},
        {$set:{name : req.body.name, edad: req.body.edad}},
        function(err, role) {
            if (err)
                res.send(err);

            // Obtine y devuelve todas los Roles tras crear una de ellas
            Role.find(function(err, role) {
                if (err)
                    res.send(err);
                res.json(role);
            });
        });
};

exports.delete = function(req, res) {
    Role.remove({_id : req.params.id}, function(err, role) {
        if (err)
            res.send(err);

        // Obtine y devuelve todas los Roles tras borrar una de ellas
        Role.find(function(err, role) {
            if (err)
                res.send(err);
            res.json(role);
        });
    });
};