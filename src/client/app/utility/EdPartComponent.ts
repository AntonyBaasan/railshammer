/**
 * Created by Antony on 2016-05-13.
 */

import {Project} from '../models/project';
import {Input} from '@angular/core';

export class EdPartComponent {
  @Input()
  currentProject:Project;

  editPanelName:string;
}
