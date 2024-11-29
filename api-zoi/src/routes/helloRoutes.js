import { Router } from 'express';
import { sayHello, sayHelloApi } from '../controllers/helloController.js';

const router = Router();

router.get('/', sayHello);
router.get('/api', sayHelloApi);

export default router;