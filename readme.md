## Laravel Elixir BrowserSync

![Version](https://img.shields.io/npm/v/laravel-elixir-browsersync.svg?style=flat-square)


## Install

If you use Laravel Elixir Version Below "^3.0.0". [Follow this link](https://github.com/anheru88/laravel-elixir-browser-sync)


If you use Laravel Elixir Version "^3.0.0". 

```sh
$ npm install laravel-elixir-browsersync2 --save-dev
```

## Usage

This is a simple wrapper around Laravel Elixir. Add it to your Elixir-enhanced Gulpfile. You need using Homestead, and configure your virtual machine and the domain `homestead.app`, like so: 

```javascript
var elixir = require('laravel-elixir');
var BrowserSync = require('laravel-elixir-browsersync');

elixir(function(mix) {
	BrowserSync.init();
	mix.BrowserSync();
});
```

The second use is passing options to BrowserSync, acording the documentation of [BrowserSync.io](http://www.browsersync.io/docs/options/), like the next example:

```javascript
var elixir = require('laravel-elixir');
var BrowserSync = require('laravel-elixir-browsersync');

elixir(function(mix) {
	BrowserSync.init();
	mix.BrowserSync(
	{
		proxy 			: "domain.app",
        logPrefix		: "Laravel Eixir BrowserSync",
        logConnections	: false,
        reloadOnRestart : false,
        notify 			: false
	});
});
```