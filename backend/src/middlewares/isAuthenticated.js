import jwt from "jsonwebtoken";
import ApiError from "../utils/ApiError.js";

async function isAuthenticated(req, res, next) {
  const token = req?.cookies?.token;
  if (!token) {
    throw new ApiError(401, "No JWT Token");
  }
  const result = await jwt.verify(token, process.env.JWT_SECRET_KEY);

  if (!result) {
    throw new ApiError(401, "Unauthorized or expired token");
  }
  req.user = result;
  next();
}
export default isAuthenticated;
