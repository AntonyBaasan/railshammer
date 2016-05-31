/**
 * Created by Antony on 2016-05-13.
 */
import {Component} from '@angular/core';
import {EdPartComponent} from '../../utility/EdPartComponent';
import {EdGemDetailComponent} from '../ed-gem-detail/ed-gem-detail.component';
import {Gem} from '../../models/gem';
import {ModifyButtonsComponent} from '../modifybuttons/modifybuttons.component';

@Component({
  moduleId: module.id,
  selector: 'ed-gem-list',
  providers: [],
  viewProviders: [],
  templateUrl: 'template.html',
  styleUrls: ['template.css'],
  directives: [EdGemDetailComponent, ModifyButtonsComponent],
  pipes: []
})
export class EdGemListComponent extends EdPartComponent {

  add($event:any) {
    this.currentProject.gems = this.currentProject.gems.concat($event.gems);
  }

  delete(gem:Gem) {
    var index = this.currentProject.gems.indexOf(gem, 0);
    if (index > -1) {
      this.currentProject.gems.splice(index, 1);
    }
  }
}
