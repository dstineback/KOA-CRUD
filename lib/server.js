'use strict';

const koa = require('koa');
const app = koa();
const router = require('./routes/router');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/whiff_db');

app.use(router.routes());

var server = app.listen(7777, () => {
  console.log('Koa is listening to port 7777 ');
});
