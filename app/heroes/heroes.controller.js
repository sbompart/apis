/**
 * Created by scbr_ on 22-07-2017.
 */
/**
 * Created by Saul Bompart on 16-06-2017.
 */
'use strict';
var Heroes = require('./heroes.model');


// Obtiene todos los objetos Heroes de la base de datos
exports.all = function (req, res){
    Heroes.find(
        function(err, heroes) {
            if (err)
                res.send(err);
            res.json(heroes); // devuelve todas los heroes en JSON
        }
    );
};

exports.get = function (req, res) {
    Heroes.findById(req.params.idHero, function (err, hero) {
        if(err)
            res.send(err);
        res.json(hero);
    });
};

// Guarda un objeto Heroes en base de datos
exports.create = function(req, res) {

    // Creo el objeto Hero
    Heroes.create(
        {name : req.body.name,	realName: req.body.realName, favorites: req.body.favorite},
        function(err, hero) {
            if (err)
                res.send(err);

            // Obtine y devuelve todas los heroes tras crear uno de ellos
            Heroes.find(function(err, hero) {
                if (err)
                    res.send(err);
                res.json(hero);
            });
        });

};

exports.update = function(req, res){
    Heroes.update( {_id : req.params.idHero},
        {$set:{name : req.body.name, realName: req.body.realName, favorites: req.body.favorite}},
        function(err, hero) {
            if (err)
                res.send(err);

            // Obtine y devuelve todas los heroes tras crear uno de ellos
            Heroes.find(function(err, hero) {
                if (err)
                    res.send(err);
                res.json(hero);
            });
        });
};

exports.delete = function(req, res) {
    Heroes.remove({_id : req.params.idHero}, function(err, hero) {
        if (err)
            res.send(err);

        // Obtine y devuelve todas los heroes tras borrar uno de ellos
        Heroes.find(function(err, heroes) {
            if (err)
                res.send(err);
            res.json(heroes);
        });
    });
};