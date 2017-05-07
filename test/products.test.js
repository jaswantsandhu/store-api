const chai = require("chai")
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app');
const jwt = require('jsonwebtoken');

chai.use(chaiHttp);

describe('API test for Login', function () {
    it('should not get product if no auth token is supplied', function (done) {

        chai
            .request(server)
            .get('/products')
            .end((err, res) => {
                res
                    .status
                    .should
                    .be
                    .eql(401);
                done();
            });

    });

    it('should get products if auth token is supplied', function (done) {

        var token = jwt.sign({
            name: 'jaswant singh',
            userType: "admin"
        }, process.env.SECRET);

        chai
            .request(server)
            .get('/products')
            .set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
                res
                    .status
                    .should
                    .be
                    .eql(200);
                res
                    .body
                    .should
                    .to
                    .be
                    .a("array");
                res
                    .body
                    .length
                    .should
                    .to
                    .eql(1);
                done();
            });

    });
});