class ApiError extends Error {
  constructor(
    statuscode,
    message = "Something went wrong",
    stack,
    errors = [],
  ) {
    super(message);
    this.statuscode = statuscode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

// let result = sendErrorResponse(500, "something  went wrong");
// console.log(result);
// console.log(typeof result);
// for (const key of Object.entries(result)) {
//   console.log(key);
// }

export default ApiError;
