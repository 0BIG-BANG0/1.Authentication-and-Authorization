import { registerUser, loginUser } from "../controller/user.controller.js";
import { User } from "../model/user.model.js";
import { ApiError } from "../utills/ApiError.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utills/jwt.js";

export const registerService = async (userData) => {
  const { name, email, password } = userData;
  try {
    //check if user already exists
    const existingUser = await User.find({ email });
    if (existingUser.length > 0) {
      throw new ApiError("User already exists with this email", 409);
    }
    //Hash the password before saving
    const saltROunds = 10;
    const hashedPassword = await bcrypt.hash(password, saltROunds);
    //create new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return newUser;
  } catch (err) {
    // console.log("Error in registerService:", err);
    throw err;
  }
};

export const loginService = async (credentials) => {
  const { email, password } = credentials;
  try {
    // ✅ Step 1: Find user
    //Find the user by email as email is unique
    const user = await User.findOne({ email });
    // console.log("User found:", user);
    //Check is user exist then compare password
    if (!user) {
      throw new ApiError("Invalid email or password", 401); // generic message for security
    }
    // ✅ Step 2: Compare passwords
    //Compare the password with the hashed password
    const isPassworVdalid = await bcrypt.compare(password, user.password);
    if (!isPassworVdalid) {
      throw new ApiError("Invalid email or password", 401); // generic message for security
    }
    // ✅ Step 3: Genreate JWT token
    const token = generateToken(user._id);
    console.log("Token generated:", token);

    // ✅ Step 4: Return user (safe fields only)
    return {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token: token // Send the token back to the client
    };
  } catch (err) {
    console.log("Error in registerService:", err);
    throw err;
  }
};
