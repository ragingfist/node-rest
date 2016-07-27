import AbstractError from './error';

export class ValidationErrors extends AbstractError {
    constructor(errors) {
        super("Validation errors.");
        this.errors = errors;
    }

    toJSON() {
        return {
            name: this.name,
            errors: this.errors
        }
    }

    toString() {
        return `${this.name}: ${this.errors}`;
    }
}

export class RequiredError extends AbstractError {
    constructor(field) {
        super(`${field} is required.`);
    }
}

