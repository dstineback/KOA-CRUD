'use strict';

var router = module.exports = exports = require('koa-router')();

router.get('/', function*(next){
  this.body = 'Response from GET';
});

router.post('/',function*(next){
  this.body = 'Response from POST';
});

router.put('/', function*(next){
  this.body = 'Response from PUT';
});

router.del('/', function*(next){
  this.body = 'Response from DELETE';
});
