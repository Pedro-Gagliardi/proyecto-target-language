var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var novedadesModel = require('../models/novedadesModel');
var cloudinary = require('cloudinary').v2;

/* GET home page. */
router.get('/', async function(req, res, next) {

  var novedades = await novedadesModel.getNovedades();

  novedades = novedades.splice(0, 5);

  novedades = novedades.map(novedad => {
    if (novedad.img_id) {
        const imagen = cloudinary.url(novedad.img_id, {
            width: 80,
            height: 80,
            crop: 'fill'
        });
        return {
            ...novedad,
            imagen
        }
    } else {
        return {
            ...novedad,
            imagen: '/images/noimage.png'
        }
    }
});
  
  res.render('index', {
    novedades
  });
});


router.post('/', async(req, res, next) => {

  var nombre = req.body.nombre;
  var email = req.body.email;
  var mensaje = req.body.mensaje;

  console.log(req.body);

  var obj = {
    to: 'pedroegagliardi@gmail.com',
    subjet: 'Nuevo ontacto desde la web',
    html: nombre + ' se contactó a través de la web y quiere más información a este correo: ' + email + 
    '. <br> Además, hizo este comentario: ' + mensaje + '.'
  }

  var transport = nodemailer.createTransport ({
    host: process.env.SMTP_HOST,
    port: 587,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  var info = await transport.sendMail(obj);

  res.render('contacto', {
    message: 'Mensaje enviado correctamente'
  });
})

module.exports = router;
