// gulpfile.js
const gulp = require ('gulp');
const sass = require ('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');


// Compressão de Imagens
function comprimeImagens() {
  return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}


// Comprimir JavaScript
function comprimeJavaScript () {
  return gulp.src('./source/scripts/*.js')
  .pipe(uglify())
  .pipe(obfuscate())
  .pipe(gulp.dest('./build/scripts'))
}


// Compilar SASS 
function compilaSass () {
  return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('.maps'))
    .pipe(gulp.dest('.build/styles'));
}

// Assistir mudanças nos arquivos
exports.default = function () {
  gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
  gulp.watch('./source/cripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJavaScript));
  gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens));
}

