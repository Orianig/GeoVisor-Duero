import express from 'express';
import { getAllData, getDataById } from '../controllers/dummyDataController.js';

const router = express.Router();

router.get('/', (req, res) => {
  const result = getAllData();
  res.json(result);
});

router.get('/:id', (req, res) => {
  const result = getDataById(req.params.id);
  const statusCode = result.success ? 200 : 404;
  res.status(statusCode).json(result);
});

export default router;
