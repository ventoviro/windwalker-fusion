/**
 * Part of fusion project.
 *
 * @copyright  Copyright (C) 2021 .
 * @license    __LICENSE__
 */

import CssPreProcessor from './css-pre-processor.js';
import { default as gulpSass } from 'gulp-sass'

export default function sassProcessor(source, dest, options = {}) {
  return new SassProcessor(source).process(dest, options);
}

export class SassProcessor extends CssPreProcessor {
  compile() {
    this.pipe(
      gulpSass({ style: 'expanded' })
        .on('error', gulpSass.logError)
    );
  }
}
