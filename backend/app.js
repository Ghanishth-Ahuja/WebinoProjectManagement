import express from "express";
let app = express();
app.use(express.json({ limit: "20kb" }));

export default app;
