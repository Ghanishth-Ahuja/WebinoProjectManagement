import express from "express";
import cors from "cors";
let app = express();
app.use(express.json({ limit: "16kb" }));
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  }),
);
app.use(express.urlencoded({ limit: "16kb" }));
app.use(express.static("public"))

export default app;
