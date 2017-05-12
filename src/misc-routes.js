import {Router} from 'express';

const router = Router();

// default route
router.get('/', function(req, res) {
    res.send('Hello docker swarm!');
});
// health check
router.get('/health', function(req, res) {
    res.send('OK');
});

export default router;
