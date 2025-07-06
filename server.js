import app from "./index.js";
import connectDB from "./src/db/mongodb.js";

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at: http://localhost:${port}`);
  connectDB()
});
