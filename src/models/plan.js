export default class Plan {
    constructor({id, name, creationTime}) {
        this._id = id;
        this._name = name;
        this._creationTime = creationTime;
    }

    getId() {
        return this._id;
    }
    setId(id) {
        this._id = id;
    }

    getName() {
        return this._name;
    }
    setName(name) {
        this._name = name;
    }

    getCreationTime() {
        return this._creationTime;
    }
    setCreationTime(creationTime) {
        this._creationTime = creationTime;
    }
} 