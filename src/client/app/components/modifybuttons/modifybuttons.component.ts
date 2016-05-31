import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'modify-buttons',
  providers: [],
  viewProviders: [],
  templateUrl: 'template.html',
  styleUrls: ['template.css'],
  directives: [],
  pipes: []
})
export class ModifyButtonsComponent {
  @Input()
  openTargetPanel:string;
  @Output()
  onEdit:EventEmitter<any> = new EventEmitter();
  @Output()
  onDelete:EventEmitter<any> = new EventEmitter();

  onClickEdit() {
    this.onEdit.emit({});
  }

  onClickDelete() {
    this.onDelete.emit({});
  }
}
