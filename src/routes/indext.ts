import { Router } from 'express';
const router = Router();

import { croqui } from '../controllers/indexcontrollers'


router.get('/predio', croqui.words ),
router.get('/predio/:id', croqui.getPrediobyid)



export default router;