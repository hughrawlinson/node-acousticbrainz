var AcousticBrainz = require('../index');

var validMBID = "96685213-a25c-4678-9a13-abd9ec81cf35";

describe('AcousticBrainz', function() {
    var ab = new AcousticBrainz();

    it('should return a valid body for a valid <MBID>', function(done) {
        ab.get(validMBID, function(err, data) {
            should.not.exist(err);
            should.exist(data);
            done();
        });
    });
    
    it('should return a high level feature set when requested', function(done){
        ab.get({
            id:validMBID,
            type:'high-level',
        },function(err, data){
            should.not.exist(err);
            should.exist(data);
            should.exist(data.highlevel);
            done();
        });
    });
    
    it('should return a low level feature set when requested', function(done){
        ab.get({
            id:validMBID,
            type:'low-level',
        },function(err, data){
            should.not.exist(err);
            should.exist(data);
            should.exist(data.lowlevel);
            done();
        });
    });

    it('should error with an invalid MBID',function(done){
        ab.get({
            id:'invalidMBID', 
        },function(err,data){
            err.should.be.an.instanceof(Error);
            done();
        });
    });

    it('should return a count when asked',function(done){
        ab.get({
            id:validMBID,
            type:'count'
        },function(err,data){
            should.not.exist(err);
            should.exist(data);
            should.exist(data.count);
            done();
        });
    });
    // it('should return different records when queried',function(done){
    //     ab.get({
    //         id:validMBID,
    //         n:0
    //     },function(err,data){
    //         should.not.exist(err);
    //         should.exist(data);
    //         ab.get({
    //             id:validMBID,
    //             n:1
    //         },function(err,data2){
    //             should.not.exist(err);
    //             should.exist(data2);
                
    //         });
    //     });
    // });
});
