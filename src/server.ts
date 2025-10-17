import express from "express";
import dotenv from "dotenv";
import routes from "./routers.js";

const app = express();
const port = process.env.PORT || 3000;
dotenv.config();

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
