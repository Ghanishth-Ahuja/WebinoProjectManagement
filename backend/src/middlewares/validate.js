// function validate = schema =>(req,res,next)=>{} here schema is the argument received bu validate function
function validate(schema) {
  return async function (req, res, next) {
    const result = schema.safeParse(req?.body);
    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: result.error.issues.map((e) => e.message).join(),
      });
    }
    req.body = result.data;
    next();
  };
}
export default validate;
