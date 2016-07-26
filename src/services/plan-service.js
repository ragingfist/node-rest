import Errors from '../utils/errors';
import * as planDao from '../daos/plan-dao';

export function getPlans() {
    console.log("In planService.getPlans");
    return planDao.getAll();
}

export function addPlan(plan) {
    // validations
    let errors = _validatePlan(plan);
    if (errors.length !== 0) {
        return new Errors(errors);
    }

    return planDao.create(plan);
}

function _validatePlan(plan) {
    let errors = [];
    if (plan == null) {
        errors.push({type: "null-error", message: "Source object cannot be null."});
    }

    return errors;
}

