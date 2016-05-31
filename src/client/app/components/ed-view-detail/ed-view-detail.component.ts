/**
 * Created by Antony on 2016-05-14.
 */

import {Component, Input, Output, EventEmitter} from '@angular/core';
import {View} from "../../models/view";
import {GithubService} from "../../services/github.service";

declare var ace: any;

@Component({
    selector: 'ed-view-detail',
    providers: [],
    viewProviders: [],
    templateUrl: 'app/components/ed-view-detail/template.html',
    styleUrls: ['app/components/ed-view-detail/template.css'],
    directives: [],
    pipes: []
})
export class EdViewDetailComponent {
    isUpdate:boolean;

    code_editor:any;

    // @Input
    currentView:View;
    originalView:View;

    res:any;
    resFirst:any;

    @Output()
    onSave:EventEmitter<any> = new EventEmitter();

    title:string = "Add View"

    constructor(private _githubService:GithubService) {
    }

    onClickCancel() {
    }

    onClickSave() {
        this.currentView.code = this.code_editor.getValue();
        if (this.isUpdate)
            this.originalView.copyMembers(this.currentView);
        else
            this.onSave.emit({view: this.currentView});

        this.resetView();
    }

    updateGist() {
        this._githubService.getGistById(this.currentView.gist).subscribe(res => {
            this.res = res;
            this.currentView.code = res;

            this.updateCodeEditor(this.currentView.code);

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

    resetView() {
        this.currentView = new View();
        this.isUpdate = false;

        this.updateCodeEditor("");
    }

    setView(view:View) {
        this.resetView();
        this.originalView = view;
        this.currentView.copyMembers(view);
        this.isUpdate = true;
        this.updateCodeEditor(this.currentView.code);
    }
}