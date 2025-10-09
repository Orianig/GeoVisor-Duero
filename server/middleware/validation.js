
export const validateJSON = (req, res, next) => {
  if (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH') {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        error: 'Bad Request',
        message: 'Request body is required and cannot be empty',
        timestamp: new Date().toISOString()
      });
    }
  }
  next();
};

export const validateRequired = (requiredFields) => {
  return (req, res, next) => {
    const missingFields = [];
    
    requiredFields.forEach(field => {
      if (!req.body[field]) {
        missingFields.push(field);
      }
    });
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        error: 'Bad Request',
        message: `Missing required fields: ${missingFields.join(', ')}`,
        timestamp: new Date().toISOString()
      });
    }
    
    next();
  };
};

export const validateId = (req, res, next) => {
  const id = req.params.id;
  
  if (!id || !/^[a-zA-Z0-9-_]+$/.test(id)) {
    return res.status(400).json({
      error: 'Bad Request',
      message: 'Invalid ID format',
      timestamp: new Date().toISOString()
    });
  }
  
  next();
};
