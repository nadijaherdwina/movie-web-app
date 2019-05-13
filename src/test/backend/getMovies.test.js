const chai = require('chai');  
const expect = chai.expect;
const chaihttp = require('chai-http')
const app = require('../../api/getMovies');

chai.use(chaihttp);
  
describe('get movies testing', ()=>{
    it('should return movie with title "Shazam!" when fetching now playing movies page 1', function(done) {
        chai.request(app)
        .post('/get-now-playing-movies')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send({page: '1'})
        .end(function(err, res){
            expect(res).to.have.status(200);
            expect(typeof res).to.equal('object');
            expect(res.body.data.results[0].title).to.equal('Shazam!');
            done();
        });	
    }).timeout(10000);

    it('should return movie with title "Mamma Mia!" when id passed is 11631', function(done){
        chai.request(app)
        .post('/get-detail-movies')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send({id: '11631'})
        .end(function(err, res){
            expect(res).to.have.status(200);
            expect(typeof res).to.equal('object');
            expect(res.body.data.title).to.equal('Mamma Mia!');
            done();
        });	
    }).timeout(10000);

    it('should return a movie with title "Joe Dirt" which is similar to movie with id = 11631', function(done){
        chai.request(app)
        .post('/get-related-movies')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send({id: '11631'})
        .end(function(err, res){
            expect(res).to.have.status(200);
            expect(typeof res).to.equal('object');
            expect(res.body.data.results[0].title).to.equal('Joe Dirt');
            done();
        });	
    }).timeout(10000);
});
