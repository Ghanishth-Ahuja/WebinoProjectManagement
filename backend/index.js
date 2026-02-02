import "dotenv/config";
import app from "./app.js";
import dbConnection from "./src/dbcon/dbConnection.js";
app.listen(process.env.PORT, () => {
  dbConnection();
  console.log(`Server running on port ${process.env.PORT}`);
});
