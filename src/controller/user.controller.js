import { loginService, registerService } from "../service/user.service.js";
import { ApiError } from "../utills/ApiError.js";
import { generateToken } from "../utills/jwt.js";

export const registerUser = async (req, res) => {
  console.log("Registering user:");
  const { name, email, password, role } = req.body;
  console.log("Name:", name);
  console.log("Role:", role);
  try {
    const newUser = await registerService({ name, email, password, role });
    // console.log("User registered successfully:", newUser);
    res.status(201).json({
      message: "User registered successfully",
      user: { newUser },
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message || "Internal Server Error",
    });
    // console.log(error.statusCode, error.message);
  }
};
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    //here extract both user and token from loginService
    const { user, token } = await loginService({ email, password });
    //CHeck is user exists
    if (!user) {
      throw new ApiError("Invalid email or password", 401);
    }

    res.status(200).json({
      message: "User logged in successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token: token, // Send the token back to the client
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message || "Internal Server Error",
    });
    console.log("login COntroller", error.statusCode, error.message);
  }
};
