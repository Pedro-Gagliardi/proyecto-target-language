var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

var connection = require('./models/bd');

var session = require('express-session');

require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Select
// connection.query('select * from alumnos').then(function(resultados) {
//   console.log(resultados);
// });

// // Insert
// var obj = {
//   nombre: 'Manuela',
//   apellido: 'Grand',
//   edad: 25,
//   mail: 'manugrand811@gmail.com'
// };

// connection.query('insert into alumnos set ?', [obj]).then(function(resultados) {
//   console.log(resultados);
// });

app.use(session({
  secret: 'target1language2',
  resave: false,
  saveUninitialized: true
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
