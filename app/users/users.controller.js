/**
 * Created by Saul Bompart on 15-11-2017.
 */
'use strict';
var User = require('./users.model');
var _ = require("lodash");


// Obtiene todos los objetos Users de la base de datos
exports.all = function (req, res){
    User.find(
        function(err, users) {
            if (err)
                res.send(err);
            var user = [];
            _.forEach(users, function (value) {
                var obj = {
                    id: value._id,
                    user: value.user,
                    mail: value.mail,
                    role: value.role,
                    password: value.password,
                    status: value.status
                };
                user.push(obj);
            });
            res.json(user); // devuelve todos los Users en JSON
        }
    );
};

exports.get = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if(err)
            res.send(err);
        var obj = {
            id: user._id,
            user: user.user,
            mail: user.mail,
            role: user.role,
            password: user.password,
            status: user.status
        };
        res.json(obj);
    });
};

// Guarda un objeto User en base de datos
exports.create = function(req, res) {
    // Creo el objeto User
    User.create(
        {
            user : req.body.user,
            mail: req.body.mail,
            role: req.body.role,
            password: req.body.password,
            status: req.body.status
        },
        function(err, user) {
            if (err)
                res.send(err);

            // Obtine y devuelve todas los Users tras crear una de ellas
            User.find(function(err, user) {
                if (err)
                    res.send(err);
                /*var user = [];
                _.forEach(user, function (value) {
                    var obj = {
                        id: value._id,
                        name: value.name,
                        edad: value.edad
                    };
                    user.push(obj);
                });*/
                res.json(user); // devuelve todas los Users en JSON
            });
        });

};

exports.update = function(req, res){
    User.update( {_id : req.params.id},
        {$set:{name : req.body.name, edad: req.body.edad}},
        function(err, user) {
            if (err)
                res.send(err);

            // Obtine y devuelve todas los Users tras crear una de ellas
            User.find(function(err, user) {
                if (err)
                    res.send(err);
                res.json(user);
            });
        });
};

exports.delete = function(req, res) {
    User.remove({_id : req.params.id}, function(err, user) {
        if (err)
            res.send(err);

        // Obtine y devuelve todas los Users tras borrar una de ellas
        User.find(function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    });
};