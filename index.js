var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var notify      = require('gulp-notify');
var _           = require('underscore');
var Elixir      = require('laravel-elixir');

var Task = Elixir.Task;

var initializePlugin = function(){

    function notify_message(title, subtitle, message, icon){
        gulp.src('').pipe(notify({
            title: title,
            subtitle: subtitle,
            icon: __dirname + icon,
            message: message
        }));
    }


    Elixir.extend("BrowserSync",  function(options, src){

        var defaultSrc = [
            "app/**/*",
            "public/**/*",
            "resources/views/**/*"
        ];

        options = _.extend({
            proxy           : "homestead.app",
            logPrefix       : "Laravel Elixir BrowserSync",
            logConnections  : true,
            reloadOnRestart : true,
            notify          : true
        }, options);

        src = src || defaultSrc;

        new Task("BrowserSync", function(){

            var onError = function(err){
                notify.onError({
                    title       : "BrowserSync",
                    subtitule   : "BrowserSync Failed!",
                    message     : "Error : <%= error.message %>",
                    icon        : __dirname + '/../laravel-elixir/icons/fail.png'
                })(err);

                this.emit('end');
            }

            notify_message('Laravel Elixir BrowserSync', '', 'Start', '/../laravel-elixir/icons/pass.png');
            
            browserSync.init(options);

            gulp.watch(src).on("change", browserSync.reload);

        });

    });

}

module.exports = {
    init: initializePlugin
};