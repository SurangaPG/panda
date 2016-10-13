'use strict'
import gulp from 'gulp'
import browserSync from 'browser-sync'
import * as conf from './_conf'
import gulpLoadPlugins from 'gulp-load-plugins'
const $ = gulpLoadPlugins()

/**
 * The serve task will setup a live reload server.
 *
 * Usage: `gulp server`
 *
 * Note: Pass `--debug` to enable debug mode.
 */
gulp.task('serve', ['build'], () => {
  browserSync.init({
    proxy: `${conf.localUrl}`
  })

  gulp.watch(conf.paths.styles.src, ['styles-reload'])
  gulp.watch(conf.paths.scripts.src, ['scripts-reload'])
  gulp.watch('templates/**/*.twig', ['twig-reload']);
})
