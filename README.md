# node-acousticbrainz [![Build Status](https://img.shields.io/travis/hughrawlinson/node-acousticbrainz.svg?style=flat-square)](https://travis-ci.org/hughrawlinson/node-acousticbrainz/)
A Wrapper for the AcousticBrainz API

# Documentation

Start by installing `node-acousticbrainz` in your project. You can do this with the following shell command:

`npm install --save node-acousticbrainz`

In the file that you want to use `node-acousticbrainz`, you should require it with:

`var AcousticBrainz = require('node-acousticbrainz');`

That line will vary if you're using ES2015 syntax, or an alternate module loader, but if you're doing those things you probably know how to require code in your chosen platform.


Instantiate an object:

`var ab = new AcousticBrainz();`

You can then use `ab` to fetch data from Acousticbrainz:

`ab.get('id','type',function(err,data){
  // here you have access to your data!
});`

The arguments to the `get` function, `id` and `type`, are documented in the [Acousticbrainz documentation](http://acousticbrainz.org/data)

Happy hacking!
