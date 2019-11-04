const { src, dest, watch, series, parallel } = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

let browserSync = require('browser-sync').create();

var critical = require('critical');
var ncp = require("copy-paste");

function js() {
    return browserify('./src/js/main.js')
        .transform('babelify', { presets: ['@babel/preset-env'] })
        .transform('uglifyify')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(dest('./dist/js/'));
}

function css() {
    return src('./src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(autoprefixer())
        .pipe(dest('./dist/css/'));
}

function betterial() {
    return src('./src/betterial/sass/betterial.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(autoprefixer())
        .pipe(dest('./dist/betterial/css/'));
}

function dev() {
    browserSync.init({
        server: {
            baseDir: './',
        },
    });
    watch('./src/scss/**/*.scss').on('change', series(css, browserSync.reload));
    watch('./src/js/main.js').on('change', series(js, browserSync.reload));
    watch('./index.html').on('change', browserSync.reload);
}

function criticalCSS(cb){
    console.log('Hello');
    critical.generate({
        base: '.',
        src: 'index.html',
        width: 1368,
        height: 800
    },(err, output)=>{
        console.log(err);
        console.log(output);
        ncp.copy(output);
    })
    cb();
}

exports.js = js;
exports.css = css;
exports.betterial = betterial;
exports.compile = parallel(css, js);
exports.dev = dev;
exports.critical = criticalCSS;