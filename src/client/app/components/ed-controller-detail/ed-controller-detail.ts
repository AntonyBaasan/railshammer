/**
 * Created by Antony on 2016-05-14.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Controller} from "../../models/controller";
import {GithubService} from "../../services/github.service";

declare var ace: any;

@Component({
    selector: 'ed-controller-detail',
    providers: [],
    viewProviders: [],
    templateUrl: 'app/components/ed-controller-detail/template.html',
    styleUrls: ['app/components/ed-controller-detail/template.css'],
    directives: [],
    pipes: []
})
export class EdControllerDetailComponent {
    isUpdate:boolean;
    newAction:string;

    code_editor:any;

    currentController:Controller;
    originalController:Controller;

    res:any;
    resFirst:any;

    @Output()
    onSave:EventEmitter<any> = new EventEmitter();

    title:string = "Add Controller"

    constructor(private _githubService:GithubService) {
    }

    onClickCancel() {
    }

    onClickSave() {
        this.currentController.code = this.code_editor.getValue();
        if (this.isUpdate)
            this.originalController.copyMembers(this.currentController);
        else
            this.onSave.emit({controller: this.currentController});

        this.resetController();
    }

    updateGist() {
        this._githubService.getGistById(this.currentController.gist).subscribe(res => {
            this.res = res;
            this.currentController.code = res;

            this.updateCodeEditor(this.currentController.code);

        }, error =>  {console.log("error: "+error)});
    }

    updateCodeEditor(code: string){
        setTimeout(()=>{
            this.code_editor = ace.edit("code-editor");
            this.code_editor.setTheme("ace/theme/monokai");
            this.code_editor.getSession().setMode("ace/mode/ruby");
            this.code_editor.setValue(code);
        }, 500)
    }

    resetController() {
        this.currentController = new Controller();
        this.isUpdate = false;
        this.newAction = ""

        this.updateCodeEditor("");
    }

    setController(controller:Controller) {
        this.resetController();
        
        this.originalController = controller;
        this.currentController.copyMembers(controller);
        this.isUpdate = true;
        this.updateCodeEditor(this.currentController.code);
    }

    addAction(action:string) {
        if (action == "")
            return;

        if (this.currentController.actions == undefined)
            this.currentController.actions = []

        this.currentController.actions.push(action);
        this.newAction = ""
    }

    removeAction(action:string) {
        if (action == "")
            return;

        var index = this.currentController.actions.indexOf(action, 0);
        if (index > -1) {
            this.currentController.actions.splice(index, 1);
        }
    }
}