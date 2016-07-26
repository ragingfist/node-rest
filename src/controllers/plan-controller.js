import {Router} from 'express';
import * as planService from '../services/plan-service';

const router = Router();

router.route('/')
        .get(getPlans)
        .post(addPlan);

function getPlans(req, res, next) {
    let plans = planService.getPlans();
    console.log("In getPlan : " + plans);
    res.json(plans);
}

function addPlan(req, res, next) {
    console.log(req.body);
    res.json(planService.addPlan(req.body));
}

export default router;