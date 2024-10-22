import express from 'express';
import { handleSubtraction, fetchResults } from '../controllers/controllerSubtractor.js'; 
const router = express.Router();

router.post('/subtract', handleSubtraction);
router.get('/results', fetchResults);

export default router;
