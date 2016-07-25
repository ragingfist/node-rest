'use strict';

import {Router} from 'express';


class PlansContoller {
    constructor() {
        this._router = Router();
        this._registerRoutes();
    }

    _registerRoutes() {
        this._router.get('/plans', this.getPlans.bind(this));
        this._router.post('/plans', this.addPlan.bind(this));
        this._router.get('/plans/:id', this.getPlansById.bind(this));
    }


}