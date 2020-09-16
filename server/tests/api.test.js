const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe } = require('mocha');
const should = chai.should(); // Required for res.should chaining
const { expect } = require('chai');
const request = require('supertest');
let server;

chai.use(chaiHttp);

describe('REST api - ', () => {
  beforeEach(() => {
    server = require('../server');
  });

  afterEach(() => {
    server.close();
  });

  it('should pass /current-time', async () => {
    request(server)
      .get('/api/current-time')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('time');
        expect(new Date(res.body.time).getDate()).equal(new Date().getDate());
      });
  });
});
