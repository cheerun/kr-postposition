let gulp = require('gulp')
let babel = require('gulp-babel')
let uglify = require('gulp-uglify')
let sourcemaps = require('gulp-sourcemaps')
let rename = require('gulp-rename')
let runSequence = require('run-sequence')

let Server = require('karma').Server

gulp.task('test', (cb) => {
  return new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, cb).start()
})

gulp.task('build', () => {
  return gulp.src('origin.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(rename('kr-postposition.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('.'))
})

gulp.task('build.min', () => {
  return gulp.src('origin.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename('kr-postposition.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('.'))
})

gulp.task('build.all', (cb) => {
  runSequence(
    'test',
    ['build', 'build.min'],
    cb
  )
})