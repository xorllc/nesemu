'use strict'

import gulp from 'gulp'
const browserSync = require('browser-sync').create()

// TypeScript
import clone from 'clone'
import webpack from 'webpack'
import webpackStream from 'webpack-stream'
import webpackConfig from './webpack.config.babel'
import tslint from 'gulp-tslint'

// HTML
import ejs from 'gulp-ejs'
import htmlmin from 'gulp-htmlmin'

// SASS
import sass from 'gulp-sass'
import cssnano from 'gulp-cssnano'

// Unit test
const jest = require('gulp-jest').default

import plumber from 'gulp-plumber'
import del from 'del'

const ROOT_DIR = `${__dirname}`
const RES_DIR = `${ROOT_DIR}/res`
const DEST_DIR = `${ROOT_DIR}`
const SRC_TS_DIR = `${ROOT_DIR}/src`
const SRC_TS_FILES = `${SRC_TS_DIR}/**/*.ts`
const SRC_TEST_DIR = `${ROOT_DIR}/test`
const SRC_TEST_FILES = `${SRC_TEST_DIR}/**/*.spec.ts`
const RELEASE_DIR = `${ROOT_DIR}`

function convertHtml(buildTarget, dest) {
  return gulp.src([SRC_HTML_FILES,
                   '!' + SRC_HTML_DIR + '/**/_*.html'])
    .pipe(plumber())
    .pipe(ejs({buildTarget}))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
      removeAttributeQuotes: true,
    }))
    .pipe(gulp.dest(dest))
}

function lint(glob) {
  return gulp.src(glob)
    .pipe(tslint({
      configuration: 'tslint.json',
      formatter: 'prose',
    }))
    .pipe(tslint.report({
      emitError: false,
    }))
}

function buildWhenModified(glob, buildFunc) {
  gulp.watch(glob, () => {
    return buildFunc()
  })
}

gulp.task('reload', (done) => {
  browserSync.reload()
  done()
})

gulp.task('watch-reload', () => {
  gulp.watch([`${DEST_DIR}/*.html`,
              `${DEST_DIR}/**/*.js`], gulp.series(['reload']))
})

gulp.task('ts', () => {
  const config = clone(webpackConfig)
  config.mode = 'development'
  config.devtool = '#cheap-module-source-map'
  return gulp.src([`${ROOT_DIR}/index.ts`])
    .pipe(plumber())
    .pipe(webpackStream(config, webpack))
    .pipe(gulp.dest(DEST_DIR))
})

gulp.task('watch-ts', () => {
  const config = clone(webpackConfig)
  config.mode = 'development'
  config.watch = true
  config.devtool = '#cheap-module-source-map'
  gulp.src(SRC_TS_FILES, {base: SRC_TS_DIR})
    .pipe(plumber())
    .pipe(webpackStream(config, webpack))
    .pipe(gulp.dest(DEST_DIR))
})

gulp.task('lint', () => {
  return lint([SRC_TS_FILES,
               SRC_TEST_FILES,
               `!${SRC_TS_DIR}/lib.ts`])

})

gulp.task('watch-lint', () => {
  const globs = [`${SRC_TS_DIR}/**/*.ts`]
  buildWhenModified(globs,
                    () => lint(globs))
})

// Unit test.
gulp.task('test', (done) => {
  return gulp.src(SRC_TEST_DIR)
    .pipe(jest({
      "transform": {
        "^.+\\.tsx?$": "ts-jest",
      },
      "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
      "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node",
      ],
    }))
})
gulp.task('watch-test', () => {
  gulp.watch(
    [SRC_TS_FILES,
     SRC_TEST_FILES],
    gulp.series('test'))
})

//gulp.task('clean', del.bind(null, [
//  DEST_DIR,
//]))

gulp.task('watch', gulp.parallel('watch-ts', 'watch-lint', 'watch-test'))

gulp.task('build', gulp.parallel('ts', 'lint'))

gulp.task('default', gulp.series('build', gulp.parallel('watch')))

gulp.task('release-ts', () => {
  // Concatenate TypeScript into single 'index.js' file.
  const config = clone(webpackConfig)
  delete config.output.sourceMapFilename
  return gulp.src(`${ROOT_DIR}/index.ts`)
    .pipe(webpackStream(config, webpack))
    .pipe(gulp.dest(RELEASE_DIR))
})

gulp.task('release', gulp.parallel('release-ts'))
