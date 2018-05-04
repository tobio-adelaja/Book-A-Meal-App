import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../app';

const should = chai.should();

chai.use(chaiHttp);

describe('Orders', () => {
  describe('GET /orders', () => {
    it('it should display all orders', (done) => {
      chai.request(app)
        .get('/api/v1/orders')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.should.be.a('object');
          done();
        });
    });
  });

  describe('POST /orders', () => {
    it('it should add a new order', (done) => {
      chai.request(app)
        .post('/api/v1/orders')
        .end((err, res) => {
          res.should.have.status(201);
          res.should.be.json;
          res.should.be.a('object');
          res.body.should.have.property('success');
          res.body.should.have.property('status');
          done();
        });
    });
  });

  describe('PUT /order/:id', () => {
    it('it should update an existing order', (done) => {
      chai.request(app)
        .put('/api/v1/orders/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.should.be.a('object');
          res.body.should.have.property('success');
          res.body.should.have.property('status');
          done();
        });
    });
  });
});
