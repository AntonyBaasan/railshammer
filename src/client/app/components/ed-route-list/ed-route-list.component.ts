/**
 * Created by Antony on 2016-05-13.
 */
import {Component} from '@angular/core';
import {EdPartComponent} from "../../utility/EdPartComponent";
import {Route} from "../../models/route";
import {EdRouteDetailComponent} from "../ed-route-detail/ed-route-detail.component"
import {ModifyButtonsComponent} from "../modifybuttons/modifybuttons.component"

@Component({
    selector: 'ed-route-list',
    providers: [],
    viewProviders: [],
    templateUrl: 'app/components/ed-route-list/template.html',
    styleUrls: ['app/components/ed-route-list/template.css'],
    directives: [EdRouteDetailComponent, ModifyButtonsComponent],
    pipes: []
})
export class EdRouteListComponent extends EdPartComponent {

    add($event: any) {
        this.currentProject.routes.push($event.route);
    }

    delete(route: Route) {
        var index = this.currentProject.routes.indexOf(route, 0);
        if (index > -1) {
            this.currentProject.routes.splice(index, 1);
        }
    }

}