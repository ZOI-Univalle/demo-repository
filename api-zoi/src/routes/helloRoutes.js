import { Router } from 'express';
import { sayHelloApi } from '../controllers/helloController.js';

const router = Router();
router.get('/hello', sayHelloApi);

export default router;