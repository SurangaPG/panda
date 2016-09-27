'use strict'
import { argv } from 'yargs'

/* Check if debug mode is enabled */
export const debugMode = argv.debug;

/* The local server url */
export const localUrl = 'panda.local';

/* The source and destination folder */
export const dirs = {
  src: 'src',
  dist: 'dist'
}

/* The paths of the different assets */
export const paths = {
  styles: {
    src: `${dirs.src}/sass/**/*.scss`,
    dist: `${dirs.dist}/css`
  },
  scripts: {
    src: `${dirs.src}/js/**/*.js`,
    dist: `${dirs.dist}/js`
  }
}
