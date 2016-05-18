/**
 * Created by Antony on 2016-05-13.
 */

import {Controller} from "./controller";
import {Route} from "./route";
import {View} from "./view";
import {Model} from "./model";
import {Gem} from "./gem";

export class Project {
    id: number;
    name: string;
    description: string;
    author: string;
    author_url: string;

    content: string;

    routes: Route[];
    controllers: Controller[];
    views: View[];
    models: Model[];
    gems: Gem[];

    constructor() {
        this.routes = [];
        this.controllers = [];
        this.views = [];
        this.models = [];
        this.gems = [];
    }

    parseFromJson(jsonObject: any) {
        this.id = jsonObject.id;
        this.name = jsonObject.name;
        this.description = jsonObject.description;
        this.author = jsonObject.author;
        this.author_url = jsonObject.author_url;

        this.content = jsonObject.content;

        // TODO: convert from content        
        this.routes = [];
        this.controllers = [];
        this.views = [];
        this.models = [];
        this.gems = [];


        this.parseContentField();

        return this;
    }

    createContentField() {
        this.content = "";
        this.content = JSON.stringify(this);
    }

    parseContentField() {
        console.log("content: " + this.content);
        if (this.content == null || this.content == "")
            return;

        var jsonContent: any = JSON.parse(this.content);

        if (jsonContent.routes)
            this.routes = jsonContent.routes.map((val: any) => { return new Route().parseFromJson(val); });
        if (jsonContent.controllers)
            this.controllers = jsonContent.controllers.map((val: any) => { return new Controller().parseFromJson(val); });
        if (jsonContent.views)
            this.views = jsonContent.views.map((val: any) => { return new View().parseFromJson(val); });
        if (jsonContent.models)
            this.models = jsonContent.models.map((val: any) => { return new Model().parseFromJson(val); });
        if (jsonContent.gems)
            this.gems = jsonContent.gems.map((val: any) => { return new Gem().parseFromJson(val); });
    }


    toString() {
        return "id: " + this.id
            + ", name: " + this.name
            + ", description: " + this.description
            + ", author: " + this.author
            + ", author_url: " + this.author_url
            + ", content: " + this.content
            + ", routes: " + this.routes.length
            + ", controllers: " + this.controllers.length
            + ", views: " + this.views.length
            + ", models: " + this.models.length
            + ", gems: " + this.gems.length
    }
}