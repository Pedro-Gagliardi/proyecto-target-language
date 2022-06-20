var express = require('express');
const { restart } = require('nodemon');
var router = express.Router();
var usuariosModel = require('../../models/usuariosModel');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('admin/novedades', { 
        layout: 'admin/layout',
        usuario: req.session.nombre // pedro
    });
});

module.exports = router;