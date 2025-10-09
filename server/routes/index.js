import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'GeoVisor Duero API Routes',
    version: '1.0.0',
    availableRoutes: [
      '/api/posts',
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

export default router;
