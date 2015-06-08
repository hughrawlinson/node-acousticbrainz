(function(){
    var request = require('request');
    module.exports = function AcousticBrainz(){
        var self = this;
        this.baseUri = "http://acousticbrainz.org/";
        this.get = function(){
            var params = {};
            if (arguments.length === 2 && typeof arguments[0] === "object"){
                try{
                    params.type = arguments[0].type;
                    params.id = arguments[0].id;
                    params.cb = arguments[1];
                    if(arguments[0].n){
                        params.n = arguments[0].n;
                    }
                } catch(e){
                    throw new Error('Invalid parameters');
                }
            } else if(arguments.length ===2){
                params.id = arguments[0];
                params.type = "high-level";
                params.cb = arguments[1];
            } else if (arguments.length === 3){
                params.id = arguments[0];
                params.type = arguments[1];
                params.cb = arguments[2];
            } else{
                throw new Error('Invalid parameters');
            }
            var url = self.baseUri+params.id+'/'+params.type;
            if(params.n){
                url = url + '?n=' + params.n;
            }
            request.get(url, function(err,res,body){params.cb(err,body)});
        }
    }
}());