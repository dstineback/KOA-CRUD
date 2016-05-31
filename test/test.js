'use strict';

const fs = require('fs');
const chai = require('chai');
const chaiHTTP = require('chai-http');
const expect = chai.expect;
chai.use(chaiHTTP);
const request = chai.request;
const koa = require('koa-router');
const router = require(__dirname + '/../lib/routes/router');


const server = require(__dirname + '/../lib/server');



describe('Testing router', () => {
  it('should test our router', () => {
    expect(router.stack[0].methods[1]).to.eql('GET');
    expect(router.stack[1].methods[0]).to.eql('POST');
    expect(router.stack[2].methods[0]).to.eql('PUT');
    expect(router.stack[3].methods[0]).to.eql('DELETE');
  });
  it('should respond with 404 to bad path', () => {
    request('localhost:7777')
    .get('/badpath')
    .end((err, res) => {
      expect(err).to.not.eql(null);
      expect(res).to.have.status(404);
      expect(res.text).to.eql('Not Found');
    });
  });
  it('should return an array', (done) => {
    request('localhost:7777')
    .get('/')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(Array.isArray(res.body)).to.be.true;
      done();
    });
  });
  it('should write to page when post request is made', (done) => {
    request('localhost:7777')
    .post('/')
    .send({})
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('Posted');
      done();
    });
  });
  it('should write to page when put request is made', (done) => {
    request('localhost:7777')
    .put('/')
    .send({})
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('Updated');
      done();
    });
  });
  it('should write to delete when request is made', (done) => {
    request('localhost:7777')
    .delete('/:id')
    .end((err, res) =>{
      expect(res.body).to.eql({});
      done();
    });
  });
});
