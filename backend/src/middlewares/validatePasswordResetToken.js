import prisma from "../dbcon/dbConnection";
import ApiError from "../utils/ApiError";

// /**
//  * @type {import("express").RequestHandler}
//  */
export async function validatePasswordResetToken(req, res, next) {
  try {
    const { token } = req.query;
    const email = "";
    if (!token) throw new ApiError(400, "No Reset token provided");
    const validateToken = await prisma.passwordResetToken.findUnique({
      where: {
        email_token: { email, token },
      },
    });
    return;
  } catch (error) {
    console.error(error);
  }
}

