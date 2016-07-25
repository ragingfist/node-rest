import {Router} from 'express';
import util from 'util';
import PlanService from '../services/plan-service';

const planService = new PlanService();
const router = Router();

router.route('/')
        .get(getPlans)
        .post(addPlan);

function getPlans(req, res, next) {
    console.log("In getPlan");
    res.json(planService.getPlans());
}

function addPlan(req, res, next) {
    console.log(req.body);
    res.json(planService.addPlan(req.body));
}

export default router;