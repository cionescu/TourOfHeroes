var gulp = require('gulp');

var assetsDev = 'assets/';
var assetsProd = 'src/';

var appDev = 'dev/';
var appProd = 'app/';

var filesToMove = [
  "node_modules/es6-shim/es6-shim.min.js",
  // "node_modules/systemjs/dist/system-polyfills.js",
  "node_modules/angular2/es6/dev/src/testing/shims_for_IE.js",
  "node_modules/angular2/bundles/angular2-polyfills.js",
  "node_modules/systemjs/dist/system.src.js",
  "node_modules/rxjs/bundles/Rx.js",
  "node_modules/angular2/bundles/angular2.js",
  "node_modules/angular2/bundles/router.dev.js",
  "node_modules/angular2/bundles/http.js",
];
var cssFilesToMove = [
  "assets/vendor/bootstrap/**/*"
]

/* Mixed */
var ext_replace = require('gulp-ext-replace');

/* CSS */
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var cssnano = require('cssnano');

/* JS & TS */
var jsuglify = require('gulp-uglify');
var typescript = require('gulp-typescript');

/* Images */
var imagemin = require('gulp-imagemin');

var tsProject = typescript.createProject('tsconfig.json');

gulp.task('build-css', function () {
  return gulp.src(assetsDev + '*.scss')
    .pipe(sourcemaps.init())
    .pipe(postcss([precss, autoprefixer, cssnano]))
    .pipe(sourcemaps.write())
    .pipe(ext_replace('.css'))
    .pipe(gulp.dest(assetsProd + 'css/'));
});

gulp.task('build-ts', function () {
  return gulp.src(appDev + '**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(typescript(tsProject))
    .pipe(sourcemaps.write())
    //.pipe(jsuglify())
    .pipe(gulp.dest(appProd));
});

gulp.task('build-img', function () {
  return gulp.src(assetsDev + 'img/**/*')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest(assetsProd + 'img/'));
});

gulp.task('build-html', function () {
  return gulp.src(appDev + '**/*.html')
    .pipe(gulp.dest(appProd));
});


gulp.task('move', ['move-css'], function(cb){
  gulp.src(filesToMove, { base: './' })
    .pipe(gulp.dest(appProd + "/vendor/"));
  return cb(null);
});

gulp.task('move-css', function(cb) {
  gulp.src(cssFilesToMove)
    .pipe(gulp.dest(assetsProd + "/vendor/"));
  return cb(null);
});

gulp.task('watch', function () {
  gulp.watch(appDev + '**/*.ts', ['build-ts']);
  gulp.watch(assetsDev + 'scss/**/*.scss', ['build-css']);
  gulp.watch(assetsDev + 'img/*', ['build-img']);
});

gulp.task('default', ['move', 'build-ts', 'build-css', 'watch']);

gulp.task('build-prod', ['move', 'build-ts', 'build-css', 'build-img', 'build-html']);
