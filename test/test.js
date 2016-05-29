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
    expect(router.routes).to.have.property('GET');
    expect(router.routes).to.have.property('POST');
    expect(router.routes).to.have.property('PUT');
    expect(router.routes).to.have.property('DELETE');
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
  it('should return a message', (done) => {
    request('localhost:7777')
    .get('/')
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('Response from GET');
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
      expect(res.text).to.eql('Response from POST');
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
      expect(res.text).to.eql('Response from PUT');
      done();
    });
  });
  it('should write to delete when request is made', (done) => {
    request('localhost:7777')
    .delete('/')
    .end((err, res) =>{
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.text).to.eql('Response from DELETE');
      done();
    });
  });
});
