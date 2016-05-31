/**
 * Created by Antony on 2016-05-13.
 */
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

import {Project} from './../models/project2';

@Injectable()
export class ProjectService {

    urlString: string = 'https://ratcage-api.herokuapp.com/';

    constructor(private http: Http) {
    }

    searchProjects(searchString: string) {
        // return this.makeGetRequest(`projects?search=${searchString}`);

        let url = this.urlString + `projects?search=${searchString}`;
        return this.http.get(url)
            .map((res) => res.json());
            // .map((res) => {
            //     return res.json().map((val: any) => {
            //         var project = new Project();
            //         project.parseFromJson(val);
            //         return project;
            //     })
            // });
    }

    getProjectById(id: number) {
        let url = this.urlString + `projects/${id}`;
        return this.http.get(url)
            // .map((res) => res.json());
            .map((res) => {
                var project = new Project();
                project.parseFromJson(res.json());
                return project;
            });
    }

    getAllProjectsAmount() {
        return this.makeGetRequest(`projects/count`);
    }

    createProject(project: Project) {
        project.createContentField();
        let body = JSON.stringify(project);

        return this.makePostRequest(`projects`, body);
    }

    updateProject(project: Project) {
        project.createContentField();
        let body = JSON.stringify(project);

        return this.makePutRequest(`projects/${project.id}`, body);
    }

    private makeGetRequest(path: string) {
        let url = this.urlString + path;
        return this.http.get(url)
            .map((res) => res.json());
    }

    private makePostRequest(path: string, body: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let url = this.urlString + path;
        return this.http.post(url, body, options)
            .map((res) => res.json());
    }

    private makePutRequest(path: string, body: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let url = this.urlString + path;
        return this.http.patch(url, body, options)
            .map((res) => res.json());
    }

}
