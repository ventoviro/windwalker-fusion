/**
 * Part of fusion project.
 *
 * @copyright  Copyright (C) 2021 .
 * @license    __LICENSE__
 */

import { babelBasicOptions } from '../utilities/babel.js';
import { logError } from '../utilities/error.js';
import { merge } from '../utilities/utilities.js';
import { JsProcessor } from './js-processor.js';

let gulpBabel;

try {
  gulpBabel = (await import('gulp-babel')).default;
} catch (e) {
  const chalk = (await import('chalk')).default;
  console.error(chalk.red(e.message));
  console.error(
    `\nPlease run ${chalk.yellow("yarn add gulp-babel @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/plugin-proposal-optional-chaining @babel/preset-env")} first.`
  );
  process.exit(255);
}

export default function babel(source, dest, options = {}) {
  return new BabelProcessor(source, options).process(dest);
}

export class BabelProcessor extends JsProcessor {
  prepareOptions(options) {
    const babelOptions = babelBasicOptions();

    options = merge(
      {
        babel: babelOptions
      },
      super.prepareOptions(options)
    );

    switch (options.module) {
      case 'umd':
        babelOptions.addPlugin('@babel/plugin-transform-modules-umd');
        break;

      case 'amd':
        babelOptions.addPlugin('@babel/plugin-transform-modules-amd');
        break;

      case 'systemjs':
      case true:
        babelOptions.addPlugin('@babel/plugin-transform-modules-systemjs');
        break;
    }
    
    if (options.targets) {
      babelOptions.options.presets[0][1].targets = options.targets;
    }

    return options;
  }

  compile(dest, options) {
    return this.pipe(
      gulpBabel(options.babel.get()).on('error', logError(e => console.log(e.codeFrame)))
    );
  }
}
