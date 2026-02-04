import "dotenv/config";
import app from "./app.js";
import dbConnection from "./src/dbcon/dbConnection.js";
dbConnection()
  .then(
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    }),
  )
  .catch((err) => {
    console.error(`Some error occured ${err}`);
  });
