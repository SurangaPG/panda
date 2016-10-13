'use strict'
import gulp from 'gulp'
import browserSync from 'browser-sync'
import * as conf from './_conf'

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
  // @todo: This should be a separate file or function … but just to quick fix this.
  gulp.watch('templates/**/*.twig', () => {
    $.util.log(`A ${$.util.colors.bold.red('*.html.twig')} file has been changed.`)
    browserSync.reload()
  })
})
