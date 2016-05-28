'use strict';

const koa = require('koa');
const app = koa();


app.use(function *() {
  this.body = 'Hello world';
});

var server = app.listen(3000, () => {
  console.log('Koa is listening to port 3000 ');
});
