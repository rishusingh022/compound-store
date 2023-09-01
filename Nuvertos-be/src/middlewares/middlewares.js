const joi = require('joi');

const compoundSchema = joi.object().keys({
  id: joi.number().integer().min(1).optional(),
  compoundName: joi.string().required(),
  compoundDescription: joi.string().required(),
  compoundImage: joi.string().required()
});

const querySchema = joi.object().keys({
  pg: joi.number().integer().min(1).optional(),
});

const idSchema = joi.object().keys({
  id: joi.number().integer().min(1).required(),
});
  
module.exports = {
  compoundSchema,
  querySchema,
  idSchema
};

const validateCompound = (req, res, next) => {
  const { error } = compoundSchema.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.message });
  } else {
    next();
  }
};
  
const validateQuery = (req, res, next) => {
  const { error } = querySchema.validate(req.query);
  if (error) {
    res.status(400).json({ message: error.message });
  } else {
    next();
  }
};
  
const validateId = (req, res, next) => {
  const { error } = idSchema.validate(req.params);
  if (error) {
    res.status(400).json({ message: error.message });
  } else {
    next();
  }
};
  
module.exports = {
  validateCompound,
  validateQuery,
  validateId
};