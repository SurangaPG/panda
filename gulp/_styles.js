'use strict'
import gulp from 'gulp'
import browserSync from 'browser-sync'
import * as conf from './_conf'
import gulpLoadPlugins from 'gulp-load-plugins'
const $ = gulpLoadPlugins()

/**
 * Compile the SASS files into CSS.
 */
let buildStyles = () => {
  $.util.log("🤘🏻  Compile all the stylesheets")

  return gulp.src(conf.paths.styles.src)
  .pipe($.if(conf.debugMode, $.sourcemaps.init()))
    .pipe($.sassGlob())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      includePaths: [
        'bower_components/bootstrap/scss'
      ]
    }).on('error', $.sass.logError))
    .pipe($.cssnano({
      autoprefixer: { browsers: ['last 2 versions', 'IE 10', 'IE 11', 'Firefox >= 20'], add: true }
    }))
    .pipe($.if(conf.debugMode, $.sourcemaps.write('.')))
    .pipe(gulp.dest(conf.paths.styles.dist))
}

/**
 * The style task will compile the SASS into CSS.
 *
 * Usage: `gulp styles`
 *
 * Note: Pass `--debug` to enable debug mode.
 */
gulp.task('styles', ['clean'], () => {
  return buildStyles()
})

/**
 *  The style task for browserSync live reloading.
 */
gulp.task('styles-reload', () => {
  return buildStyles()
    .pipe(browserSync.stream())
})
