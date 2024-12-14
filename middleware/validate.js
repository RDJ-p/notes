const { body, validationResult } = require("express-validator");

const validateTag = {
  tagValidation :
    body("name").notEmpty()
    .withMessage("Title is required")
    .isString().withMessage("Title is must be a string")
    .isLength({ min: 2 })
    .withMessage("Title is short (min 2 car) "),
  
}

const handleValidationErrors = (req, res, next)=> {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    const firstError = errors.array()[0].msg
    return res.status(422).json({message: firstError})
  }
  next();
}


module.exports = {
  validateTag,
  handleValidationErrors,
  validateNote
}
