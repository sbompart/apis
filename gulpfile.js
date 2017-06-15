/**
 * Created by Saul Bompart on 13-06-2017.
 */
var gulp       = require( 'gulp' ),
    connect = require('gulp-connect'),
    historyApiFallback = require('connect-history-api-fallback'),
    server     = require( 'gulp-develop-server' ),
    livereload = require( 'gulp-livereload' );

var options = {
    path: './server.js'
};

var serverFiles = [
    './server.js',
    './app/**/*.js',
    './angular/!**/!*.js'
 ];

gulp.task( 'server:start', function() {
    server.listen( options, livereload.listen );
});

gulp.task('server', function () {
    connect.server({
        root: './angular',
        hostname: 'http://localhost/',
        port: 2050,
        livereload: true/*,
        middleware: function (connect, opt) {
            return[historyApiFallback];
        }*/
    });
});

gulp.task('html', function () {
    gulp.src('./angular/**/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./angular/**/*.html'],['html']);
});

// If server scripts change, restart the server and then livereload.

gulp.task( 'default', [ 'server','watch' ]);
// gulp.task( 'default', [ 'server:start','watch' ]);
/*gulp.task( 'default', [ 'server:start' ], function() {

    function restart( file ) {
        server.changed( function( error ) {
            if( ! error ) livereload.changed( file.path );
        });
    }

    // gulp.watch( serverFiles ).on( 'change', restart );
});*/
