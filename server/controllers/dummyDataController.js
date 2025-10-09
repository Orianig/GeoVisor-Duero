import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data', 'dummyData.json');

const readData = () => {
  try {
    const data = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading data:', error);
    return [];
  }
};

export const getAllData = () => {
  const dummyData = readData();
  
  return {
    success: true,
    message: 'Datos del río Duero obtenidos correctamente',
    data: dummyData,
    count: dummyData.length,
    timestamp: new Date().toISOString()
  };
};

export const getDataById = (id) => {
  const dummyData = readData();
  const point = dummyData.find(item => item.id === parseInt(id));
  
  if (!point) {
    return {
      success: false,
      message: 'Punto no encontrado',
      data: null,
      timestamp: new Date().toISOString()
    };
  }
  
  return {
    success: true,
    message: 'Punto encontrado correctamente',
    data: point,
    timestamp: new Date().toISOString()
  };
};
