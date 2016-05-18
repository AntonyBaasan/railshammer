import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';
import {ROUTER_PROVIDERS} from '@angular/router';
import {HTTP_PROVIDERS}    from '@angular/http';
import {Location} from '@angular/common';

import {NavBarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {EditorComponent} from './components/editor/editor.component';
import {SearchComponent} from './components/search/search.component';
import {DocsComponent} from './components/docs/docs.component';

import {ProjectService} from "./services/project.service";
import {GithubService} from "./services/github.service";
import {RubyGemsService} from "./services/rubygems.service";

@Component({
    selector: 'my-app',
    template: `
    <my-nav-bar><my-nav-bar>
    `,
    directives: [ROUTER_DIRECTIVES, NavBarComponent],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, Location, ProjectService, GithubService, RubyGemsService]
})
@Routes([
    {path: '/home', component: HomeComponent},
    {path: '/editor/:id', component: EditorComponent},
    {path: '/editor', component: EditorComponent},
    {path: '/search', component: SearchComponent},
    {path: '/docs', component: DocsComponent},
    {path: '/', component: HomeComponent}
])
export class AppComponent {
}