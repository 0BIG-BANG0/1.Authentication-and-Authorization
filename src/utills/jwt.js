import jwt from "jsonwebtoken";

export const generateToken = (userId, role) => {
  return jwt.sign({ id: userId, role: role }, process.env.JWT_SECRET, {
    expiresIn: "1h", // Token will expire in 1 hour
  });
};
