import express from 'express';
import dummyData from './dummyData.js';
import geojsonData from './geojsonData.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'GeoVisor Duero API Routes',
    version: '1.0.0',
    availableRoutes: [
      '/api/dataDummy',
      '/api/data/watersheds',
      '/api/data/wells'
    ],
    timestamp: new Date().toISOString()
  });
});

router.get('/status', (req, res) => {
  res.json({
    status: 'API is running',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

router.use('/dataDummy', dummyData);
router.use('/data', geojsonData);

export default router;
