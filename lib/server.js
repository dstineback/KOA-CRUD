'use strict';

const koa = require('koa');
const app = koa();
const router = require('./routes/router');

app.use(router.routes());

var server = app.listen(7777, () => {
  console.log('Koa is listening to port 7777 ');
});
