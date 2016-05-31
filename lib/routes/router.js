'use strict';

const router = module.exports = exports = require('koa-router')();
const bodyParser = require('koa-body')({multipart:true});
const WhiffWhaffPlayer = require(__dirname + '/../../schema/whiffWhaff.js');


router.get('/', function*(next){
  this.body = yield WhiffWhaffPlayer.find({});
});

router.post('/', bodyParser, function*(next){
  //this.body = 'Response from POST';
  let body = this.request.body;
  let oldChum = new WhiffWhaffPlayer({
    name:body.name,
    wins:body.wins,
    losses:body.losses,
    specialSkill:body.specialSkill
  });
  oldChum.save()
  this.body = 'Posted'
});

router.put('/', bodyParser, function*(next){
  this.body = 'Updated';
  let _id = this.request.body._id;
  WhiffWhaffPlayer.findOneAndUpdate({_id}, this.request.body, ()=>{
    console.log('good put');
  })
});

router.del('/:id', function*(next){
  let _id = this.params.id;
  WhiffWhaffPlayer.findOneAndRemove({_id}, ()=>{
    console.log('deleted')
  })
  this.body = 'Response from DELETE';
});
