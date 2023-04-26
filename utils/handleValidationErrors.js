import { validationResult } from "express-validator";

export default (req, res, next) => {
  const errors = validationResult(req);
  if (errors.errors.length > 0) {
    console.log(123);
    return res.status(400).json(errors.errors);
  }

  next();
};
