/**
 * Created by Antony on 2016-05-14.
 */

import {Controller} from "./controller";

export class Route {
    path: string;
    controller: Controller;
    action: string;
    isRoot: boolean;

    copyMembers(other: Route) {
        this.path = other.path;
        this.controller = other.controller;
        this.action = other.action;
        this.isRoot = other.isRoot;
    }
    
    parseFromJson(json: any){
        this.path = json.path;
        this.controller = json.controller;
        this.action = json.action;
        this.isRoot = json.isRoot;
        return this;
    }
    
    toString(){
        return `'${this.path}' => '${this.controller?this.controller.name+"/"+this.action:''}`;
    }

}