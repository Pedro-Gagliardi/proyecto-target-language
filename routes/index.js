var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
