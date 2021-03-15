/**
 * Part of fusion project.
 *
 * @copyright  Copyright (C) 2021 .
 * @license    __LICENSE__
 */

import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import eol from 'gulp-eol';
import filter from 'gulp-filter';
import rename from 'gulp-rename';
import rewriteCSS from 'gulp-rewrite-css';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import { dest as toDest } from '../base/base.js';
import { logError } from '../utilities/error.js';
import Processor from './processor.js';

export default class CssPreProcessor extends Processor {
  static defaultOptions = {
    sourcemap: true,
    autoprefixer: true,
    minify: true,
    rebase: false
  };

  compile() {
    throw new Error('Please implement this method.');
  }

  doProcess(dest, options = {}) {
    this.pipe(eol('\n', true))
      .pipeIf(options.sourcemap, () => sourcemaps.init())
      .pipeIf(dest.merge, () => concat(dest.file));

    this.compile();

    this.pipeIf(
      options.rebase && !dest.samePosition,
      () => rewriteCSS({ destination: dest.path })
      )
      .pipeIf(
        options.autoprefixer,
        () => autoprefixer('last 3 version', 'safari 5', 'ie 8', 'ie 9').on('error', logError())
      )
      .pipeIf(
        options.sourcemap,
        () => sourcemaps.write('.')
      )
      .pipe(toDest(dest.path))
      .pipe(filter('**/*.cssProcessor'))
      .pipe(rename({ suffix: '.min' }))
      .pipeIf(options.minify, () => cleanCSS({ compatibility: 'ie11' }))
      .pipe(toDest(dest.path));
  }
}
