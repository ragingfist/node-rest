/**
 * Created by bpeng on 7/27/16.
 */
export default class AbstractError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;

    }

    toJSON() {
        return {
            name: this.name,
            message: this.message
        };
    }

    toString() {
        return `${this.name}: ${this.message}`;
    }

}
