import {ValidationErrors, RequiredError} from '../errors/validation-errors';
import * as planDao from '../daos/plan-dao';
import * as Utils from '../utils/obj-utils';

export function getPlans() {
    return planDao.getAll();
}

export function addPlan(plan) {
    // validations
    _validatePlan(plan);

    return planDao.create(plan);
}

function _validatePlan(plan) {
    let errors = [];
    if (plan == null || Utils.isUndefOrNullOrEmpty(plan)) {
        errors.push(new RequiredError('Plan'));
    }

    if (errors.length !== 0) {
        throw new ValidationErrors(errors);
    }
}

