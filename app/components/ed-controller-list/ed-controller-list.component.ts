/**
 * Created by Antony on 2016-05-13.
 */
import {Component} from '@angular/core';

import {Project} from "../../models/project";
import {EdPartComponent} from "../../utility/EdPartComponent";
import {EdControllerDetailComponent} from "../ed-controller-detail/ed-controller-detail";
import {Controller} from "../../models/controller";
import {ModifyButtonsComponent} from "../modifybuttons/modifybuttons.component"

@Component({
    selector: 'ed-controller-list',
    providers: [],
    viewProviders: [],
    templateUrl: 'app/components/ed-controller-list/template.html',
    styleUrls: ['app/components/ed-controller-list/template.css'],
    directives: [EdControllerDetailComponent, ModifyButtonsComponent],
    pipes: []
})
export class EdControllerListComponent extends EdPartComponent {

    constructor() {
        super()
        this.editPanelName = ""
    }


    addController($event: any) {
        this.currentProject.controllers.push($event.controller);
    }

    deleteController(controller: Controller) {
        var index = this.currentProject.controllers.indexOf(controller, 0);
        if (index > -1) {
            this.currentProject.controllers.splice(index, 1);
        }
    }
}