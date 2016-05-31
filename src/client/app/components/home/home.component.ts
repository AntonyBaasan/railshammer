/**
 * Created by Antony on 2016-05-13.
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'home-page',
  providers: [],
  viewProviders: [],
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [],
  pipes: []
})
export class HomeComponent {


  description = "Visual rails application editor"

  constructor(private router:Router) {
  }

  onCreateButton() {
    this.router.navigate(['/editor'])
  }

  onBrowseButton() {
    this.router.navigate(['/search'])
  }

  onDocsButton() {
    this.router.navigate(['/docs'])
  }
}
