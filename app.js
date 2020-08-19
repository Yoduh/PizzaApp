const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const toppingsRouter = require('./routes/toppings');
const sizesRouter = require('./routes/sizes');
const ordersRouter = require('./routes/orders');
require('dotenv').config();
// Database
const db = require('./config/database');

//test db
db.authenticate()
  .then(() => console.log('database connected'))
  .catch(err => console.log('error: ' + err));

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.use(favicon(path.join(__dirname, "client/build", "favicon.ico")));
}

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/toppings', toppingsRouter);
app.use('/sizes', sizesRouter);
app.use('/orders', ordersRouter);

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
