/**
 * Created by Antony on 2016-05-14.
 */

import {Component, Output, EventEmitter} from '@angular/core';
import {Gem} from '../../models/gem';
import {RubyGemsService} from '../../services/rubygems.service';
import 'rxjs/add/operator/map';

declare var ace:any;

@Component({
  moduleId: module.id,
  selector: 'ed-gem-detail',
  providers: [],
  viewProviders: [],
  templateUrl: 'template.html',
  styleUrls: ['template.css'],
  directives: [],
  pipes: []
})
export class EdGemDetailComponent {

  selectedGems:Gem[];
  foundResults:Gem[];

  searching:boolean = false;

  @Output()
  onSave:EventEmitter<any> = new EventEmitter();

  title:string = 'Find Gems';

  constructor(private _rubyGemsService:RubyGemsService) {
  }

  onClickCancel() {
  }

  onClickSave() {
    this.onSave.emit({gems: this.selectedGems});

    this.reset();
  }

  reset() {
    this.selectedGems = [];
    this.foundResults = undefined;
  }

  searchGems(searchText:string) {
    this.searching = true;
    this.foundResults = [];
    this._rubyGemsService.searchGems(searchText).subscribe(
      results => {
        this.foundResults = results.map(function (item:any, index:number) {
          var gem = new Gem();
          gem.name = item.name;
          gem.version = item.version;
          return gem;
        });
        this.searching = false;
      },
      error => {
        console.log('error: ' + error);
        this.searching = false;
      }
    );
  }

  select(gem:Gem) {
    var gemAlreadyExist = this.selectedGems.find(item=>item.name === gem.name);
    if (!gemAlreadyExist) {
      this.selectedGems.push(gem);
    }
  }
}
