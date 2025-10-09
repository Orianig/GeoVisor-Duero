
export const standardResponse = (req, res, next) => {
  res.success = (data, message = 'Success', statusCode = 200) => {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
      timestamp: new Date().toISOString()
    });
  };
  
  res.error = (message = 'Error', statusCode = 500, details = null) => {
    return res.status(statusCode).json({
      success: false,
      message,
      details,
      timestamp: new Date().toISOString()
    });
  };
  
  res.notFound = (message = 'Resource not found') => {
    return res.status(404).json({
      success: false,
      message,
      timestamp: new Date().toISOString()
    });
  };
  
  res.badRequest = (message = 'Bad request', details = null) => {
    return res.status(400).json({
      success: false,
      message,
      details,
      timestamp: new Date().toISOString()
    });
  };
  
  next();
};
