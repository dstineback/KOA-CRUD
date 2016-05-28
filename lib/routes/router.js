'use strict';

const koa = require('koa');
const route = require('koa-route');
const app = koa();

app.use(route.get('/', function *() {
  this.body = 'get';
}));

app.use(route.get('/:id', function*(:id){
  this.body = 'Get id: ' + id;
}));

app.use(route.post('/',function*(){
  this.body = 'Post'
}));

app.use(route.put('/:id', function*(id){
  this.body = 'Put id: ' + id;
}));

app.use(route.delete('/:id', function*(id){
  this.body = 'Delete id: ' + id;
}));
