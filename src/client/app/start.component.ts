/**
 * Created by ant on 5/31/2016.
 */
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';
import {ROUTER_PROVIDERS} from '@angular/router';

import {HTTP_PROVIDERS}    from '@angular/http';
import {Location} from '@angular/common';

import {HomeComponent} from './components/home/index';
import {NavBarComponent} from './components/navbar/index';
// import {EditorComponent} from './components/editor/editor.component';
// import {SearchComponent} from './components/search/search.component';
// import {AboutComponent} from 'components/about/about.component';

import {ProjectService} from "./services/project.service";
import {GithubService} from "./services/github.service";
import {RubyGemsService} from "./services/rubygems.service";

@Component({
  selector: 'sd-app',
  template: '<my-nav-bar><my-nav-bar>',
  // template: 'Hello World',
  directives: [ROUTER_DIRECTIVES, NavBarComponent],
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, Location, ProjectService, GithubService, RubyGemsService]
  // providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, Location]
})
@Routes([
  {path: '/home', component: HomeComponent},
  // {path: '/editor/:id', component: EditorComponent},
  // {path: '/editor', component: EditorComponent},
  // {path: '/search', component: SearchComponent},
  // {path: '/docs', component: AboutComponent},
  // {path: '/', component: HomeComponent}
])
export class StartComponent {
}
