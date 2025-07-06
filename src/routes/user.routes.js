import express from "express";
import {registerUser, loginUser} from "../controller/user.controller.js";
//We import express again in authRoutes.js because that file creates its own router instance using:
const userRouter = express.Router();

// Define the routes for user registration and login
userRouter.post('/register',registerUser);
userRouter.post('/login', loginUser);

export default userRouter;
