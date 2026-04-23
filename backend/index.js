import "dotenv/config";
import app from "./app.js";
import "dotenv/config";
app.listen(Number(process.env.PORT), "0.0.0.0", () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
