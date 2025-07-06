import dotenv from "dotenv";
dotenv.config();
import express from "express";
import userRouters from "./src/routes/user.routes.js";
import jwtAuth from "./src/middleware/auth.middleware.js";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.use("/api/user", userRouters);
app.get("/api/Home",jwtAuth,(req,res)=>{
  res.send("<h1>Welcome to the Home Page</h1>");
})

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default app;
