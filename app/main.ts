/**
 * Created by Antony on 2016-05-13.
 */
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {LocationStrategy} from '@angular/common';

import {AppComponent} from './app.component';

bootstrap(AppComponent, [LocationStrategy]);
