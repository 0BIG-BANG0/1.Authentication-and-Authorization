import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  //1. Read the token from the request header
  const authHeader = req.headers["authorization"];

  //2. Check if the token is present
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send("Unauthorized: No token provided");
  }
  // Extract the token from the header without the "Bearer " prefix
  const token = authHeader.split(" ")[1]
  //3. Verify the token using jwt.verify
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    //4. If the token is valid, attach the user information to the request object
    req.user = payload
     //5 Call next() to proceed to the next middleware or route handler
    next();
  } catch (err) {
    return res.status(401).json({message:"Unauthorized: Invalid token"});
  }

 
  
};
export default jwtAuth;
