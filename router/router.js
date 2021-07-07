import express from 'express';
import { sendMail } from '../controller/controller.js';

const router = express.Router();

router.post('/mail',sendMail);

export default router;