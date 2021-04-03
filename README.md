# Windwalker Fusion

[![npm](https://img.shields.io/npm/l/windwalker-fusion.svg)](https://www.npmjs.com/package/windwalker-fusion)
[![npm](https://img.shields.io/npm/v/windwalker-fusion.svg)](https://www.npmjs.com/package/windwalker-fusion)
[![npm](https://img.shields.io/npm/dt/windwalker-fusion.svg)](https://www.npmjs.com/package/windwalker-fusion)

Windwalker Fusion provides a clean, fluent API to run Gulp tasks for compiling your code.
Fusion supports several common CSS and JavaScript pre-processors.

## Requirement

Node.js 13 up.

## Getting Started

```bash
mkdir myapp && cd myapp
npm install @windwalker-io/fusion --save-dev
cp -r node_modules/@windwalker-io/fusion/config/fusionfile.mjs ./
```

The `fusionfile.js` is your configuration on top of Gulp. The example code is:

```js
const fusion = require('windwalker-fusion');

// The task `main`
fusion.task('main', function () {
  fusion.watch('src/scss/**/*.scss');

  fusion.sass('src/scss/**/*.scss', 'dist/app.css');
});

fusion.default(['main']);
```

package.json

```json
"scripts": {
    "build": "cross-env node_modules/.bin/gulp --gulpfile=fusionfile.mjs",
    "build:dev": "cross-env NODE_ENV=development node_modules/.bin/gulp --gulpfile=fusionfile.mjs",
    "build:prod": "cross-env NODE_ENV=production node_modules/.bin/gulp --gulpfile=fusionfile.mjs",
    "watch": "cross-env NODE_ENV=development node_modules/.bin/gulp --watch --gulpfile=fusionfile.mjs",
    "watch:reload": "cross-env NODE_ENV=development node_modules/.bin/gulp --watch --livereload --gulpfile=fusionfile.mjs"
},
```
