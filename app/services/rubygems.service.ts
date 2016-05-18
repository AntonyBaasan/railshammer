/**
 * Created by Antony on 2016-05-13.
 */
import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RubyGemsService {

    constructor(private http:Http) {
    }

    searchGems(searchString:string) {
        let url = `https://crossorigin.me/https://rubygems.org/api/v1/search.json?query=${ searchString }`;

        return this.http.get(url)
            .map((res:Response) => res.json() );
            // .map((res) => res.json());
    }
}