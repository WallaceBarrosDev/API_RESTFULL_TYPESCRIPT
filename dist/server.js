import express from "express";
import dotenv from "dotenv";
import routes from "./routers.js";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3000;
dotenv.config();
app.use(express.json());
app.use(cors({
    origin: process.env.ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(routes);
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
