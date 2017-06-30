var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/', function (req, res) {
    res.redirect('/burgers');
});


router.get("/burgers", function (req, res) {
    db.Burgers.findAll({}).then(function (data) {
        var hbsObject = { "burgers": data };
        res.render('index', hbsObject);
    });
});

router.post('/', function(req, res) {
    db.Burgers.create({ burger_name: req.body.bname }).then(function(data) {
        res.redirect('/burgers')
    })
});

//     devoured: req.body.devoured
//   }, condition, function() {
//     res.redirect("/");

router.put('/:id', function(req, res) {
    db.Burgers.update({ devoured: req.body.devoured }, {
        fields: ['devoured'],
        where: { id: req.params.id }
    }).then(function(data) {
    	res.redirect('/burgers')
    });
});


// var burgers = require('../models/burgers.js');

// router.get('/', function (req, res) {
//     burgers.selectAll(function (data) {
//         var hbsObject = {
//             burgerss: data
//         };
//         console.log(hbsObject);
//         res.render("index", hbsObject);
//     });
// });

// router.post("/", function (req, res) {
//     burgers.create([
//         "burgers_name"
//     ], [
//             req.body.bname,
//         ], function () {
//             res.redirect("/");
//         });
// });

// router.put("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burgers.update({
//     devoured: req.body.devoured
//   }, condition, function() {
//     res.redirect("/");
//   });
// });

module.exports = router;