import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
const should = chai.should();
const expect = chai.expect();

chai.use(chaiHttp);

describe('Orders', () => {
	describe('GET /orders', () => {
		it('it should display all orders', (done)=> {
		    chai.request(server)
		    .get('/api/v1/orders')
		    .end((err, res) => {
		        res.should.have.status(200);
		        res.should.be.json;
		        res.should.be.a('object');
		        res.body.should.be.a('array');
				done();
		    });
		});
	}); 

	describe('POST /orders', () => {
		it('it should add a new order', (done) => {
		    chai.request(server)
		    .post('/api/v1/orders')
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

	describe('PUT /order/:id', () => {
		it('it should update an existing order', (done) => {
		    chai.request(server)
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