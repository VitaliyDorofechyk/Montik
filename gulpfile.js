var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
function css_style(done) {
    gulp.src( './scss/style.scss' )
        .pipe(sourcemaps.init())
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 version'],
            cascade: false
        }))
        .pipe(concat('style.css'))
        .pipe(rename({suffix: '.min'}) )
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest( './css/' ) )
        .pipe(browserSync.stream());
    done();
}
function sync(done) {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 3000
    })
    done();
    }
function browserReload(done) {
    browserSync.reload();
    done();
}
function print(done) {
    console.log("HI!");
    done();
}

function watchSass() {
gulp.watch("./scss/style.scss", css_style);
}
function watchFiles() {
    gulp.watch("./scss/style.scss", css_style);
    gulp.watch("./**/*.html", browserReload);
    gulp.watch("./**/*.php", browserReload);
    gulp.watch("./**/*.js", browserReload);
    }



gulp.task('default', gulp.parallel(sync, watchFiles));
gulp.task(css_style);
//function printHello (done) {
  //  console.log("Hello world!");
    //done();}
//gulp.task(printHello); можно вызывать так
//exports.default = printHello; можно вызывать так