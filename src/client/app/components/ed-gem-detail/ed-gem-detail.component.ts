/**
 * Created by Antony on 2016-05-14.
 */


import {Component, Input, Output, EventEmitter} from '@angular/core';
import {View} from "../../models/view";
import {GithubService} from "../../services/github.service";
import {Gem} from "../../models/gem";
import {RubyGemsService} from "../../services/rubygems.service";
import 'rxjs/add/operator/map';

declare var ace: any;

@Component({
    selector: 'ed-gem-detail',
    providers: [],
    viewProviders: [],
    templateUrl: 'app/components/ed-gem-detail/template.html',
    styleUrls: ['app/components/ed-gem-detail/template.css'],
    directives: [],
    pipes: []
})
export class EdGemDetailComponent {

    selectedGems: Gem[];
    foundResults: Gem[];
    textSearch: string;

    searching: boolean = false;

    @Output()
    onSave: EventEmitter<any> = new EventEmitter();

    title: string = "Find Gems"

    constructor(private _rubyGemsService: RubyGemsService) {
    }

    onClickCancel() {
    }

    onClickSave() {
        this.onSave.emit({ gems: this.selectedGems });

        this.reset();
    }

    reset() {
        this.selectedGems = []
        this.foundResults = undefined
        // this.textSearch = ""
    }

    searchGems(searchText: string) {
        this.searching = true
        this.foundResults = []
        this._rubyGemsService.searchGems(searchText).subscribe(
            results => {
                this.foundResults = results.map(function (item: any, index: number) {
                    var gem = new Gem();
                    gem.name = item.name;
                    gem.version = item.version;
                    return gem;
                });
                this.searching = false
            },
            error => { 
                console.log("error: " + error)
                this.searching = false 
            }
        );
    }
    
    select(gem:Gem)
    {
        var gemAlreadyExist = this.selectedGems.find(item=>item.name == gem.name);
        if (!gemAlreadyExist) {
            this.selectedGems.push(gem);
        }
    }
}