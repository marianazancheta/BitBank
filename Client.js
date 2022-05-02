export class Client{
    constructor(name, id) {
        this.name = name;
        this._id = id;
    }

    get id() {
        return this._id;
    }  
};