import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../app';

const should = chai.should();

chai.use(chaiHttp);

describe('Menu', () => {
  describe('GET /menu', () => {
    it('it should display the menu for the day', (done) => {
      chai.request(app)
        .get('/api/v1/menu')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  describe('POST /menu', () => {
    it('it should set the menu for the day', (done) => {
      chai.request(app)
        .post('/api/v1/menu')
        .end((err, res) => {
          res.should.have.status(201);
          res.should.be.json; 
          res.should.be.a('object');
          res.body.should.have.property('success');
          res.body.should.have.property('status');
          res.body.status.should.equal(201);
          done();
        });
    });
  });
});
