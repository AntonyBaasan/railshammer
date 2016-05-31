import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Route} from "../../models/route";
import {Project} from "../../models/project";

@Component({
    selector: 'modify-buttons',
    providers: [],
    viewProviders: [],
    templateUrl: 'app/components/modifybuttons/template.html',
    styleUrls: ['app/components/modifybuttons/template.css'],
    directives: [],
    pipes: []
})
export class ModifyButtonsComponent {
    @Input()
    openTargetPanel:string;
    @Output()
    onEdit:EventEmitter<any> = new EventEmitter();
    @Output()
    onDelete:EventEmitter<any> = new EventEmitter();


    onClickEdit() {
        this.onEdit.emit({});
    }

    onClickDelete() {
        this.onDelete.emit({});
    }

}