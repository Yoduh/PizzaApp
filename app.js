const createError   = require('http-errors'),
      express       = require('express'),
      path          = require('path'),
      cookieParser  = require('cookie-parser'),
      logger        = require('morgan'),
      favicon       = require("serve-favicon"),
      cors          = require('cors');

const indexRouter     = require('./routes/index'),
      usersRouter     = require('./routes/users'),
      toppingsRouter  = require('./routes/toppings'),
      sizesRouter     = require('./routes/sizes'),
      ordersRouter    = require('./routes/orders');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
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

app.use(cors());
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
