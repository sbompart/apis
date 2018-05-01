/**
 * Created by scbr_ on 22-07-2017.
 */
'use strict';
var async = require("async");

// Obtiene todos los objetos Heroes de la base de datos
const all = async (req, res) => {
    const a = parseInt(req.headers.a);
    const b = parseInt(req.headers.b);

    /* Version de [] */
    /* let stack = [];

    const one = (callback) => {
        console.log("1");
        setTimeout(function() {
            callback("ERRRO", null);
        }, 3000);
    }

    const two = (callback) => {
        console.log("2");
        setTimeout(function() {
            callback(null, a*b);
        }, 1000);
    }

    const three = (callback) => {
        console.log("3");
        callback(null, a-b);
    }

    stack.push(one);
    stack.push(two);
    stack.push(three);

    async.parallel(stack, (err, results) => {
        console.log("------", err, results)
        if(err)
            return res.status(500).json("error");
        return res.status(200).json(results);
    }); */

    /* Version de {} */
    let stack = {};

    stack.getUserName = (callback) => {
        const userName = 'Saul';
        callback(null, userName);
    };

    stack.getAge = (callback) => {
        const userAge = 30;
        callback(true, userAge);
    };

    stack.getGender = (callback) => {
        const userGender = 'Male';
        callback(null, userGender);
    };

    async.parallel(stack, (err, results) => {
        console.log("------", err, results)
        if (err)
            return res.status(500).json("error");
        return res.status(200).json(results);
    });

};

module.exports = { all };