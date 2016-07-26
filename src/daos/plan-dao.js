import uuid from 'node-uuid';
import Plan from '../models/plan';

let plans = [];

export function getAll() {
    return plans;
}

export function create(plan) {
    let newPlan = new Plan(plan);
    newPlan.setId(uuid.v4());
    plans.push(newPlan);
    return newPlan;
}
