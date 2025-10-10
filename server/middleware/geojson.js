
export const validatePagination = (req, res, next) => {
  const { limit = 1000, offset = 0 } = req.query;
  
  const limitNum = parseInt(limit);
  const offsetNum = parseInt(offset);
  
  if (isNaN(limitNum) || limitNum < 1 || limitNum > 5000) {
    return res.badRequest(
      'Invalid limit parameter',
      { expected: 'number between 1 and 5000', received: limit }
    );
  }
  
  if (isNaN(offsetNum) || offsetNum < 0) {
    return res.badRequest(
      'Invalid offset parameter',
      { expected: 'number >= 0', received: offset }
    );
  }
  
  req.pagination = { limit: limitNum, offset: offsetNum };
  next();
};
