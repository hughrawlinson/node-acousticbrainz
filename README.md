# node-acousticbrainz [![Build Status](https://img.shields.io/travis/hughrawlinson/node-acousticbrainz.svg?style=flat-square)](https://travis-ci.org/hughrawlinson/node-acousticbrainz/)
A Wrapper for the AcousticBrainz API

So this is a library and I guess if there's a library it should be able to be used, and people should be able to read some words to make themselves understand how to make it work, so here is some...

## Dock you men tay shun

* pree wreck wizz its
  * javascript
  * node js install
  * npm
  * an understanding of the above
* step one: install node-acousticbrainz by executing `npm install --save node-acousticbrainz` in your project directory
* step two: require it in a js file `var AcousticBrainz = require('node-acousticbrainz');`
* step three: instantiate an acousticbrainz fetcher instance `var acousticbrainzfetcherinstance = new AcousticBrainz()`
* step four: get something from it `acousticbrainzfetcherinstance.get('id','type',function(error, data){console.log(data);});`
  * to know what 'id' and 'type' mean, read the [acousticbrainz documentation](http://acousticbrainz.org/data)
* now sit back, relax, and write some awesome code to use the dataz
