/**
 * Created by Saul Bompart on 13-06-2017.
 */
var gulp       = require( 'gulp' ),
    connect = require('gulp-connect'),
    server     = require( 'gulp-develop-server' ),
    livereload = require( 'gulp-livereload' );

var options = {
    path: './server.js'
};

gulp.task( 'server:start', function() {
    server.listen( options, livereload.listen );
});

gulp.task('html', function () {
    gulp.src('./public/**/*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./public/**/*.html'],['html']);
});

gulp.task( 'default', [ 'server:start','watch' ]);