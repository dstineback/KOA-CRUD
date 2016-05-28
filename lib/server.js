'use strict';

const koa = require('koa');
const app = koa();


app.use(function *() {
  this.body = 'Hello world';
});

var server = app.listen(7777, () => {
  console.log('Koa is listening to port 7777 ');
});
