import jwt from "jsonwebtoken";

export default async function generateAccessToken(id, name, email) {
  return jwt.sign({ id, name, email }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1d",
  });
}
