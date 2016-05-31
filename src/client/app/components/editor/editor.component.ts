/**
 * Created by Antony on 2016-05-13.
 */

import {Component, OnInit} from '@angular/core';
import {RouteSegment} from '@angular/router';
import {Location} from '@angular/common';

import {EdControllerListComponent} from '../ed-controller-list/index';
import {EdGemListComponent} from '../ed-gem-list/index';
import {EdModelListComponent} from '../ed-model-list/index';
import {EdRouteListComponent} from '../ed-route-list/index';
import {EdViewListComponent} from '../ed-view-list/index';

import {Project} from '../../models/project2';
import {ProjectService} from '../../services/project.service';

@Component({
  moduleId: module.id,
  selector: 'my-editor',
  providers: [],
  viewProviders: [],
  templateUrl: 'editor.component.html',
  styleUrls: ['editor.component.css'],
  directives: [EdControllerListComponent, EdGemListComponent, EdModelListComponent, EdRouteListComponent, EdViewListComponent],
  pipes: []
})
export class EditorComponent implements OnInit {
  selectedProjectId:number;
  project:Project;
  project_not_found:boolean;
  isLoading:boolean = false;
  isSideOpen:boolean = false;
  didProjectSaved:boolean = false;

  submitted = false;

  cantSaveText:string = 'Couldn\'t save the project! Please try again later.';

  constructor(curr:RouteSegment, private _projectService:ProjectService, private _location:Location) {
    this.selectedProjectId = +curr.getParam('id');
    this.project_not_found = false;
  }

  ngOnInit() {
    this.getProject();
  }

  getProject() {
    this.isLoading = true;
    if (this.selectedProjectId) {
      console.log('this.selectedProjectId: ' + this.selectedProjectId);
      this._projectService.getProjectById(this.selectedProjectId).subscribe(project => {
          console.log('Project: ' + project);
          this.project = project;
          this.isLoading = false;
        }
        , error => {
          console.log('error: ' + error);
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
      console.log('res: ' + res);
      this.didProjectSaved = true;
      this.project.id = res.id;
      alert('Saved successfully');
    }, error => {
      console.log('error: ' + error);
      alert(this.cantSaveText);
    });
  }

  update() {
    this._projectService.updateProject(this.project).subscribe(res => {
      console.log('res: ' + res);
      alert('Saved successfully');
    }, error => {
      console.log('error: ' + error);
      alert(this.cantSaveText);
    });
  }

  onSubmit() {
    if (this.didProjectSaved)
      this.update();
    else
      this.create();

    this.submitted = true;
  }

  toggleSide() {
    if (this.isSideOpen) {
      document.getElementById('mySidenav').style.width = '0';
      document.getElementById('main').style.marginLeft = '0';
    }
    else {
      document.getElementById('mySidenav').style.width = '250px';
      document.getElementById('main').style.marginLeft = '250px';
    }
    this.isSideOpen = !this.isSideOpen;
  }
}
