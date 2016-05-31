/**
 * Created by Antony on 2016-05-13.
 */
import {Component} from '@angular/core';
import {EdPartComponent} from '../../utility/EdPartComponent';
import {EdViewDetailComponent} from '../ed-view-detail/index';
import {View} from '../../models/view';
import {ModifyButtonsComponent} from '../modifybuttons/index';

@Component({
  moduleId: module.id,
  selector: 'ed-view-list',
  providers: [],
  viewProviders: [],
  templateUrl: 'template.html',
  styleUrls: ['template.css'],
  directives: [EdViewDetailComponent, ModifyButtonsComponent],
  pipes: []
})

export class EdViewListComponent extends EdPartComponent {

  addView($event:any) {
    this.currentProject.views.push($event.view);
  }

  deleteView(view:View) {
    var index = this.currentProject.views.indexOf(view, 0);
    if (index > -1) {
      this.currentProject.views.splice(index, 1);
    }
  }
}
