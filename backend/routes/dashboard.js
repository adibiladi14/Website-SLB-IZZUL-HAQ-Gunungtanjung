import { Router } from 'express';
const router = Router();
import { getVisitors } from '../controllers/dashboardController';

router.get('/visitors', getVisitors);

export default router;
