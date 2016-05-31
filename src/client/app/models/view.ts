/**
 * Created by Antony on 2016-05-14.
 */

export class View {
  path:string;
  code:string;
  gist:string;

  constructor() {
    this.path = 'Empty';
  }

  copyMembers(other:View) {
    this.path = other.path;
    this.gist = other.gist;
    this.code = other.code;
  }

  toString() {
    return this.path;
  }

  parseFromJson(json:any) {
    this.path = json.path;
    this.gist = json.gist;
    this.code = json.code;
    return this;
  }
}
