/**
 * Created by Antony on 2016-05-13.
 */
import {Component} from '@angular/core';

import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'my-nav-bar',
    providers: [],
    viewProviders: [],
    templateUrl: 'app/components/navbar/navbar.component.html',
    styleUrls: ['app/components/navbar/navbar.component.css'],
    directives: [ROUTER_DIRECTIVES],
    pipes: []
})
export class NavBarComponent {
    project_name = "Rails Hammer"
}
