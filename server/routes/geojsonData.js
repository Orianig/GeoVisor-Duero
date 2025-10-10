import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { validatePagination } from '../middleware/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

const loadGeoJSON = (filename) => {
  const filePath = path.join(__dirname, '../data/geojson', filename);
  const rawData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(rawData);
};

const watershedData = loadGeoJSON('Watershed.json');
const wellData = loadGeoJSON('Well.json');

router.get('/watersheds', (req, res) => {
  res.success(watershedData, 'Watersheds retrieved successfully');
});

router.get('/wells', validatePagination, (req, res) => {
  const { limit, offset } = req.pagination;
  const paginatedWells = wellData.features.slice(offset, offset + limit);
  
  const responseData = {
    type: "FeatureCollection",
    features: paginatedWells,
    metadata: {
      totalFeatures: wellData.features.length,
      returned: paginatedWells.length,
      offset: offset,
      limit: limit
    }
  };
  
  res.success(responseData, 'Wells retrieved successfully');
});

export default router;
