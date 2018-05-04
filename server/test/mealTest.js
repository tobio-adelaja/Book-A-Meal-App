import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../app';

const should = chai.should();

chai.use(chaiHttp);

describe('Meals', () => {
  describe('GET /meals', () => {
    it('it should GET all the available meals on', (done) => {
      chai.request(app)
        .get('/api/v1/meals')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  describe('POST /meals', () => {
    it('it should add a new meal', (done) => {
      chai.request(app)
        .post('/api/v1/meals')
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

  describe('PUT /meals/:id', () => {
    it('it should update an existing meal', (done) => {
      chai.request(app)
        .put('/api/v1/meals/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.should.be.a('object');
          res.body.should.have.property('success');
          done();
        });
    });
  });

  describe('DELETE /meals/:id', () => {
    it('it should delete an exisiting meal', (done) => {
      chai.request(app)
        .delete('/api/v1/meals/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.should.be.a('object');
          res.body.should.have.property('success');
          done();
        });
    });
  });
});
