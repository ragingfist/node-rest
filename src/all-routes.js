import {Router} from 'express';
import planRoutes from './controllers/plan-controller';

const router = Router();

// default route
router.get('/', function(req, res) {
    res.send('Hello world!');
});

// API routes
router.use('/plans', planRoutes);

export default router;
