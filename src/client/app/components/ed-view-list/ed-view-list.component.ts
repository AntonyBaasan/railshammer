/**
 * Created by Antony on 2016-05-13.
 */
import {Component} from '@angular/core';
import {EdPartComponent} from "../../utility/EdPartComponent";
import {EdViewDetailComponent} from "../ed-view-detail/ed-view-detail.component";
import {View} from "../../models/view";
import {ModifyButtonsComponent} from "../modifybuttons/modifybuttons.component"

@Component({
    selector: 'ed-view-list',
    providers: [],
    viewProviders: [],
    templateUrl: 'app/components/ed-view-list/template.html',
    styleUrls: ['app/components/ed-view-list/template.css'],
    directives: [EdViewDetailComponent, ModifyButtonsComponent],
    pipes: []
})

export class EdViewListComponent extends EdPartComponent {

    addView($event: any) {
        this.currentProject.views.push($event.view);
    }

    deleteView(view: View) {
        var index = this.currentProject.views.indexOf(view, 0);
        if (index > -1) {
            this.currentProject.views.splice(index, 1);
        }
    }
}