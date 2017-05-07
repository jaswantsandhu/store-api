const chai = require("chai")
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app');

chai.use(chaiHttp);

describe('API test for Login', function () {
    it('should not login with no user and password', function (done) {

        chai
            .request(server)
            .post('/login')
            .end((err, res) => {
                res.body.message.should.be.a('string');
                res.body.message.should.be.eql("Invalid user or password")
                done();
            });

    });

    it('should login with user and password', function (done) {
        chai
            .request(server)
            .post('/login')
            .send({ password: 'abc', username: 'abc' })
            .end((err, res) => {
                res.body.message.should.be.a('string');
                res.body.message.should.be.eql("Succesfully Login")
                done();
            });
    });
});