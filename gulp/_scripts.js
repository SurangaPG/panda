'use strict'
import gulp from 'gulp'
import browserSync from 'browser-sync'
import * as conf from './_conf'
import gulpLoadPlugins from 'gulp-load-plugins'
const $ = gulpLoadPlugins()

/**
 * Compile and minify the JS files.
 */
let buildScripts = () => {
  $.util.log("👻  Moving all the javascript")

  // @todo: still need to minify/ugfily the javascript …
  return gulp.src(conf.paths.scripts.src)
    .pipe($.if(conf.debugMode, $.sourcemaps.write('.')))
    .pipe($.babel({
      presets: ['es2015']
    }))
    .pipe($.if(conf.debugMode, $.sourcemaps.write('.')))
    .pipe(gulp.dest(conf.paths.scripts.dist))
}

/**
 * The script task will compile and minify the JS files.
 *
 * Usage: `gulp styles`
 *
 * Note: Pass `--debug` to enable debug mode.
 */
gulp.task('scripts', ['clean'], () => {
  return buildScripts()
})

/**
 *  The script task for browserSync live reloading.
 */
gulp.task('scripts-reload', () => {
  return buildScripts()
    .pipe(browserSync.stream())
})
