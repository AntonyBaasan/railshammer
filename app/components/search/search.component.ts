/**
 * Created by Antony on 2016-05-13.
 */

import {Component} from '@angular/core';
import {ProjectService} from './../../services/project.service';
import {Project} from './../../models/project';
import {Router} from '@angular/router';

@Component({
    selector: 'search-project',
    providers: [ProjectService],
    viewProviders: [],
    templateUrl: 'app/components/search/search.component.html',
    styleUrls: ['app/components/search/search.component.css'],
    directives: [],
    pipes: []
})
export class SearchComponent {
    searchResults: Project[];
    isLoading: boolean;

    constructor(private router: Router, private _projectService: ProjectService) {
    }

    searchProjects(searchText: string) {
        this.isLoading = true
        this.searchResults = null
        this._projectService.searchProjects(searchText)
            .subscribe(projects => {
                this.searchResults = projects;
                this.isLoading = false;
            },error=>{
                console.log("error: "+error);
                this.isLoading = false;
            });
    }

    openProjectInEditor(project_id: number) {

        this.router.navigate(['/editor', project_id])

    }
}