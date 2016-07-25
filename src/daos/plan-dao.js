'use strict';

import uuid from 'node-uuid';

let plans = [];

export default class PlanDao {
    constructor() {
        this._plans = plans;
    }

    getAll() {
        return this._plans;
    }
    
    create(plan) {
        plan.id = uuid.v4();
        this._plans.push(plan);
        return plan;
    }
}
