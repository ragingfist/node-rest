'use strict';

import Errors from '../utils/errors';
import PlanDao from '../daos/plan-dao';

export default class PlanService {
    constructor() {
        this._dao = new PlanDao();
    }

    getPlans() {
        return this._dao.getAll();
    }

    addPlan(plan) {
        // validations
        let errors = this._validatePlan(plan);
        if (errors.length !== 0) {
            return new Errors(errors);
        }

        return this._dao.create(plan);
    }

    _validatePlan(plan) {
        let errors = [];
        if (plan == null) {
            errors.push({type: "null-error", message: "Source object cannot be null."});
        }

        return errors;
    }
}
