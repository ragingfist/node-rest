export default class Errors {
    constructor(errors) {
        this._errors = errors;
    }

    toJSON() {
        return {
            errors: this._errors
        };
    }
}
