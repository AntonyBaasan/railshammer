import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
// import * as rename from 'gulp-rename';
var rename = require('gulp-rename');

import { join, sep, normalize } from 'path';
import * as slash from 'slash';

import {
  APP_BASE,
  APP_DEST,
  APP_SRC,
  CSS_DEST,
  CSS_PROD_BUNDLE,
  JS_DEST,
  JS_PROD_APP_BUNDLE,
  JS_PROD_SHIMS_BUNDLE
} from '../../config';
import { templateLocals } from '../../utils';

const plugins = <any>gulpLoadPlugins();

/**
 * After build process copy `index.html` inside prod dir and rename '200.html'.
 * (Need for surge.sh deployment - Surge need this file for ROUTER)
 */
export = () => {
  return gulp.src(join(APP_DEST, 'index.html'))
    .pipe(rename('200.html'))
    .pipe(gulp.dest(APP_DEST));
};
