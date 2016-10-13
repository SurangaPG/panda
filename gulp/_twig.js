'use strict'

import gulp from 'gulp'
import browserSync from 'browser-sync'
import * as conf from './_conf'
import gulpLoadPlugins from 'gulp-load-plugins'
const $ = gulpLoadPlugins()

let twigReload = () => {
  $.util.log(`A ${$.util.colors.bold.red('*.html.twig')} file has been changed.`)
  browserSync.reload()
}

gulp.task('twig-reload', () => {
  return twigReload()
})
