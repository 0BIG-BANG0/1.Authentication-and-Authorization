import dotenv from "dotenv";
dotenv.config();
import express from "express";
import userRouters from "./src/routes/user.routes.js";
import jwtAuth from "./src/middleware/auth.middleware.js";
import { roleAuth } from "./src/middleware/roleAuth.js";
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.use("/api/user", userRouters);
// Provide token with the Bearer token in authorization header
app.get("/api/Home", jwtAuth, (req, res) => {
  res.send("<h1>Welcome to the Home Page</h1>");
});
//Prtexting route based on role
app.get(
  "/api/admin",
  jwtAuth,
  roleAuth("admin"), // Only allow access to users with the 'admin' role
  (req, res) => {
    res.send("<h1>Welcome to the Admin Page</h1>");
  }
);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default app;
