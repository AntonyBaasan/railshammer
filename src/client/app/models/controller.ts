/**
 * Created by Antony on 2016-05-14.
 */
export class Controller {
  name:string;
  gist:string;
  code:string;
  actions:string[];

  constructor() {
    this.name = 'Empty';
    this.actions = [];
  }

  copyMembers(other:Controller) {
    this.name = other.name;
    this.gist = other.gist;
    this.code = other.code;
    this.actions = other.actions.slice();
  }

  toString() {
    return this.name
      + '(with ' + this.actions.length + ' actions)';
  }

  parseFromJson(json:any) {
    this.name = json.name;
    this.gist = json.gist;
    this.code = json.code;
    this.actions = json.actions;
    return this;
  }
}
