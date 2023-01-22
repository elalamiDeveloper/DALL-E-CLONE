import express from 'express';

import { generateDalle } from '../controllers/dalleController.js';

const router = express.Router();

router.route('/').post(generateDalle);

export { router };
