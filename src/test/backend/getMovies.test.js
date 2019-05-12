const chai = require('chai');  
const expect = chai.expect;
const chaihttp = require('chai-http')
const app = require('../../api/getMovies');

let should = chai.should();

var link = 'http://' + process.env.IP_ADDRESS + ':3000';
chai.use(chaihttp);
  
describe('get movies testing', ()=>{
    it('should return now playing movies page 1', function(done) {
        chai.request(app)
        .post('/get-now-playing-movies')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send({page: '1'})
        .end(function(err, res){
            expect(res).to.have.status(200);
            done();
        });	
    }).timeout(10000);

    it('should return detail movie with id = ', function(done){
        chai.request(app)
        .post('/get-detail-movies')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send({id: '11631'})
        .end(function(err, res){
            expect(res).to.have.status(200);
            done();
        });	
    }).timeout(10000);

    it('should return movies similar to movie with id = ', function(done){
        chai.request(app)
        .post('/get-related-movies')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send({id: '11631'})
        .end(function(err, res){
            expect(res).to.have.status(200);
            done();
        });	
    }).timeout(10000);
});
