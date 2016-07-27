import {Router} from 'express';
import * as planService from '../services/plan-service';
import winston from 'winston';
import AbstractError from '../errors/error';

const router = Router();

router.route('/')
        .get(getPlans, getPlans2)
        .post(addPlan);

function getPlans(req, res, next) {
    let plans = planService.getPlans();
    winston.info(`Plans: ${plans}`);
    req.plans = plans;
    next();
}

function getPlans2(req, res, next) {
    winston.info('in getPlans2');
    res.json(req.plans);
}

function addPlan(req, res, next) {
    try {
        let plan = planService.addPlan(req.body);
        res.json(plan);
    } catch (e) {
        console.log(`Caught exception: ${e}`);
        next(e);
    }
}

export default router;
