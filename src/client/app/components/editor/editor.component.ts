/**
 * Created by Antony on 2016-05-13.
 */

import {Component, OnInit} from '@angular/core';
import {OnActivate, Router, RouteSegment, RouteTree} from '@angular/router';
import {Location} from '@angular/common';

import {EdControllerListComponent} from './../ed-controller-list/ed-controller-list.component';
import {EdGemListComponent} from './../ed-gem-list/ed-gem-list.component';
import {EdModelListComponent} from './../ed-model-list/ed-model-list.component';
import {EdRouteListComponent} from './../ed-route-list/ed-route-list.component';
import {EdViewListComponent} from './../ed-view-list/ed-view-list.component';

import {Project} from "../../models/project";
import {ProjectService} from "../../services/project.service";

@Component({
    selector: 'my-editor',
    providers: [],
    viewProviders: [],
    templateUrl: 'app/components/editor/editor.component.html',
    styleUrls: ['app/components/editor/editor.component.css'],
    directives: [EdControllerListComponent, EdGemListComponent, EdModelListComponent, EdRouteListComponent, EdViewListComponent],
    pipes: []
})
export class EditorComponent implements OnInit {
    selectedProjectId: number;
    project: Project;
    project_not_found: boolean;
    isLoading: boolean = false;
    isSideOpen: boolean = false;
    didProjectSaved: boolean = false;

    submitted = false;
    projectForm:any;

    constructor(private _router: Router, curr: RouteSegment, private _projectService: ProjectService, private _location: Location) {
        this.selectedProjectId = +curr.getParam('id');
        this.project_not_found = false;
    }

    ngOnInit() {
        this.getProject();
    }

    getProject() {
        this.isLoading = true
        if (this.selectedProjectId) {
            console.log("this.selectedProjectId: " + this.selectedProjectId);
            this._projectService.getProjectById(this.selectedProjectId).subscribe(project => {
                console.log("Project: " + project);
                this.project = project;
                this.isLoading = false;
            }
                , error => {
                    console.log("error: " + error);
                    this.project_not_found = true;
                    this.isLoading = false;
                }
            );
        }
        else {
            this.project = new Project();
            this.isLoading = false;
        }
    }

    backClicked() {
        this._location.back();
    }

    create() {
        this._projectService.createProject(this.project).subscribe(res => {
            console.log("res: " + res);
            this.didProjectSaved = true;
            this.project.id = res.id;
            alert("Saved successfully");
        }, error => {
            console.log("error: " + error);
            alert("Couldn't save the project! Please try again later.");
        })
    }

    update() {
        this._projectService.updateProject(this.project).subscribe(res => {
            console.log("res: " + res);
            alert("Saved successfully");
        }, error => {
            console.log("error: " + error);
            alert("Couldn't update the project! Please try again later.");
        })
    }

    onSubmit() {
        if (this.didProjectSaved)
            this.update()
        else
            this.create()

        this.submitted = true;
    }

    toggleSide() {
        if (this.isSideOpen) {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        }
        else {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }
        this.isSideOpen = !this.isSideOpen;
    }
}