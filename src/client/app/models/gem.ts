/**
 * Created by Antony on 2016-05-14.
 */
export class Gem {
    name: string;
    version: string;

    // constructor(name:string, version:string){
    //     this.name = name;
    //     this.version = version;        
    // }

    copyMembers(other: Gem) {
        this.name = other.name;
        this.version = other.version;
    }

    toString() {
        return this.name + " (v" + this.version + ")"
    }

    parseFromJson(json: any) {
        this.name = json.name;
        this.version = json.version;
        return this;
    }
}