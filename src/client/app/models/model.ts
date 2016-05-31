/**
 * Created by Antony on 2016-05-14.
 */
export class Model {
    name: string;
    version: string;

    parseFromJson(json: any) {
        this.name = json.name;
        this.version = json.version;
        return this;
    }
}
