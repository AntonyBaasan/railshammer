import * as gulp from 'gulp';

var rename = require('gulp-rename');

import { join } from 'path';

import {
  APP_DEST,
} from '../../config';

/**
 * After build process copy `index.html` inside prod dir and rename '200.html'.
 * (Need for surge.sh deployment - Surge need this file for ROUTER)
 */
export = () => {
  return gulp.src(join(APP_DEST, 'index.html'))
    .pipe(rename('200.html'))
    .pipe(gulp.dest(APP_DEST));
};
