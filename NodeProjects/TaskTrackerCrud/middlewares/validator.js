const { body, validationResult } = require("express-validator");

exports.register = () => {
  //------------------------------------------------------
  //Validate anything within the body of the signUp request
  //------------------------------------------------------
  return [
    body("username").not().notEmpty().withMessage("Please provide your name."),
    // body("email")
    //   .isEmail()
    //   .withMessage("Please provide a valid email address."),
    // body("phone").not().notEmpty().withMessage("Please provide your phone."),
    // body("city").not().notEmpty().withMessage("Please provide your city."),
  ];
};

exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push(err.msg));

  return res.status(422).json({
    errors: extractedErrors,
  });
};
