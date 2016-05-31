import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Route} from '../../models/route';
import {Project} from '../../models/project2';

declare var ace:any;

@Component({
  moduleId: module.id,
  selector: 'ed-route-detail',
  providers: [],
  viewProviders: [],
  templateUrl: 'template.html',
  styleUrls: ['template.css'],
  directives: [],
  pipes: []
})
export class EdRouteDetailComponent {
  isUpdate:boolean;

  @Input()
  currentProject:Project;

  currentItem:Route;
  originalItem:Route;

  res:any;
  resFirst:any;

  @Output()
  onSave:EventEmitter<any> = new EventEmitter();

  title:string = 'Add Route';

  constructor() {
  }

  onClickCancel() {
  }

  onClickSave() {
    if (this.isUpdate)
      this.originalItem.copyMembers(this.currentItem);
    else
      this.onSave.emit({route: this.currentItem});

    this.reset();
  }

  reset() {
    this.currentItem = new Route();
    this.isUpdate = false;
  }

  setItem(route:Route) {
    this.reset();
    this.originalItem = route;
    this.currentItem.copyMembers(route);
    this.isUpdate = true;
  }
}
