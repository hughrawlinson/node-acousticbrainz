(function(){
    var chai = require('chai');

    global.should = chai.should();
    global.expect = chai.expect;
    global.check = function check(done, f) {
      try {
        f();
        done();
      } catch(e) {
        done(e);
      }
    };
}());