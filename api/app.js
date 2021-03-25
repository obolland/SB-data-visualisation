var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

//var getAllDataRouter = require('./routes/getAllData');
var getMatchDataRouter = require('./routes/getMatchData');
var getPlayerDataRouter = require('./routes/getPlayerData');
var getTeamDataRouter = require('./routes/getTeamData');
var getMatchDataRouter = require('./routes/getMatchData');
var getStatDataRouter = require('./routes/getStatData');
var getStatsByIdRouter = require('./routes/getStatsById');
var getPlayerNamesByIdRouter = require('./routes/getPlayerNamesById');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//app.use('/api/getAllData', getAllDataRouter);
app.use('/api/getMatchData', getMatchDataRouter);
app.use('/api/getPlayerData', getPlayerDataRouter);
app.use('/api/getTeamData', getTeamDataRouter);
app.use('/api/getMatchData', getMatchDataRouter);
app.use('/api/getStatData', getStatDataRouter);
app.use('/api/getStatsById', getStatsByIdRouter);
app.use('/api/getPlayerNamesById', getPlayerNamesByIdRouter);

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
