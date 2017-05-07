import {Router} from 'express';
import planRoutes from './controllers/plan-controller';

const router = Router();

// API routes
router.use('/plans', planRoutes);

export default router;
