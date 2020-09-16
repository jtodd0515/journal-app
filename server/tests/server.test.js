const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe } = require('mocha');
const should = chai.should(); // Required for res.should chaining
const request = require('supertest');

let server;

chai.use(chaiHttp);

describe('server - ', () => {
  beforeEach(() => {
    server = require('../server');
  });
  afterEach(() => {
    server.close();
  });

  // There is a coverage bug in istanbul, this should cover root route
  it('should serve public html file', async () => {
    request(server)
      .get('/')
      .expect('Content-Type', /html/)
      .end((err, res) => {
        res.should.have.status(200);
      });
  });

  it('should send 404 on undefined route', async () => {
    request(server)
      .get('/fake-route')
      .end((err, res) => {
        res.text.should.equal('That\'s a 404 folks...')
        res.should.have.status(404);
      });
  });
});
