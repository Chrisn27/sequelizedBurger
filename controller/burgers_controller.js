var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/', function (req, res) {
    res.redirect('/burgers');
});


router.get('/burgers', function (req, res) {
    db.Burgers.findAll({}).then(function (data) {
        var hbsObject = { "burgers": data };
        res.render('index', hbsObject);
    });
});

router.post('/', function(req, res) {
    db.Burgers.create({ burger_name: req.body.bname }).then(function(data) {
        res.redirect('/burgers');
    })
});

router.put('/:id', function(req, res) {
    db.Burgers.update({ devoured: req.body.devoured }, {
        fields: ['devoured'],
        where: { id: req.params.id }
    }).then(function(data) {
    	res.redirect('/burgers');
    });
});

module.exports = router;