var AcousticBrainz = require('../index');

var validMBID = "96685213-a25c-4678-9a13-abd9ec81cf35";

describe('AcousticBrainz', function() {
    var ab = new AcousticBrainz();

    it('should return a valid body for a valid <MBID>', function(done) {
        ab.get(validMBID, function(err, data) {
            should.not.exist(err);
            should.exist(data);
            console.log(data);
            done();
        });
    });
});
