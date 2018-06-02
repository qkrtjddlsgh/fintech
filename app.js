var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var CheckLogin = require('./routes/CheckLogin');
var CheckReg = require('./routes/CheckReg');
var GetNote = require('./routes/GetNote');
var MakeNote = require('./routes/MakeNote');
var FindNote = require('./routes/FindNote');
var GetReward = require('./routes/GetReward');
var MakeReward = require('./routes/MakeReward');
var GetInfo = require('./routes/GetInfo');
var MakeInfo = require('./routes/MakeInfo');
var GetSchedule = require('./routes/GetSchedule');
var MakeReserve = require('./routes/MakeReserve');

var app = express();

// mongodb connection
var mongoose = require('mongoose');

// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost/fintech_db');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/CheckLogin', CheckLogin);
app.use('/CheckReg', CheckReg);
app.use('/GetNote', GetNote);
app.use('/MakeNote', MakeNote);
app.use('/FindNote', FindNote);
app.use('/GetReward', GetReward);
app.use('/MakeReward', MakeReward);
app.use('/GetInfo', GetInfo);
app.use('/MakeInfo', MakeInfo);
app.use('/GetSchedule', GetSchedule);
app.use('/MakeReserve', MakeReserve);

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
