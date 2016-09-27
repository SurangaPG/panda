'use strict'
import gulp from 'gulp'
import browserSync from 'browser-sync'
import * as conf from './_conf'

import gulpLoadPlugins from 'gulp-load-plugins'
const $ = gulpLoadPlugins()

/**
 * The clean task will clean the build directory.
 *
 * Usage: `gulp clean`
 */
gulp.task('clean', () => {
  $.util.log("😏  Let's clean the dist.")

  return gulp.src(`${conf.dirs.dist}`)
    .pipe($.clean({read: false}));
})

/**
 * The build task will compile all the assets and minify them for
 * production ready use.
 *
 * Usage: `gulp build`
 *
 * Note: Pass `--debug` to enable debug mode.
 */
gulp.task(
  'build', [
    'styles',
    'scripts'
  ]
)
