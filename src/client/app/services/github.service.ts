/**
 * Created by Antony on 2016-05-13.
 */
import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    constructor(private http: Http) {}

    getGistById(id: string) {
        // let url = `https://api.github.com/gists/${ id }`;

        return this.http.get(id)
            .map((res:Response) => res.text() );
            // .map((res) => res.json());
    }

    getOrg(org: string) {
        return this.makeRequest(`orgs/${org}`);
    }

    getReposForOrg(org: string) {
        return this.makeRequest(`orgs/${org}/repos`);
    }

    getRepoForOrg(org: string, repo: string) {
        return this.makeRequest(`repos/${org}/${repo}`);
    }

    private makeRequest(path: string) {
        let params = new URLSearchParams();
        params.set('per_page', '100');

        let url = `https://api.github.com/${ path }`;
        return this.http.get(url, {search: params})
            .map((res) => res.json());
    }
}
